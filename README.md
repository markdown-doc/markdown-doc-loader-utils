## markdown-doc-loader-utils

Utilities for markdown-doc-loader's AST

### API

`function map(ast, visitors)`

* `ast` output form `markdown-doc-loader`
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
