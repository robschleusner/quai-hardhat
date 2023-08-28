# Quai Hardhat

Hardhat is an Ethereum development environment for professionals. It facilitates performing frequent tasks, such as running tests, automatically checking code for mistakes or interacting with a smart contract. Check out the [plugin list](https://hardhat.org/plugins/) to use it with your existing tools.

This is a Quai fork that reroutes the Solidity download to our link. Other than that you can use Hardhat just like you always have.

## Usage

1. To use, open an existing NPM project's `package.json` file. In the `@devDependencies` section, add the following line:

```
"hardhat": "git@github.com:dominant-strategies/quai-hardhat.git",
```
2. Next, run `npm i` to install dependencies

3. Finally, to remove your existing Solidity compiler so you can replace it with SolidityX, you need to run `npx hardhat clean --global`. Now run `npx hardhat compile` and SolidityX will be downloaded.

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
