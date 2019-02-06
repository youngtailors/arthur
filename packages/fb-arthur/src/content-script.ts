import Vue from 'vue'
import MarkdownIt from 'markdown-it'
import App from './components/App.vue'
import './assets/styles.styl'

const elems = document.querySelectorAll('.userContent')

const md = new MarkdownIt()

elems.forEach((elem, id) => {
  const key = `fb_arthur_${id}`

  elem.id = key

  elem.classList.add('markdown')

  const raw = elem.innerHTML.replace(/<br>/g, '\n').replace(/(<([^>]+)>)/gi, '')

  console.log({ raw })

  elem.innerHTML = md.render(raw)

  // new Vue({
  //   el: `#${key}`,
  //   render: h => h(App),
  // })
})
