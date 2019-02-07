import { highlight, LanguageDefinition, languages } from 'prismjs'
const escapeHtml = require('escape-html')

const wrap = (code: string, lang: string) => {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  const result = `<pre class="language-${lang}"><code>${code}</code></pre>`
  console.log({ result })
  return result
}

export default (str: string, lang: string) => {
  console.log({ str, lang })
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
