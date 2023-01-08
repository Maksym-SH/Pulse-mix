<template>
  <div class="auth">
    <div class="auth__wrapper">
      <div class="auth__window">
        <div class="auth__window--welcome">
          <h2 class="welcome-title">
            Добро пожаловать в <c-logo class="auth__logo" />
          </h2>
          <p class="welcome-description">{{ welcomeTextDescription }}</p>
          <c-button
            v-if="authType == 'SignUp'"
            class="welcome-action"
            @click="authType = 'SignIn'"
            variant="success"
            title="Войти"
          />
          <c-button
            v-else
            class="welcome-action"
            @click="authType = 'SignUp'"
            variant="success"
            title="Создать аккаунт"
          />
        </div>
        <div class="auth__window--enter">
          <div class="auth__tabs">
            <c-button
              @click="authType = 'SignIn'"
              variant="transparent"
              title="Войти"
              :class="{ active: authType === 'SignIn' }"
            />
            <c-button
              @click="authType = 'SignUp'"
              variant="transparent"
              title="Регистрация"
              :class="{ active: authType === 'SignUp' }"
            />
          </div>
          <c-logo class="auth__logo" />
          <h3 class="auth__window-title">{{ entryTitle }}</h3>
          <div class="form-container"></div>
          <form class="auth__form-wrapper" @submit.prevent>
            <c-input
              name="login"
              label="Логин"
              type="email"
              v-model="userData.name"
              required
              placeholder="Login"
            />
            <c-input
              name="password"
              label="Пароль"
              type="password"
              v-model="userData.password"
              :min="8"
              required
              placeholder="Password"
            />
            <div class="auth__form--fix-height">
              <transition name="password">
                <c-input
                  v-if="authType === 'SignUp'"
                  name="password"
                  label="Повторите пароль"
                  type="password"
                  v-model="userData.repeatPassword"
                  required
                  :min="8"
                  placeholder="Repeat password"
                />
              </transition>
            </div>
            <input
              class="auth--checkbox"
              type="checkbox"
              id="remember"
              name="remember"
              v-model="remember"
            />
            <label class="auth__remember" for="remember"
              ><b-icon icon="check-lg" scale="1.2"></b-icon> Запомнить
              меня</label
            >
            <div class="auth__enter">
              <c-button
                class="auth__enter--action"
                variant="info"
                :title="enterText"
              />
            </div>
          </form>
          <div
            class="auth__forgot-password"
            :class="{ auth__registration: authType == 'SignUp' }"
          >
            <c-button
              v-if="authType == 'SignIn'"
              variant="transparent"
              title="Забыли пароль?"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cLogo from "@/components/logo";
export default {
  components: {
    cLogo,
  },
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      remember: false,
      authType: "SignIn",
    };
  },
  computed: {
    enterText() {
      return this.authType === "SignIn" ? "Войти" : "Регистрация";
    },
    welcomeTextDescription() {
      return this.authType === "SignUp" ? "Есть аккаунт?" : "Впервые здесь?";
    },
    entryTitle() {
      return this.authType === "SignUp"
        ? "Создайте аккаунт"
        : "Войдите в аккаунт";
    },
  },
};
</script>

