const hre = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const contract = await ethers.deployContract("Counter");
    console.log("Contract adress:", await contract.getAddress());
}
//Deploy
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});