import * as MarkdownIt from 'markdown-it'
import highlight from './lib/highlight'
import '../assets/prismjs-theme.styl'

const md = new MarkdownIt({
  html: true,
  highlight,
})

export default md
