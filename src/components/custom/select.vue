<template>
  <div class="custom-select" :class="{ active: selectActive }">
    <button class="custom-select__button" @click="toggleActive">
      <span v-if="title">{{ title }}</span>
      <b-icon v-else :icon="params.icon"></b-icon>
      <b-icon
        v-if="showCaretIcon"
        class="button-caret"
        icon="caret-down"
        scale="0.8"
      ></b-icon>
    </button>
    <transition name="content">
      <div
        :class="[positionClass, directionClass]"
        class="custom-select__content"
        v-if="selectActive"
      >
        <template v-if="contentIsPresent">
          <div class="content-item" v-for="item in content" :key="item.id">
            <img v-if="item.image" :src="item.image" alt="Photo" />
            {{ item.text }}
          </div>
        </template>
        <div class="custom-select--empty" v-else>
          <h5>Нет данных для показа</h5>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showCaret: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Array,
      default: () => [],
    },
    params: {
      type: Object,
      default() {
        return {
          direction: "right",
          position: "bottom",
          icon: "plus",
        };
      },
    },
  },
  data() {
    return {
      selectActive: false,
    };
  },
  methods: {
    toggleActive() {
      if (this.content) {
        this.selectActive = !this.selectActive;
      } else {
        this.$emit("create");
      }
    },
  },
  computed: {
    showCaretIcon() {
      return this.title && this.showCaret;
    },
    contentIsPresent() {
      return Object.keys(this.content).length;
    },
    positionClass() {
      if (this.params.position) return `position-${this.params.position}`;
      return "";
    },
    directionClass() {
      if (this.params.direction) return `direction-${this.params.direction}`;
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  margin: 0 2px;
  transition: 0.2s;
  &__button {
    padding: 5px 8px;
    min-width: 40px;
    border-radius: 4px;
    font-size: 14px;
    color: $color-white;
    background-color: transparent;
  }
  .button-caret {
    transition: transform 0.2s ease;
  }
  &__content {
    position: absolute;
    z-index: 2;
    top: 40px;
    width: 200px;
    padding: 2px;
    border-radius: 4px;
    height: auto;
    max-height: 280px;
    background-color: $color-white;
    box-shadow: 0 0 5px rgba($color-black, 0.15);
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    word-break: break-word;
    overflow-y: auto;
    img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 5px;
    }
    .content-item {
      width: 100%;
      display: flex;
      cursor: pointer;
      padding: 5px;
      margin: 2px 0;
      word-break: break-word;
      transition: 0.2s;
      border-radius: 4px;
      &:hover {
        background-color: $color-light-fill-grey;
      }
    }
    &.position-bottom {
      top: 40px;
    }
    &.position-top {
      top: -70px;
    }
    &.direction-right {
      left: 0;
    }
    &.direction-left {
      right: 0;
    }
  }
  &.active {
    .custom-select__button {
      background-color: rgba($color-black, 0.35);
    }
    .button-caret {
      transform: rotate(180deg) translateY(-1px);
    }
  }
  &--empty {
    width: 100%;
    font-family: $NSLight;
    font-weight: 500;
    padding: 20px 0;
    text-align: center;
    user-select: none;
  }
}
.content-enter-active,
.content-leave-active {
  transition: 0.2s;
}
.content-enter,
.content-leave-to {
  opacity: 0;
}
</style>
