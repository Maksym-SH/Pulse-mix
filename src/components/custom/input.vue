<template>
  <div class="c-input">
    <label v-if="label" class="c-input--label" :for="name">{{ label }}</label>
    <input
      class="c-input--field"
      :class="{
        'c-input--error': errorText,
        'c-input--required': required,
      }"
      ref="input"
      :autocomplete="isAutoComplete"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @keypress="$emit('keypress', $event.target.value)"
      @blur="validator($event.target.value)"
      :required="required"
      :min="min"
    />
    <span
      v-if="required"
      class="c-input__required-icon"
      :class="{ 'with-label': label }"
    ></span>
    <transition name="error">
      <span v-if="errorText" class="c-input__error-text"> {{ errorText }}</span>
    </transition>
  </div>
</template>

<script>
import { emailValidator } from "@/main.js";
export default {
  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    min: {
      type: Number,
      default: 0,
    },
    autoComplete: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    value(value) {
      this.errorText = "";
    },
  },
  data() {
    return {
      isReqired: false,
      errorText: "",
    };
  },
  methods: {
    validator(value) {
      if (this.type === "email" && !emailValidator.validate(value)) {
        this.errorText = "Введите корректную почту.";
      } else if (this.min && value.length < this.min) {
        this.errorText = `Введите не менее ${this.min} символов.`;
      }
    },
  },
  computed: {
    isAutoComplete() {
      return this.autoComplete ? "on" : "off";
    },
  },
};
</script>

<style lang="scss">
.error-enter-active,
.error-leave-active {
  transition: 0.5s;
}
.error-enter,
.error-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
.c-input {
  position: relative;
  width: fit-content;
  display: flex;
  flex-direction: column;
  &--field {
    border: 1px solid transparent;
    background-color: $color-white;
    border-radius: 4px;
    font-size: 12px;
    padding: 2px 14px 2px 5px;
    font-family: $NSRegular;
    transition: 0.2s;
    &:focus {
      border-color: $color-dark-grey;
    }
    &::placeholder {
      color: $color-grey;
    }
    &.c-input--error {
      border-color: $color-dark-red !important;
      background-color: $color-light-red !important;
    }
  }
  &--label {
    font-size: 14px;
    color: $color-white;
  }

  &__required-icon {
    position: absolute;
    display: inline-block;
    top: 5px;
    right: 5px;
    width: 5px;
    height: 5px;
    background-color: $color-red;
    border-radius: 50%;
    &.with-label {
      top: 25px;
    }
  }

  &__error-text {
    position: absolute;
    bottom: -18px;
    font-size: 12px;
    color: $color-dark-red;
  }
}
</style>
