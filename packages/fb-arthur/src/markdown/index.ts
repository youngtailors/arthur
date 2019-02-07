import * as MarkdownIt from 'markdown-it'
import 'prismjs'
// import 'prismjs/themes/prism.css'
import highlight from './lib/highlight'
// import 'highlight.js/styles/github.css'
import '../assets/prismjs-theme.styl'

const md = new MarkdownIt({
  html: true,
  highlight,
})

// md.use(require('markdown-it-highlightjs'))

export default md
