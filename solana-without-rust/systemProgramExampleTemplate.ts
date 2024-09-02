import { 
    Connection, 
    Keypair, 
    Transaction, 
    SystemProgram, 
    LAMPORTS_PER_SOL, 
    sendAndConfirmTransaction 
} from "@solana/web3.js"

// STEP 1: Generate a new keypair
// const keypair = ???
// console.log("The PublicKey of your Keypair", keypair.publicKey.toBase58());
// console.log("THIS IS DANGEROUS: To save your wallet, copy and paste the following into a JSON file: ", keypair.secretKey);

// STEP 2: Connect to the cluster
// const connection = ???;

(async () => {
    // STEP 3: Request an airdrop
    // const airdropSignature = ???
    // console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${airdropSignature}?cluster=devnet`);

    // STEP 4: Check your balance
    // const balance = ???
    // console.log("Your balance is ", balance, " SOL");

    // STEP 5: Create a new account and transfer SOL
    // let to = ???
    // console.log("The PublicKey of your new Keypair", to.toBase58());

    // const transaction = ???
    // transaction.add(???);
    // transaction.recentBlockhash = ???
    // transaction.feePayer = ???
    
    // const transferSignature = ???
    // console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${transferSignature}?cluster=devnet`);
})();