use solana_sdk::{
    message::Message,
    pubkey::Pubkey,
    signature::{Keypair, Signer},
    system_instruction::{create_account, transfer},
    transaction::Transaction,
    transport::TransportError,
};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Crear una cuenta de Solana Keypair
    let from_keypair = Keypair::new();

    // Crear una conexión con un nodo de Solana
    let url = "https://api.devnet.solana.com".to_string();
    let transport = solana_sdk::transport::Transport::new(url);
    let client = solana_sdk::client::Client::new(transport);

    // Crear una cuenta de Solana para enviar USDC
    let to_keypair = Keypair::new();
    let to_pubkey = to_keypair.pubkey();
    let to_create_account_instruction = create_account(
        &from_keypair.pubkey(),
        &to_pubkey,
        0,
        spl_token::state::Account::LEN as u64,
        &spl_token::id(),
    );

    // Crear una transacción para enviar USDC
    let transfer_instruction = transfer(
        &from_keypair.pubkey(),
        &to_pubkey,
        1000,
    );
    let message = Message::new(&[to_create_account_instruction, transfer_instruction], Some(&from_keypair.pubkey()));
    let mut transaction = Transaction::new(&[&from_keypair], message, client.get_recent_blockhash()?);

    // Firmar y enviar la transacción
    transaction.sign(&[&from_keypair], client.get_recent_blockhash()?);
    let result = client.send_and_confirm_transaction(&transaction)?;

    // Imprimir el resultado de la transacción
    println!("{:?}", result);

    Ok(())
}
