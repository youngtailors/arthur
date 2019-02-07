import { highlight, LanguageDefinition, languages, highlightAll } from 'prismjs'
const escapeHtml = require('escape-html')

highlightAll()

const wrap = (code: string, lang: string) => {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  const result = `<pre class="language-${lang}"><code>${code}</code></pre>`
  return result
}

export default (str: string, lang: string) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === 'vue' || lang === 'html') {
    lang = 'markup'
  }
  if (lang === 'md') {
    lang = 'markdown'
  }
  if (lang === 'ts') {
    lang = 'typescript'
  }
  if (lang === 'py') {
    lang = 'python'
  }
  if (lang === 'sh') {
    lang = 'bash'
  }
  if (lang === 'yml') {
    lang = 'yaml'
  }
  if (languages[lang]) {
    const code = highlight(str, languages[lang], lang as LanguageDefinition)
    return wrap(code, rawLang)
  }
  return wrap(str, 'text')
}
