import { ethers } from 'hardhat';

(async () => {
    const exampleContr = await ethers.getContractFactory('Example');
    const exampleDeploy = await exampleContr.deploy();

    await exampleDeploy.deployed(); //wait for block to be mined
    console.log('Example deployed at', exampleDeploy.address);
})().catch((err) => {
    console.error(err);
});
