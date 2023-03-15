import React, { useState } from 'react';
import { PublicKey, BigNumber, Keypair } from '@solana/web3.js';
import SolanaPayQRCode from './SolanaPayQRCode';

const PaymentForm = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [label, setLabel] = useState('');
  const [message, setMessage] = useState('');
  const [memo, setMemo] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleReferenceChange = (event) => {
    setReference(event.target.value);
  };

  const handleLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleMemoChange = (event) => {
    setMemo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowQRCode(true);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Recipient:
          <input type="text" value={recipient} onChange={handleRecipientChange} />
        </label>
        <br />
        <label>
          Amount:
          <input type="text" value={amount} onChange={handleAmountChange} />
        </label>
        <br />
        <label>
          Reference:
          <input type="text" value={reference} onChange={handleReferenceChange} />
        </label>
        <br />
        <label>
          Label:
          <input type="text" value={label} onChange={handleLabelChange} />
        </label>
        <br />
        <label>
          Message:
          <input type="text" value={message} onChange={handleMessageChange} />
        </label>
        <br />
        <label>
          Memo:
          <input type="text" value={memo} onChange={handleMemoChange} />
        </label>
        <br />
        <button type="submit">Generate QR Code</button>
      </form>
      {showQRCode && (
        <SolanaPayQRCode
          recipient={new PublicKey(recipient)}
          amount={new BigNumber(amount)}
          reference={new Keypair().publicKey}
          label={label}
          message={message}
          memo={memo}
        />
      )}
    </div>
  );
};

export default PaymentForm;

