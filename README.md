# Simple Upgradable proxy contract

## How to deploy proxy contract
1. Deploy the ProxyExample contract's first version.\
    `npx hardhat compile`\
    `npx hardhat run --network mumbai .\deploy\proxyDeploy.js`
2. Visit the proxy address in mumbai scan and click code
3. In the code tab, click 'More Options' button and select 'Is this a proxy?' in the dropdown menu.
4. Click verify button in the modal showing in the new page
5. You can get the implementation address of this proxy address. 
6. Verify the implementation contract.\
    `npx hardhat verify <implementationAddress>`
7. In the modal of 4, click save button. Success!

## How to upgrade proxy contract
1. Write proxyUpgrade.js script. In this file, copy the proxy contract address in the proxyAddress variable.
2. Deploy the upgraded contract.\
    `npx hardhat compile`\
    `npx hardhat run --network mumbai .\deploy\proxyUpgrade.js`
3. Repeat the 2 ~ 7 in the How to deploy proxy contract
4. In the 'Read as Proxy' and 'Write as Proxy' tab, you can see the updated functions.

## You must append added storage variables at the end of existing storage variables.
If you insert in the middle of exisitng storage variables, then the storage will break.