<style lang="scss">
.password-enter-active,
.password-leave-active {
  transition: 0.5s;
}
.password-enter,
.password-leave-to {
  opacity: 0;
  transform: scale(0.1);
}
.auth {
  background-color: $color-light-fill-grey;
  height: 100vh;
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &__logo {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }
  &__window {
    border-radius: 3px;
    position: relative;
    border-radius: 15px;
    display: flex;
    box-shadow: 0 0 20px rgba($color-black, 0.35);
    &-title {
      color: $color-black;
      text-align: center;
      font-size: 24px;
      -webkit-text-stroke: 0.3px $color-green;
    }
    &--welcome {
      padding: 15px 35px;
      background-color: $color-dark-grey;
      border-radius: 10px 0 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: $color-white;
      .welcome {
        &-title {
          font-size: 24px;
          min-width: 229px;
          text-align: center;
        }
        &-description {
          margin-top: 20px;
          font-size: 13px;
        }
        &-action {
          margin-top: 10px;
          width: 80%;
          height: 40px;
        }
      }
    }
    &--enter {
      border-radius: 0 15px 15px 0;
      padding: 15px 40px;
      width: 450px;
      background: $color-white;
      .auth__logo {
        display: none;
      }
    }
  }
  &__tabs {
    position: absolute;
    z-index: 2;
    top: 10px;
    left: 10px;
    display: none;
    align-items: center;
    margin-bottom: 40px;
    .custom-button {
      font-size: 16px;
      color: $color-black;
      margin: 0 5px;
      transition: 0.2s;
      border-bottom: 2px solid transparent;

      &.active {
        color: $color-black;
        border-color: $color-black;
      }
    }
  }
  &__form {
    &-wrapper {
      position: relative;
      z-index: 2;
      .c-input {
        width: 100%;
        margin: 20px 0;
        color: $color-white;
        &--field {
          height: 40px;
          font-size: 18px;
          background-color: rgba($color-grey, 0.1);
          border-radius: 3px;
          padding: 4px 4px 4px 10px;
          color: $color-dark-blue;
        }
        &--label {
          color: $color-black;
          margin-left: 3px;
        }
      }
    }
    &--fix-height {
      height: 84px;
    }
  }
  &--checkbox {
    display: none !important;
    &:checked {
      & + .auth__remember {
        color: $color-green;
        background-color: $color-light-grey;
        position: relative;
        &::before {
          border-color: $color-green;
        }
      }
    }
  }
  &__remember {
    font-size: 14px;
    position: relative;
    user-select: none;
    color: $color-black;
    transition: 0.2s;
    cursor: pointer;
    svg {
      margin-left: -2px;
      margin-right: 2px;
    }
    &::before {
      content: "";
      height: 22px;
      width: 22px;
      border-radius: 50%;
      transition: all 0.2s ease-out;
      display: block;
      position: absolute;
      left: -5px;
      top: -1px;
      background-color: transparent;
      border: 1px solid transparent;
    }
  }
  &__enter {
    margin-top: 20px;
    padding-bottom: 20px;

    &--action {
      padding: 10px 0 !important;
      width: 100%;
    }
  }

  &__forgot-password {
    border-top: 1px solid $color-black;
    height: 26px;
    display: flex;
    height: fit-content;
    justify-content: center;
    .custom-button {
      margin: 10px 0;
      cursor: pointer;
      color: $color-black;
      &:hover {
        color: $color-black;
      }
    }
    &.auth__registration {
      height: 47px;
      border: none;
    }
  }
  @media screen and (max-width: $responsive-sm) {
    &__window {
      width: 100%;
      height: 100%;
      box-shadow: none;
      border-radius: 0;
      &--welcome {
        display: none;
      }
      &--enter {
        padding: 120px 15px 15px 15px;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
    }
    &__form-wrapper {
      display: flex;
      height: 100vh;
      flex-direction: column;
      .c-input {
        margin: 10px 0;
        &--field {
          height: 50px !important;
        }
      }
    }
    &__enter {
      padding-top: 10px;
    }
    &__tabs {
      display: flex;
      .custom-button {
        padding: 10px;
      }
    }
    &__remember {
      padding-top: 10px;
      margin-top: auto;
    }
    &__forgot-password {
      padding-bottom: 10px;
      &.auth__registration {
        height: 51.58px;
        box-sizing: content-box;
        padding-bottom: 20px;
      }
    }
  }
  @media screen and (max-height: 510px) and (min-width: $responsive-sm) {
    &__window {
      height: 80%;
      overflow-y: auto;
      position: relative;
      background-color: $color-white;
      border-radius: 15px 0 0 15px;
      .auth__form--fix-height,
      .auth__registration {
        height: fit-content;
      }
      &--welcome {
        top: 0;
        position: sticky;
      }
    }
  }
}
</style>
