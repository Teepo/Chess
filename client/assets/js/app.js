import 'regenerator-runtime/runtime';

import { createApp } from 'vue';

import store from './store';

import Chess from './components/Chess';

const app = createApp({});

app.config.devtools = true;

app
.component('chess', Chess)
.directive('click-outside', {
    mounted(element, binding) {
        element.clickOutsideEvent = function(event) {
            if (!(element === event.target || element.contains(event.target))) {
                binding.value(event, element);
            }
        };
        document.body.addEventListener('click', element.clickOutsideEvent);
    },
    unmounted(element) {
        document.body.removeEventListener('click', element.clickOutsideEvent);
    }
})
.use(store)
.mount('app')