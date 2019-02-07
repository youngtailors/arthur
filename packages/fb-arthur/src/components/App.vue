<template>
  <div>
    <div class="markdown" ref="markdown"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'
import md from '../markdown'

@Component
export default class App extends Vue {
  @Prop({ default: '' })
  html!: string

  unescape(str: string) {
    return str
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&amp;/gi, '&')
      .replace(/&quot;/gi, '"')
      .replace(/&apos;/gi, "'")
      .replace(/&#x3A;/g, ':')
  }

  @Watch('html', { immediate: true })
  watchHtml() {
    this.$nextTick(() => {
      const raw = this.html
        .replace(/<br>/g, '\n')
        .replace('<span class="text_exposed_hide">...</span>', '')
        .replace(/<span class="see_more_link_inner">(.+)<\/span>/gi, '')
        .replace(/(<([^>]+)>)/gi, '')
      const mdstr = md.render(this.unescape(raw))

      const ref: any = this.$refs['markdown']

      ref.innerHTML = mdstr
    })
  }
}
</script>

<style lang="stylus">
.markdown {
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 26px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 22px;
  }

  h6 {
    font-size: 20px;
  }

  img {
    max-width: 100%;
  }
}
</style>

