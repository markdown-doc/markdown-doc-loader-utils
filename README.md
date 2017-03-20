## zandoc-loader-utils

Utilities for zandoc-loader's AST

### API

`function map(ast, visitors)`

* `ast` output form `zandoc-loader`
* `visitors` is an object of visitors for different ASTs

```
map(ast, {
	style(styleNode) {

	},

	demo(demoNode) {

	},

	markdown(mdast) {

	}
});
```
