<!--
  TODO:
  - [ ] Table of contents
  - [ ] front matter/metadata
-->
<template>
  <div>
    <section>
      <h2 id="demo">Demo</h2>
      <div class="hxRow" v-cloak>
        <div class="hxCol hxSpan-12-xs hxSpan-3-lg hxOrder-2-lg">
          <h3>Options</h3>
          <p>
            <b>Type:</b><br />
            <select v-model="type">
              <option v-for="_type in types" :value="_type" :key="_type.label">
                {{ _type.label }}
              </option>
            </select>
          </p>
          <p>
            <label>
              <input type="checkbox" v-model="isStatic">
              Static
            </label>
          </p>
          <p>
            <b>Status:</b><br />
            <input
              class="hxTextCtrl"
              type="text"
              v-model="status" />
          </p>
          <p>
            <b>CTA:</b><br />
            <input
              class="hxTextCtrl"
              type="text"
              v-model="cta" />
          </p>
          <p>
            <b>Content:</b><br />
            <textarea class="hxTextCtrl" v-model="content"></textarea>
          </p>
        </div>
        <div class="hxCol hxSpan-12-xs hxSpan-9-lg hxOrder-1-lg">
          <div class="demo">
            <hx-alert
              :type="type.value"
              :status="status"
              :static="isStatic"
              :cta="cta"
              @submit="onSubmit">
              {{content}}
            </hx-alert>
          </div>
          <pre>{{snippet}}</pre>
          <!--pre>{{snippet}}</pre-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Util from '@/util';

const TYPES = [
    { label: 'Default', value: '' },
    { label: 'Info', value: 'info' },
    { label: 'Error', value: 'error' },
    { label: 'Success', value: 'success' },
    { label: 'Warning', value: 'warning' },
];

export default {
  data () {
    return {
      content: 'Nope! Nope! Nope! Nope! Nope!',
      cta: 'burn it',
      isStatic: false,
      status: 'spider',
      type: TYPES[0],
      types: TYPES,
    };
  },
  methods: {
    onSubmit: function () {
      alert('The spider didn\'t see that coming!');
    },
  },
  computed: {
    attrType: function () {
      if (this.type.value !== '') {
        return `type="${this.type.value}"`;
      } else {
        return '';
      }
    },
    attrStatus: function () {
      if (this.status !== '') {
        return `status="${this.status}"`;
      } else {
        return '';
      }
    },
    attrCta: function () {
      if (this.cta !== '') {
        return `cta="${this.cta}"`;
      } else {
        return '';
      }
    },
    snippet: function () {
      return Util.snippet(`
        <hx-alert
          ${this.attrCta}
          ${this.attrStatus}
          ${this.isStatic ? 'static' : ''}
          ${this.attrType}
        >
          ${this.content}
        </hx-alert>
      `);
    },
  },
};
</script>
