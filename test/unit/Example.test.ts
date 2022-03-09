import { expect } from 'chai';
import { artifacts, ethers, web3 } from 'hardhat';
import { AbiItem } from 'web3-utils';
const ExampleTruffle = artifacts.require('Example');
import ExampleAbi from '../../artifacts/contracts/Example/Example.sol/Example.json';

describe('Example', function () {
    let exampleContr: any;
    it('sum(): truffle contract', async () => {
        exampleContr = await ExampleTruffle.new(); //deployed with truffle
        expect(Number(await exampleContr.sum(1, 2))).to.equal(3, '1+2=3');
    });
    //typechain target is web3-v1
    it('sum(): web3 contract', async () => {
        const exampleContractInstance = new web3.eth.Contract(ExampleAbi.abi as AbiItem[], exampleContr.address);
        expect(Number(await exampleContractInstance.methods.sum(1, 2).call())).to.equal(3, '1+2=3');
    });
    //typechain target is ethers-v5
    it('sum(): ethers contract', async () => {
        const exampleContractInstance = await ethers.getContractFactory('Example');
        const exampleDeploy = await exampleContractInstance.deploy();
        await exampleDeploy.deployed(); //wait until block is mined
        expect(Number(await exampleDeploy.sum(1, 2))).to.equal(3, '1+2=3');
    });
});
