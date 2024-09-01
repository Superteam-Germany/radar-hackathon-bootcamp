import { Connection, Keypair } from "@solana/web3.js";
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer, getMint } from "@solana/spl-token"

import wallet from "./wallet.json"

// STEP 1: Connect the Wallet we created in the previous script
// const keypair = ???

// STEP 2: Connect to the cluster
// const connection = ???

(async () => {
    // STEP 3: Create a new token mint
    // const mintPubkey = ???
    // console.log("Success! The PublicKey of your Mint", mintPubkey.toBase58());

    // STEP 4: Check the supply of the new mint
    // const mintInfo = ???
    // console.log("Current supply of the new mint:", mintInfo.supply.toString());

    // STEP 5: Create a new token account
    // const tokenAccount = ???
    // console.log("Success! The PublicKey of your Token Account", tokenAccount.address.toBase58());

    // STEP 6: Mint tokens to the new account and check the Supply again
    // let mintSignature = ???
    // console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${mintSignature}?cluster=devnet`);

    // const mintInfoUpdated = ???
    // console.log("Current supply of the new mint:", mintInfoUpdated.supply.toString());

    // STEP 7: Create a new Wallet and Transfer tokens to the new account
    // const to = ???
    // console.log("The PublicKey of your Keypair", to.toBase58());

    // const toTokenAccount = ???
    // console.log("Success! The PublicKey of your Token Account", toTokenAccount.address.toBase58());

    // const transferSignature = ???
    // console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${transferSignature}?cluster=devnet`);
})();