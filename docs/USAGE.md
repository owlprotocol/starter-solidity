# Usage

## Solidity Source

Your Solidity source is stored under `src/solidity`. This is where you define your smart contracts. Smart contracts can then be compiled using `truffle compile`.

## Typechain

The template is configured to use [TypeChain](https://github.com/celo-org/TypeChain) which generates Typescript interfaces using the contract build artifacts. Typechain has a plugin system for generating smart contract interfaces meant to be used with popular web3 Typescript libraries.
We support the following contract abstractions:

-   Web3.js
-   Ethers
-   Truffle

In general, we recommend using the Truffle abstraction for unit tests as it's easy to setup (pre-computes gas etc...). The Web3.js abstraction is recommended for event listeners or in production (eg. integrate with UI).

## Mocha Tests

We use MochaJS for testing.

TODO: Add info on parrallel tests.
**Running Tests**
Use the Typescript compiler in watch mode using `pnpm run tsc:watch`.
Run individual tests with `mocha lib/test/**/Mytest.js`.
Run all tests with `pnpm run test`.

## Smart Contract Deployment

TODO: Add info on deployment.

## Publish JS Library

This template is **NOT** designed to be used as the starter for a DApp frontend. Instead, it is meant to be used to develop a JS library that can then be included as a dependency in multiple projects. One yor smart contracts are well-tested and ready to be integrated into other projects, you will need to publish it to a package repository.

Files in the `lib/` folder and matching the `files` defined in `package.json` will be included in your package. For example, any file under `../test/` or soldity file starting with `Test*.sol` will be excluded from the production library.

Build with `pnpm run build`.
Publish with ` pnpm publish --no-git-checks --access public`

TODO: Optimize deployment between solditiy/abi/artifacts.

## ESLint

The template includes ESLint presets using the following plugins:

-   @typescript-eslint/recommended: Typescript ESLint
-   prettier/recommended: Prettier ESLint
-   import/recommended: Avoid circular imports
-   import/typescript: Import plugin Typescript settings

**Linting**
Run eslint with `pnpm lint:fix`.

**Lint on commit**
When making a git commit, the [husky](https://github.com/typicode/husky) library will automatically run a pre-commit hook that auto-fixes staged lint errors. Warnings are ok, but errors that can't be fixed will require fixing for your commit to be approved. Alternatively, use the `--no-verify` flag to skip pre-commit hooks (a simple override but not recommended in long-term).

## Github Workflows

This template includes some helpful Github workflows to automate & standardize development processes.

### Create Issue Bot (CIB)

TODO: Describe using cib.

### Test & Publish

TODO: Describe automation requirements.

## Docs

This project uses 2 libraries to generate reference docs:

-   [solidity-docgen](https://github.com/OpenZeppelin/solidity-docgen) for the smart contracts
-   [Typedoc](https://typedoc.org/) for any Typescript libraries (eg. some utility functions) with [typedoc-plugin-markdown](https://github.com/tgreyuk/typedoc-plugin-markdown)

Both of these libraries generate docs as easy to use markdown files. For a nicer UX consider integrating [Docusaurus](https://docusaurus.io/) and [docusaurus-plugin-typedoc](https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/docusaurus-plugin-typedoc).
