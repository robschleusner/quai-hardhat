# Quai Hardhat

Hardhat is an Ethereum development environment for professionals. It facilitates performing frequent tasks, such as running tests, automatically checking code for mistakes or interacting with a smart contract. Check out the [plugin list](https://hardhat.org/plugins/) to use it with your existing tools.

This is a Quai fork that reroutes the Solidity download to our link. Other than that you can use Hardhat just like you always have.

## Usage

1. To use, open an existing NPM project's `package.json` file. In the `@devDependencies` section, add the following line:

```
"hardhat": "git@github.com:dominant-strategies/quai-hardhat.git",
```
2. Next, run `npm i` to install dependencies

3. To remove your existing Solidity compiler so you can replace it with SolidityX, you need to run `npx hardhat clean --global`
  
5. Finally, you can run `npx hardhat compile` and SolidityX will be downloaded

## Changes

These are the changes made compared to the standard hardhat npm package.

1. Made changes to `internal/solidity/compiler/downloader.js` and `src/internal/solidity/compiler/downloader.ts`
   
     a. Comment out if statement that checks verification in `downloadCompiler(version)`
   
     b. Comment out if statement that checks `fs_extra_1.default.pathExists...` in `getCompiler(version)`
   
     c. Change url to point to your compiler in `_downloadCompiler(build)`

3. Add local dependencies folder to store `es-lint-plugin-hardhat-internal-rules` and `eslint-plugin-slow-imports` since npm couldn't find them

## Documentation

On [Hardhat's website](https://hardhat.org) you will find:

- [Guides to get started](https://hardhat.org/getting-started/)
- [Hardhat Network](https://hardhat.org/hardhat-network/)
- [Plugin list](https://hardhat.org/plugins/)

## Contributing

Contributions are always welcome! Feel free to open any issue or send a pull request.

Go to [CONTRIBUTING.md](./CONTRIBUTING.md) to learn about how to set up Hardhat's development environment.

## Feedback, help and news

[Hardhat Support Discord server](https://hardhat.org/discord): for questions and feedback.

[Follow Hardhat on Twitter.](https://twitter.com/HardhatHQ)

## Happy building!

Built by the [Nomic Foundation](https://nomic.foundation/) for the Ethereum community.

Join our [Hardhat Support Discord server](https://hardhat.org/discord) to stay up to date on new releases, plugins and tutorials.
