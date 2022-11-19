# Simple Upgradable proxy contract

## How to deploy proxy contract
1. Deploy the ProxyExample contract's first version.\
    `npx hardhat compile`\
    `npx hardhat run --network mumbai .\deploy\proxyDeploy.js`\
2. Visit the proxy address in mumbai scan and click code
3. In the code tab, click 'More Options' button and select 'Is this a proxy?' in the dropdown menu.
4. Click verify button in the modal showing in the new page
5. You can get the implementation address of this proxy address. 
6. Verify the implementation contract.\
    `npx hardhat verify <implementationAddress>`
7. In the modal of 4, click save button. Success!    