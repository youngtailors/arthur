import Vue from 'vue'
import App from './components/App.vue'
import './assets/styles.styl'

const elems = document.querySelectorAll('.userContent')

elems.forEach(el => {
  const raw = el.innerHTML

  new Vue({
    el,
    render: h =>
      h(App, {
        props: {
          html: raw,
        },
      }),
  })
})
