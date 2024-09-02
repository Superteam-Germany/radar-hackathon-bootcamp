import { 
    Connection, 
    Keypair, 
    Transaction, 
    SystemProgram, 
    LAMPORTS_PER_SOL, 
    sendAndConfirmTransaction 
} from "@solana/web3.js"

function sleep(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

(async () => {
    
    // STEP 1: Generate a new keypair
    const keypair = Keypair.generate();
    console.log("The PublicKey of your Keypair", keypair.publicKey.toBase58());
    console.log("THIS IS DANGEROUS: To save your wallet, copy and paste the following into a JSON file: [",keypair.secretKey, "]");

    // STEP 2: Connect to the cluster
    const connection = new Connection("https://api.devnet.solana.com");

    // STEP 3: Request an airdrop
    const airdropSignature = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
    console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);

    await sleep(20_000);

    // STEP 4: Check your balance
    const balance = await connection.getBalance(keypair.publicKey);
    console.log("Your balance is ", balance, " SOL");

    // STEP 5: Create a new account and transfer SOL
    let to = Keypair.generate().publicKey;

    const transaction = new Transaction()
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: keypair.publicKey,
            toPubkey:  to,
            lamports: 1 * LAMPORTS_PER_SOL,
        })
    );
    transaction.recentBlockhash = (await connection.getLatestBlockhash('confirmed')).blockhash;
    transaction.feePayer = keypair.publicKey;
    
    const transferSignature = await sendAndConfirmTransaction(connection, transaction, [keypair]);
    console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${transferSignature}?cluster=devnet`);
})();