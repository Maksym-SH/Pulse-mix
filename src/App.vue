<template>
  <div id="app">
    <c-header />
    <notifications />
    <router-view />
  </div>
</template>

<script>
import cHeader from "@/components/header";
export default {
  components: {
    cHeader,
  },
};
</script>

<style lang="scss">
html {
  background-color: $color-light-grey;
  overflow-x: hidden;
  min-height: 100vh;
  min-width: $minWidth;
}
#app {
  font-family: $NSRegular;
  padding-top: 45px;
}
// Notifications
div.vue-notification-template {
  margin: 15px 5px 5px;
  font-size: 15px;
  box-shadow: 0 0 5px rgba($color-black, 0.25);
  border-radius: 10px;
  cursor: pointer;
  max-width: 300px;
  word-break: break-word;
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: $color-white;
}
::-webkit-scrollbar-thumb {
  background-color: $color-grey;
}
</style>
