# Kata Template for Test-Commit-Revert (TCR)

Here's the original idea of [test && commit || revert](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864) by [Kent Beck](https://www.kentbeck.com/).

This is a starter project for a _coding kata_ using `test && commit || revert` and [TypeScript](https://www.typescriptlang.org/); where TCR is enforced as a Git _pre-commit hook_.

**Note:** If you want support for more languages, have a look at [joejag/tcr-starters](https://github.com/joejag/tcr-starters) by [Joe Wright](https://code.joejag.com/).

**Note:** Although, this kata template is using a _pre-commit hook_, the use of pre-commit hooks has major downsides and is often a focus on the "wrong thing"; cf. [Pre-commit: Don't git hooked!](https://www.thoughtworks.com/insights/blog/pre-commit-don-t-git-hooked) by Matt Riley.

## Setup

1. Checkout this repository (or `use this template` to create a new one)
2. Install dependencies with `npm i`, `pnpm i`, or `yarn install` (Husky hooks should be installed)

## How to Use

* Choose a kata; e.g.,
  * from here [gamontal/awesome-katas](https://github.com/gamontal/awesome-katas)
  * or here [Kata-log](https://kata-log.rocks/)
  * or any other that you want to do in [TypeScript](https://www.typescriptlang.org/)
* Commit often
  * Use Git as you are used to (the pre-commit hook will be executed)
  * Use `npm run tcr` to commit (it will execute `test && commit || revert`)
  * Use `npm run tcr-timeboxed 5` to continuously `test && commit || revert` in `5` minute intervalls
    * combine the exercise with `npm run tcr` or `npm run tc` (without reset) to commit early
    * cancel with `ctrl+c`
