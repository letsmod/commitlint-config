# @polyup/commitlint-config

Shareable `commitlint` config enforcing the [PolyUp](https://polyup.com) commit convention

## Getting Started

1. Add development dependencies:
   * [@polyup/commitlint-config](https://github.com/Polyup-Open-Source/commitlint-config) - this config
   * [@commitlint/cli](https://github.com/conventional-changelog/commitlint) - a CLI tool to check commit messages
   * [husky](https://github.com/typicode/husky) - a tool to manage automatic Git hooks

```
npm install --save-dev @polyup/commitlint-config @commitlint/cli husky
```

2. Add `commitlint` configuration to your `package.json`:

```json
  "commitlint": {
    "extends": [
      "@polyup/commitlint-config"
    ]
  },
```

3. Add `husky` to run pre-commit hook automatically by adding to your `package.json`:

```json
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
```

## Rules

Commit message format:
```
type(scope): subject - short summary of the commit 

Detailed description of the changes, possibly spanning multiple lines,
or even including bulleted list:
* one
* two
* three

[WRP-123] - Jira issue references can be included anywhere in commit message
```

This commitlint config extends [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) configuration with the following rules:
* `type`: adds `config` as an option (possible values: `build`,`chore`,`ci`,`config`,`docs`,`feat`,`fix`,`perf`,`refactor`,`revert`,`style`,`test`,)
* `type` is mandatory and should always be lower-case
* `subject` is mandatory, should always start with lower-case and shouldn't end with a period
* maximum line length is 100 characters
* Jira references are enclosed in square brackets and should start with one of the following prefixes: `GBE-`, `GWA-`, `PRT-`, `WRP-`


## Maintainer

The maintainer for PolyUp Commitlint Config is [Sergei Kolobov](https://github.com/skolobov).

## License

`@polyup/commitlint-config` is distributed under the [MIT license](LICENSE).
