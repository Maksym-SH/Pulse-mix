<template>
  <div class="logo">
    <div class="logo__wrapper" :class="`logo--${size}`">
      <img
        v-if="showImg"
        class="logo__img"
        src="@/assets/images/logo.svg"
        alt=""
      />
      <h4 class="logo__title">Pulse <span>Mix</span></h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "sm",
      validator: (value) => ["sm", "md", "xl"].includes(value),
    },
    showImg: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__title {
    color: $color-white;
    white-space: nowrap;
    font-weight: 500;
    span {
      color: $color-red;
      margin-left: -5px;
      font-weight: 700;
    }
  }
  &__img {
    max-width: 35px;
  }
  &--sm {
    .logo__title {
      span {
        font-size: 22px;
      }
    }
    .logo__img {
      width: 25px;
      height: 25px;
    }
  }
  &--md {
    .logo__title {
      font-size: 24px;
    }
    .logo__img {
      width: 30px;
      height: 30px;
    }
  }
  &--xl {
    .logo__title {
      font-size: 29px;
      span {
        font-size: 34px;
      }
    }
    .logo__img {
      width: 45px;
      height: 45px;
    }
  }
}
</style>
