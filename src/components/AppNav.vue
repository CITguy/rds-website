<template>
  <nav id="nav" class="hxNav">
    <template v-for="route in routes">
      <AppNavSection v-if="route.children"
        :key="route.name"
        :section="route"
      />
      <router-link v-else
        :key="route.name"
        :to="route.meta.href"
      >
        {{route.meta.title}}
      </router-link>
    </template>
  </nav>
</template>

<script>
import Routes from '../routes';
import AppNavSection from './AppNavSection';

function normalizeRoute (route) {
  // TODO: clean this up!
  if (route.children) {
    return {
      ...route,
      children: route.children.map(normalizeRoute),
    };
  } else {
    return {
      ...route,
      meta: {
        ...route.meta,
        href: route.meta.href || route.path,
      },
    };
  }
}//normalizeRoute()

export default {
  name: 'AppNav',
  components: {
    AppNavSection,
  },
  computed: {
    visibleRoutes: function () {
      return Routes.filter(route => !route.meta.hidden);
    },
    routes: function () {
      return this.visibleRoutes.map(normalizeRoute);
    },
  },
};
</script>

<style lang="less">
  .hxNav {
    > section {
      > hx-disclosure {
        text-transform: uppercase;
      }
    }
  }
</style>
