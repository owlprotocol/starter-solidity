/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import { HardhatUserConfig } from 'hardhat/types/config';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-truffle5';
import '@nomiclabs/hardhat-web3';
import '@nomiclabs/hardhat-ethers';

const config: HardhatUserConfig = {
    solidity: '0.8.0',
    networks: {
        hardhat: {
            chainId: 1337,
        },
        rinkeby: {
            url: '',
            accounts: [],
        },
    },
    typechain: {
        outDir: 'typechain', //default
        target: 'web3-v1',
    },
};

export default config;
