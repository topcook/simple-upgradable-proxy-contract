const { ethers, upgrades } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("Upgradable proxy contract Test!", () => {
  let proxyAddress;
  let ProxyExampleContract;
  let proxyExampleContract;

  it("deploy proxy contract", async () => {
    const [owner] = await ethers.getSigners();
    let _width = 10;

    ProxyExampleContract = await ethers.getContractFactory("ProxyExample");
    proxyExampleContract = await upgrades.deployProxy(ProxyExampleContract, [_width], { initializer: "initialize" });
    console.log("ProxyExampleContract deployed to:", proxyExampleContract.address);
    proxyAddress = proxyExampleContract.address;

    const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyExampleContract.address);
    console.log("implementation address: ", implementationAddress);
  });

  it("width should be the same", async () => {
    let width = await proxyExampleContract.getWidth();
    expect(width.toNumber()).to.equal(10);
    console.log("width: ", width.toNumber());
  });

  it("upgrades proxy contract", async () => {
    await upgrades.upgradeProxy(proxyAddress, ProxyExampleContract);
  });

  it("should set the height", async () => {
    let _height = 20;
    await proxyExampleContract.setHeight(_height);
    
    let height = await proxyExampleContract.getHeight();
    expect(height.toNumber()).to.equal(_height);
    console.log("height: ", height);
  });
});
