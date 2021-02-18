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

### Maintainers

The maintainer for PolyUp Commitlint Config is [Sergei Kolobov](https://github.com/skolobov)

## License

`@polyup/commitlint-config` is distributed under the [MIT license](LICENSE).
