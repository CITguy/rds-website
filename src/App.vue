<template>
  <div id="app">
    <div id="stage">
      <AppNav/>
      <main role="main" id="content" class="hxBox-md">
        <router-view></router-view>
      </main>
      <aside class="hxSiderail hxBox-md">
        <router-view name="aside"></router-view>
      </aside>
    </div>
  </div>
</template>

<script>
  import AppNav from './components/AppNav';

  export default {
    name: 'App',
    components: {
      AppNav,
    },
  };
</script>

<style lang="less">
@import './styles/app.less';
</style>
