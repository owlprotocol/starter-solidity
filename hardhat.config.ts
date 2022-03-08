/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import { HardhatUserConfig } from 'hardhat/types/config';

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
};

export default config;
