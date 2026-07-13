# Leo Instructions Grammars for GitHub Linguist Library
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-red.svg)](./LICENSE)

TextMate grammar files for the Leo language, consumed by GitHub Linguist to highlight `.leo` files (vendored as the `source.leo` grammar submodule).

- [TextMate-compatible grammar](https://github.com/ProvableHQ/leo-linguist/tree/master/syntaxes)
- [Language documentation](https://developer.aleo.org/leo/language#layout-of-a-leo-program)

## Maintaining the grammar

`syntaxes/leo.tmLanguage.json` is the hand-maintained source of truth. Edit it directly to track language changes (keep it aligned with the tree-sitter grammar and parser in [`ProvableHQ/leo`](https://github.com/ProvableHQ/leo/tree/master/tree-sitter)), then regenerate the plist:

```
yarn install
yarn build:grammar
```

This rewrites `syntaxes/leo.tmLanguage` (the XML plist mirror) from the JSON. Commit both files.

