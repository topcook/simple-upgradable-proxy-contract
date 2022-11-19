const { ethers, upgrades } = require('hardhat');
async function main () {
  const ProxyExample = await ethers.getContractFactory('ProxyExample');
  const proxyExample = await upgrades.deployProxy(ProxyExample, [10], { initializer: 'initialize' });
  await proxyExample.deployed()
  console.log("proxyExample's proxy contract deployed to: ", proxyExample.address);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(proxyExample.address);
  console.log("implementation address: ", implementationAddress);

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});