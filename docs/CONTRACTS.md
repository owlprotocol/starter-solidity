# Contracts

TODO: Add doc links.

## Directory Structure

```
lib
├── abi # abi output from src/
|
├── ethers # ethers contract abstractions codegenned from abis only (no bytecode)
│
├── solidity # the contracts themselves, in .sol form
│
├── truffle  # truffle contract abstractions codegenned from abis + bytecode
|
└── web3  # web3 contract abstractions codegenned from abis + bytecode
```

## Usage

These smart contracts can be imported as a dependency in various ways described below.

### Solidity

The solidity smart contracts themselves can simply be imported via the `solidity` directory of `@owlprotocol/solidity-starter`.

```solidity
import "@owlprotocol/solidity-starter/solidity/Example.sol";
```

### JSON Artifacts

```typescript
import ExampleArtifact from '@owlprotocol/solidity-starter/abi/Example.json';
```

### Ethers

```typescript
import ExampleEthers from '@owlprotocol/solidity-starter/ethers/Example';
const example = ExampleEthers.attach(deployed.address).connect(
    new ethers.providers.JsonRpcProvider('http://localhost:8545'),
);
```

### Truffle

```typescript
import ExampleTruffle from '@owlprotocol/solidity-starter/truffle/Example';
const example = await ExampleTruffle.new();
```

### Web3

```typescript
import ExampleWeb3 from '@owlprotocol/solidity-starter/web3/Example';
const example = ExampleWeb3(web3);
```
