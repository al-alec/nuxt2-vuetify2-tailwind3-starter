import Vue from "vue";

Vue.use(require('vue-pusher'), {
  api_key: '',
  options: {
    cluster: 'mt1',
    encrypted: true,
  }
});
