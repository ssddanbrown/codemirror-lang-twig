import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const twigLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        Identifier: t.variableName,
        Boolean: t.bool,
        String: t.string,
        Number: t.number,
        BlockComment: t.blockComment,
        "Function/Identifier": t.function(t.definition(t.variableName)),
        "( )": t.paren,
      })
    ]
  }),
  languageData: {
    commentTokens: {line: ";"}
  }
})

export function twig() {
  return new LanguageSupport(twigLanguage)
}
