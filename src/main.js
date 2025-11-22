import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// eslint-disable-next-line import/no-extraneous-dependencies
import { required, email, min } from '@vee-validate/rules';
// eslint-disable-next-line import/no-extraneous-dependencies
import { localize, setLocale } from '@vee-validate/i18n';
// eslint-disable-next-line import/no-extraneous-dependencies
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

defineRule('email', email);
defineRule('required', required);
defineRule('min', min);
configure({
  generateMessage: localize(zhTW),
  validateOnInput: true, // 調整為：輸入文字時，就立即進行驗證
});
setLocale('zh_TW');
const app = createApp(App).use(router);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Form', Form);
// eslint-disable-next-line vue/multi-word-component-names
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
