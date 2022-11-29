<template>
  <div id="app">
    <notifications/>
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#app {
  min-width: $minWidth;
  font-family: $NSRegular;
  background-color: $color-light-grey;
}
</style>
