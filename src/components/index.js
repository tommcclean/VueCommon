import Vue from 'vue';
import overlay from './overlay.vue';

const components = {
    overlay
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});

export default components;