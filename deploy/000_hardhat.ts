import { ethers, network } from 'hardhat';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { Example } from '../typechain';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts } = hre;
    const { deploy } = deployments;
    const { other } = await getNamedAccounts();

    if (network.name === 'hardhat') {
        await deploy('Example', {
            from: other,
            args: [],
            log: true,
        });

        const { address } = await deployments.get('Example');
        const ERC721Contract = (await ethers.getContractAt('Example', address)) as Example;
        console.log(`Arithmetic: ${await ERC721Contract.sum(1, 2)}`);
        console.log(`Address: ${address}`);
    }
};

export default deploy;
