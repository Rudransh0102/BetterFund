# BetterFund Local Development Setup

## MetaMask Configuration

To test the BetterFund application locally, you need to configure MetaMask to connect to your local Hardhat network.

### 1. Add Hardhat Network to MetaMask

In MetaMask, add a new network with these settings:
- **Network Name**: `Hardhat Local`
- **RPC URL**: `http://127.0.0.1:8545`
- **Chain ID**: `31337`
- **Currency Symbol**: `ETH`

### 2. Import a Test Account

Use one of these private keys to import a test account in MetaMask:

**Account #0**: 
- Address: `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`
- Private Key: `0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`

**Account #1**: 
- Address: `0x70997970C51812dc3A010C7d01b50e0d17dc79C8`
- Private Key: `0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d`

⚠️ **WARNING**: These are test accounts with publicly known private keys. Never use them on mainnet or with real funds!

### 3. Contract Address

The smart contract is deployed at: `0x5FbDB2315678afecb367f032d93F642f64180aa3`

### 4. Running the Application

1. Start the Hardhat node: `cd src/backend && npx hardhat node`
2. In another terminal, start the React app: `npm start`
3. Connect MetaMask to the Hardhat Local network
4. Use the imported test account to interact with the application

## Troubleshooting

- If you get "nonce too high" errors, reset your MetaMask account in Settings > Advanced > Reset Account
- Make sure you're connected to the correct network (Hardhat Local)
- Ensure the Hardhat node is running before trying to interact with the app
