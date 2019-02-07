<template>
  <div>
    <markdown-component :content="html"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import MarkdownComponent from './Markdown.vue'

@Component({
  components: {
    MarkdownComponent,
  },
})
export default class App extends Vue {
  @Prop({ type: String, default: '' })
  html!: string
}
</script>
