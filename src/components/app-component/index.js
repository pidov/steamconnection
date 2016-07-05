import Vue from 'vue';
import template from './app-component.html';

import HeaderComponent from '../header'
import FooterComponent from '../footer'

const AppComponent = Vue.extend({
  template: template,
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent
  }
});

export default AppComponent;
