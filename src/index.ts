import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const twigLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      styleTags({
        Identifier: t.variableName,
        Boolean: t.bool,
        String: t.string,
        Number: t.number,
        BlockComment: t.blockComment,
        CodeTag: t.keyword,
        Comparison: t.compareOperator,
        Operator: t.operator,
        Math: t.arithmeticOperator,
        "Function/Identifier": t.function(t.definition(t.variableName)),
        "( )": t.paren,
        "{ }": t.brace,
        "{{ }} {% %}": t.meta,
      })
    ]
  }),
  languageData: {
    commentTokens: {block: {open: "{#", close: "#}"}}
  }
})

export function twig() {
  return new LanguageSupport(twigLanguage)
}
