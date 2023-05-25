const { etehrs, ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */

  const whiteListContract = await ethers.getContractFactory("Whitelist");

  const deployedWhiteListContract = await whiteListContract.deploy(10);
  // 10 is the max number of whitelisted addresses allowed

  await deployedWhiteListContract.deployed();

  console.log(
    "Whitelist Contract Address : ",
    deployedWhiteListContract.address
  );
}

// Deployed Contract Address : 0xDCB86162338a0f24e7C838e0f56ec317E9488D8a

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
