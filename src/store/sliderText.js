export default {
  state: {
    text: [
      "Отслеживайте список ваших задач на разных стадиях их выполнения.",
      "PulseMix поможет вам контроллировать ваши детальные обязанности, которые поспособствуют решению задачи.",
      "Оставляйте комментарии к задачам для других участников доски.",
    ],
    sliderIndex: 0,
  },
  getters: {
    getSliderText(state) {
      return state.text[state.sliderIndex];
    },
  },
  mutations: {
    CHANGE_SLIDER_INDEX(state, payload) {
      state.sliderIndex = payload;
    },
  },
};
