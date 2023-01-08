<template>
  <button
    class="custom-button"
    :class="`custom-button--${size} button-variant--${variant}`"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "info",
      validator: (value) =>
        ["info", "danger", "success", "transparent"].includes(value),
    },
    size: {
      type: String,
      default: "sm",
      validator: (value) => ["us", "sm", "md", "xl"].includes(value),
    },
  },
};
</script>

<style lang="scss">
.custom-button {
  outline: none;
  transition: all 0.2s ease;
  background-color: $color-grey;
  padding: 0.2em 0.6em;
  border-radius: 5px;
  color: $color-light-grey;
  &--us {
    font-size: 12px;
  }
  &--sm {
    font-size: 14px;
  }
  &--md {
    font-size: 18px;
  }
  &--xl {
    font-size: 20px;
  }
}
.button-variant {
  &--info {
    background-color: $color-blue;
    &:hover {
      background-color: $color-hover-blue;
    }
  }
  &--danger {
    background-color: $color-red;
    &:hover {
      background-color: $color-red-hover;
    }
  }
  &--success {
    background-color: $color-green;
    &:hover {
      background-color: $color-green-hover;
    }
  }
  &--transparent {
    background-color: transparent;
    border-color: transparent;
    outline: none;
    border-radius: 0;
    height: fit-content;
    cursor: pointer;
    &:hover {
      color: $color-light-fill-grey;
    }
  }
}
</style>
