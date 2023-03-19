# CodeMirror 6 language package template

Resources:

- Simple JSON example: https://github.com/lezer-parser/json/blob/main/src/highlight.js
- An underscore matches all chars (https://discuss.codemirror.net/t/match-for-all-characters/4230).
- Guide: https://lezer.codemirror.net/docs/guide/
- Twig Guide: https://twig.symfony.com/doc/3.x/templates.html
- Twig fiddle, with existing syntax highlighting: https://twigfiddle.com/
- Old twig mode source: https://github.com/codemirror/codemirror5/blob/master/mode/twig/twig.js


This is an example repository containing a minimal [CodeMirror](https://codemirror.net/6/) language support package. The idea is to clone it, rename it, and edit it to create support for a new language.

Things you'll need to do (see the [language support example](https://codemirror.net/6/examples/lang-package/) for a more detailed tutorial):

 * `git grep EXAMPLE` and replace all instances with your language name.

 * Rewrite the grammar in `src/syntax.grammar` to cover your language. See the [Lezer system guide](https://lezer.codemirror.net/docs/guide/#writing-a-grammar) for information on this file format.

 * Adjust the metadata in `src/index.ts` to work with your new grammar.

 * Adjust the grammar tests in `test/cases.txt`.

 * Build (`npm run prepare`) and test (`npm test`).

 * Rewrite this readme file.

 * Optionally add a license.

 * Publish. Put your package on npm under a name like `codemirror-lang-EXAMPLE`.
