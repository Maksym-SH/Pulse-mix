<template>
  <div id="app">
    <c-header/>
    <notifications/>
    <router-view />
  </div>
</template>

<script>
import cHeader from '@/components/header';
export default {
  components: {
    cHeader,
  }
}
</script>

<style lang="scss">
html {
  background-color: $color-light-grey;
  min-height: 100vh;
}
#app {
  min-width: $minWidth;
  font-family: $NSRegular;
}
</style>
