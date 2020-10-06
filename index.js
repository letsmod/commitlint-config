module.exports = {
  "extends": [
    "@commitlint/config-conventional"
  ],
  "rules": {
    "references-empty": [ 1, "never" ],
    "scope-case": [2, "always", ["lower-case", "upper-case"]],
    "subject-case": [1, "always"],
  },
  "parserPreset": {
    "parserOpts": {
      "issuePrefixes": [ "GBE-", "GWA-", "PRT-", "WRP-", ]
    }
  }
};
