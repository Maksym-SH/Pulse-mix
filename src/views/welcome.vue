<template>
  <div class="welcome-page">
    <div class="welcome-page__container">
      <div class="welcome-page__description">
        <img src="@/assets/images/logo.svg" alt="" />
        <h4 class="welcome-page__logo-title">Pulse<span>Mix</span></h4>
      </div>
      <div class="timeline-wrapper">
        <div class="welcome-timeline">
          <div class="timeline">
            <div class="timeline-content">
              <h3 class="title">Знакомство</h3>
              <p class="description">
                Здесь вы управляете своими задачами на разных стадиях их
                выполнения. Давайте познакомимся с возможностями нашего
                приложения.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-content">
              <h3 class="title">Создавайте свои рабочие доски</h3>
              <p class="description">
                Рабочая доска - ваше личное пространство, куда могут зайти ваши
                участники, просматривать статус задач а а так же создавать
                новые, оставлять комментарии, перемещать их между статусами и
                многое другое.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-content">
              <h3 class="title">Расширяйте свою команду</h3>
              <p class="description">
                Привлекайте новых пользователей на вашу доску чтобы ваш рабочий
                процесс пошел быстрее.
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-content">
              <h3 class="title">Пространство</h3>
              <p class="description">
                Создайте профессиональное и удобное пространство для ваших
                участников доски
              </p>
            </div>
          </div>
        </div>
      </div>
      <ssr-carousel loop show-arrows show-dots @change="changePaginationText">
        <div class="slide">
          <img src="@/assets/images/slide-1.png" alt="Slide 1" />
        </div>
        <div class="slide">
          <img src="@/assets/images/slide-2.png" alt="Slide 2" />
        </div>
        <div class="slide">
          <img src="@/assets/images/slide-3.png" alt="Slide 3" />
        </div>
      </ssr-carousel>
      <div class="slider-description">
        {{ sliderText }}
      </div>
      <div class="welcome-page__button-wrapper">
        <router-link to="/">
          <c-button variant="info" size="xl" title="приступить" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: mapGetters({ sliderText: "getSliderText" }),
  methods: {
    changePaginationText(params) {
      this.CHANGE_SLIDER_INDEX(params.index);
    },
    ...mapMutations(["CHANGE_SLIDER_INDEX"]),
  },
};
</script>

<style lang="scss">
.welcome-page {
  min-height: 100vh;
  background-color: $color-light-fill-grey;
  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 150px);
    max-width: 1200px;
    margin: 0 auto;
  }
  &__description {
    text-align: center;
    margin-bottom: 60px;
    img {
      width: 100%;
      height: auto;
      max-width: 170px;
      opacity: 0.6;
    }
  }
  &__logo-title {
    font-size: 36px;
    font-weight: bold;
    span {
      color: $color-red;
    }
  }
  .ssr-carousel {
    width: 70%;
    max-width: 800px;
    min-width: 300px;
    margin: 20px auto 10px auto;
    .slide {
      display: flex;
      flex-direction: column;
      img {
        margin: auto;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      &.slide-1 {
        img {
          border-radius: 10px;
        }
      }
    }
  }
  .slider-description {
    font-weight: bold;
    font-size: 19px;
    max-width: 600px;
    text-align: center;
    margin: 0 auto;
    height: 100px;
  }
  &__button-wrapper {
    margin-top: auto;
    text-align: center;
    padding: 10px 15px 30px;
    .custom-button {
      width: 200px;
    }
  }
  @media only screen and (max-width: $responsive-sm) {
    padding-top: 50px;
    &__description {
      display: none;
    }
    .slider-description {
      font-size: 17px;
      height: 80px;
      padding: 0 10px;
      max-width: 400px;
    }
  }
  @media only screen and (max-width: $responsive-us) {
    .slider-description {
      font-size: 14px;
      height: 80px;
      padding: 0 10px;
      max-width: 300px;
    }
    &__button-wrapper {
      .custom-button {
        width: 100%;
      }
    }
  }
}
.timeline-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 10px;
}
.welcome-timeline {
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
.welcome-timeline {
  .timeline {
    width: calc(50% + 17px);
    padding: 0 30px 30px 0;
    float: left;
    position: relative;
    &::before,
    &::after {
      content: "";
      height: 60px;
      width: 2px;
      border-left: 2px solid $color-grey;
      transform: rotate(-45deg);
      position: absolute;
      right: 30px;
      bottom: 0;
    }
  }
}
.welcome-timeline {
  .timeline .timeline-icon {
    color: #777;
    font-size: 35px;
  }
  .timeline-content {
    color: #555;
    background: $color-black;
    text-align: center;
    min-height: 170px;
    padding: 30px 35px 35px;
    border-radius: 15px 15px 0 15px;
    display: block;
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      background-color: #fff;
      position: absolute;
      left: 17px;
      right: 17px;
      top: 17px;
      bottom: 17px;
      z-index: -1;
    }
  }
  .welcome-timeline {
    .welcome-timeline {
      .description {
        color: #777;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 18px;
        margin: 0;
      }
    }
  }
  .timeline {
    .title {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin: 0 0 8px;
    }
    @media only screen and (max-width: $responsive-sm) {
      .title {
        font-size: 18px;
      }
      .timeline-content {
        padding: 28px;
      }
    }
    @media only screen and (max-width: $responsive-xs) {
      width: 100%;
    }
    &:after {
      background-color: #fff;
      height: 20px;
      width: 20px;
      border: 6px solid $color-blue;
      border-radius: 50%;
      right: 0;
    }
    &:nth-child(2n) {
      .timeline-content {
        background: $color-red;
      }
      &::after {
        border-color: $color-red;
      }
    }
    &:nth-child(2n + 1) {
      .timeline-content {
        background: $color-blue;
      }
    }
    &:nth-child(even) {
      padding: 0 0 30px 30px;
      float: right;
      &:after {
        right: auto;
        left: 0;
      }
      &::before {
        transform: rotate(45deg);
        right: auto;
        left: 30px;
      }
      .timeline-content {
        border-radius: 15px 15px 15px 0;
      }
    }
    &:last-child {
      .timeline-content {
        border-radius: 15px !important;
      }
      &::before,
      &::after {
        display: none;
      }
    }
  }
}
</style>
