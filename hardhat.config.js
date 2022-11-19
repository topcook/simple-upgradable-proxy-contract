require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

const {
  POLYGON_TESTNET_API_URL,
  BSC_TESTNET_API_URL,
  BSC_MAINNET_API_URL,
  ETHERSCAN_API_KEY,
  BSCSCAN_API_KEY,
  POLYGONSCAN_API_KEY,
  PRIVATE_KEY
} = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
      }
    }
  },
  paths: {
    artifacts: './src/artifacts'
  },
  mocha: {
    timeout: 30000000
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    bsc_mainnet: {
      url: BSC_MAINNET_API_URL,
      allowUnlimitedContractSize: true,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 7000000,
      gasPrice: 30000000000
    },
    bsc_testnet: {
      url: BSC_TESTNET_API_URL,
      allowUnlimitedContractSize: true,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 7000000,
      gasPrice: 30000000000
    },
    mumbai: {
      url: POLYGON_TESTNET_API_URL,
      allowUnlimitedContractSize: true,
      accounts: [`0x${PRIVATE_KEY}`],
      gas: 7000000,
      gasPrice: 30000000000
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      goerli: ETHERSCAN_API_KEY,
      bscTestnet : BSCSCAN_API_KEY,
      polygonMumbai: POLYGONSCAN_API_KEY,
      polygon: POLYGONSCAN_API_KEY
    }
  }
};
