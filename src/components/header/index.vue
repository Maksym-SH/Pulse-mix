<template>
  <header class="header">
    <div class="header__wrapper">
      <nav class="header__navigation">
        <router-link to="/" class="header__logo">
          <c-logo size="sm" />
        </router-link>
        <c-select title="Недавние" />
        <c-select title="В избранном" />
        <c-select title="Шаблоны" />
      </nav>
      <div class="header__info">
        <c-select
          :params="{
            direction: 'left',
          }"
        />
      </div>
    </div>
  </header>
</template>

<script>
import cLogo from "@/components/logo/index.vue";
import cSelect from "@/components/custom/select.vue";
export default {
  components: {
    cLogo,
    cSelect,
  },
  data() {
    return {
      activeSelect: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $color-blue;
  padding: 5px 10px;
  &__logo {
    margin-right: 10px;
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
  }
  &__navigation {
    display: flex;
    align-items: center;
  }
}
</style>
