import React, { useState } from 'react';
import { Connection, PublicKey, Keypair, Transaction, SystemProgram, sendAndConfirmTransaction } from '@solana/web3.js';

function Transfer() {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [status, setStatus] = useState('');

  async function handleTransfer() {
    setStatus('Transferring funds...');

    // Connect to Solana network
    const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');

    // Create a new keypair for the sender's wallet
    const fromWallet = Keypair.generate();

    // Get the public key for the sender's wallet
    const fromPublicKey = fromWallet.publicKey;

    // Get the public key for the recipient's wallet
    const toPublicKey = new PublicKey(toAddress);

    // Get the balance of the sender's wallet
    const fromAccountInfo = await connection.getAccountInfo(fromPublicKey);
    const fromBalance = fromAccountInfo ? fromAccountInfo.lamports : 0;

    // Create a new transaction to transfer funds from the sender to the recipient
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromPublicKey,
        toPubkey: toPublicKey,
        lamports: amount,
      })
    );

    // Sign the transaction with the sender's private key
    transaction.feePayer = fromPublicKey;
    const signature = await sendAndConfirmTransaction(connection, transaction, [fromWallet]);

    // Update the status with the transaction signature
    setStatus(`Transfer complete: ${signature}`);
  }

  return (
    <div>
      <h1>Transfer Funds</h1>
      <label>From Address:</label>
      <input type="text" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} />
      <br />
      <label>To Address:</label>
      <input type="text" value={toAddress} onChange={(e) => setToAddress(e.target.value)} />
      <br />
      <label>Amount:</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br />
      <button onClick={handleTransfer}>Transfer</button>
      <br />
      <div>{status}</div>
    </div>
  );
}

export default Transfer;
