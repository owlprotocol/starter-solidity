import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Example } from '../../typechain';

describe('Example Suite', async () => {
    let example: Example;

    it('Example Contract', async () => {
        const exampleFactory = await ethers.getContractFactory('Example');
        //@ts-ignore
        example = await exampleFactory.deploy();
        await example.deployed();

        const sum = await example.sum(1, 2);
        expect(sum).to.equal(3);
    });
});
