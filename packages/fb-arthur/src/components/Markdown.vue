<template>
  <div>
    <component :is="markdownComp"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import md from '../markdown'
import Custom from './Custom.vue'

@Component
export default class Markdown extends Vue {
  @Prop({ type: String, required: true })
  content!: string

  unescape(str: string) {
    return str
      .replace(/&lt;/gi, '<')
      .replace(/&gt;/gi, '>')
      .replace(/&amp;/gi, '&')
      .replace(/&quot;/gi, '"')
      .replace(/&apos;/gi, "'")
      .replace(/&#x3A;/g, ':')
  }

  registerComponent(res: any) {
    return {
      // We MUST change Vue default delimiter
      // To avoid Vue detected it as expression
      // Because, sometimes in code section for Vue or Blade template
      // We need to write {{ }}
      delimiters: ['{%', '%}'],
      components: {
        Custom,
      },
      template: `<div class="markdown-content">${res}</div>`,
    }
  }

  get markdownComp() {
    const raw = this.content
      .replace(/<br>/g, '\n')
      .replace('<span class="text_exposed_hide">...</span>', '')
      .replace(/<span class="see_more_link_inner">(.+)<\/span>/gi, '')
      .replace(/(<([^>]+)>)/gi, '')
    const mdstr = md.render(this.unescape(raw))
    return this.registerComponent(mdstr)
  }
}
</script>

<style lang="stylus">
.markdown-content {
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
