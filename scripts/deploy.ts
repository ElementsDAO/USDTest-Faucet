import { ethers } from "hardhat";

const fs = require("fs");

async function main() {
  const [owner] = await ethers.getSigners();
  console.log("owner");
  console.log(owner.address);

  const USDTest = await ethers.getContractFactory("USDTest");
  const usdTest = await USDTest.deploy();
  await usdTest.deployed();

  console.log("USDTest deployed to:", usdTest.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
