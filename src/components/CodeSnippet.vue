<template>
  <div>
    <!--
      This DIV allows 1-way databinding to remain intact
      when we apply syntax highlighting below.
    -->
    <div class="source"><slot></slot></div>
    <!--
      The computed 'syntax' property should update as the
      slotted content changes above.
    -->
    <pre><code v-html="syntax"></code></pre>
  </div>
</template>

<script>
  import Hljs from 'highlight.js';
  import stripIndent from 'strip-indent';
  export default {
    props: {
      lang: {
        type: String,
        default: 'html',
      },
    },
    computed: {
      syntax: function () {
        let txtRaw = this.$slots.default[0].text;
        let txtStripped = stripIndent(txtRaw);
        let output = Hljs.highlightAuto(txtStripped.trim());
        return output.value;
      },
    },
  };
</script>

<style scoped>
  .hidden {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    z-index: -10;
  }
</style>
