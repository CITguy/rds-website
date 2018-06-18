<template>
  <section>
    <template v-if="meta.href">
      <header>
        <router-link :to="meta.href">
          {{meta.title}}
        </router-link>
        <hx-disclosure
          :aria-controls="sectionId"
          :class="{ current: current }"
        >
          <hx-icon class="toggle-icon" type="angle-down"></hx-icon>
        </hx-disclosure>
      </header>
    </template>
    <template v-else>
      <hx-disclosure
        :aria-controls="sectionId"
        :class="{ current: current }"
      >
        {{meta.title}}
        <hx-icon class="toggle-icon" type="angle-down"></hx-icon>
      </hx-disclosure>
    </template>

    <hx-reveal
      :id="sectionId"
      :open="current"
    >
      <template v-for="child of children">
        <AppNavSection v-if="child.children"
          :key="child.name"
          :section="child"
        />
        <router-link v-else
          :key="child.name"
          :to="child.meta.href"
        >
          {{child.meta.title}}
        </router-link>
      </template>
    </hx-reveal>
  </section>
</template>

<script>
export default {
  name: 'AppNavSection',
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sectionId: function () {
      return `${this.section.name}-section`;
    },
    current: function () {
      return false; // TODO
    },
    meta: function () {
      return this.section.meta;
    },
    visibleChildren: function () {
      return this.section.children.filter(child => !child.meta.hidden);
    },
    children: function () {
      return this.visibleChildren
        .map((child) => {
          let parentHref = this.meta.href || this.section.path;
          let childHref = child.meta.href || child.path;

          return {
            ...child,
            meta: {
              ...child.meta,
              href: `${parentHref}/${childHref}`,
              title: child.meta.title || child.name,
            },
          };
        });
    },
  },
};
</script>

<style lang="less">
header {
  width: 100%;
  display: flex;
  flex-direction: row; /* needed? */

  a[href] {
    flex-grow: 1;
  }

  hx-disclosure:not(:only-child) {
    flex-grow: 0;
  }
}
</style>
