<template>
  <header class="header">
    <div class="header__wrapper">
      <nav class="header__navigation">
        <router-link to="/" class="header__logo">
          <c-logo size="sm" />
        </router-link>
        <div class="header__navigation-selects">
          <c-select title="Недавние доски" />
          <c-select title="В избранном" />
          <c-select title="Шаблоны" />
        </div>
      </nav>
      <div class="header__info">
        <c-select
          :params="{
            direction: 'left',
            icon: 'ui-checks',
          }"
        />
        <c-select
          :params="{
            direction: 'left',
            icon: 'question-circle',
          }"
        >
          <router-link :to="{ name: 'acquaintance' }">
            <img src="@/assets/images/info-instruction.png" alt="Info" />
            <h3 class="select-info__title">
              Вдохновитесь множеством различных способов использования
              <span>PulseMix</span>
            </h3>
          </router-link>
        </c-select>
        <router-link :to="{ name: 'account' }">
          <span class="header__info-avatar">ФИ</span>
        </router-link>
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

<style lang="scss">
.header {
  background-color: $color-blue;
  padding: 5px 10px;
  width: 100%;
  top: 0;
  position: fixed;
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
    &-selects {
      display: flex;
    }
  }
  &__info {
    display: flex;
    align-items: center;
    > a {
      margin-left: 10px;
      height: 35px;
    }
    .select-info__title {
      margin-top: 5px;
      text-align: center;
      color: $color-dark-blue;
      font-weight: 500;
      font-size: 11px;
      span {
        font-weight: 600;
      }
    }
    &-avatar {
      border-radius: 50%;
      display: inline-block;
      width: 35px;
      min-width: 35px;
      height: 35px;
      background-color: $color-red;
      color: $color-dark-blue;
      font-weight: 600;
      box-shadow: 0 0 5px rgba($color-red, 0.15);
      font-size: 16px;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
    }
  }
  @media only screen and (max-width: $responsive-sm) {
    padding: 10px;
    .logo {
      &__title {
        line-height: 0;
      }
      &__img {
        margin-top: -2px;
      }
    }
    .custom-select {
      &__content {
        width: 210px;
        top: 48px !important;
      }
    }
  }
  @media only screen and (max-width: $responsive-xs) {
    height: 75px;
    &__info {
      .custom-select {
        &__button {
          height: 35px;
          svg {
            width: 17px;
          }
        }
      }
    }
    &__navigation {
      &-selects {
        position: absolute;
        top: 42px;
        .custom-select {
          &__content {
            position: fixed;
            top: 77px !important;
            width: 97%;
            margin: 0 5px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: $responsive-us) {
    .custom-select {
      &__button {
        font-size: 12px;
      }
    }
  }
}
</style>
