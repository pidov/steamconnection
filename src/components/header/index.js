import Vue from 'vue';
import template from './header.html';
import $ from 'jquery'

const HeaderComponent = Vue.extend({
  template: template,
  props: ['login', 'username', 'topLevelNav']
});

export default HeaderComponent;
