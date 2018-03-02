var Vue = require('vue');

var top_block = require('vue!./components/top_block.vue')

new Vue({
    el: '#app',
    components: {
        top_block: top_block
    }
})