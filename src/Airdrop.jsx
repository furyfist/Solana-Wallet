import { useWallet } from '@solana/wallet-adapter-react';
import { useConnection } from '@solana/wallet-adapter-react';

function Airdrop() {
    const  wallet  = useWallet();
    const { connection } = useConnection();
    
    async function sendAirdrop(){
        alert("Sending Airdrop");
        const amount  = document.getElementById('publicKey').value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        alert('Sending Airdrop Done');
    }
    return (
        <div>
            
            <input id="publicKey" type="text" placeholder="Enter Amount" />
            <button onClick={sendAirdrop}>Send Airdrop</button>
        </div>
    )
}

export default Airdrop;