const { ethers, upgrades } = require('hardhat');
async function main () {
  const ProxyExample = await ethers.getContractFactory('ProxyExample');

  const proxyAddress = "0x406bc6aC07Ab2c2A3C4fc044D85b72Fc10fDb37a";
  const proxyExample = await upgrades.upgradeProxy(proxyAddress, ProxyExample);

  console.log("Upgraded!: proxy address: ", proxyExample.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});