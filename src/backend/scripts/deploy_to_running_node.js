const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

async function main() {
  // Connect to the running Hardhat node with network config
  const provider = new ethers.providers.JsonRpcProvider({
    url: "http://127.0.0.1:8545",
    timeout: 20000
  });
  
  // Set the network manually
  provider._networkPromise = Promise.resolve({
    name: "localhost",
    chainId: 31337
  });
  
  // Use the first account from Hardhat node
  const privateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
  const signer = new ethers.Wallet(privateKey, provider);
  
  console.log("Deploying with account:", signer.address);
  console.log("Account balance:", ethers.utils.formatEther(await signer.getBalance()));
  
  // Read the compiled contract
  const contractPath = path.join(__dirname, "..", "artifacts", "contracts", "EtherFund.sol", "EtherFund.json");
  const contractJson = JSON.parse(fs.readFileSync(contractPath, "utf8"));
  
  // Create contract factory
  const ContractFactory = new ethers.ContractFactory(contractJson.abi, contractJson.bytecode, signer);
  
  // Deploy the contract
  console.log("Deploying EtherFund contract...");
  const contract = await ContractFactory.deploy();
  
  await contract.deployed();
  
  console.log("EtherFund deployed to:", contract.address);
  console.log("Transaction hash:", contract.deployTransaction.hash);
  
  // Update the .env file
  const envPath = path.join(__dirname, "..", "..", "..", ".env");
  const envContent = `REACT_APP_CONTRACT_ADDRESS=${contract.address}\n`;
  fs.writeFileSync(envPath, envContent);
  
  console.log("Updated .env file with new contract address");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
