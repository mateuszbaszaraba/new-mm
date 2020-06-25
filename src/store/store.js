import Vue from 'vue';
import Vuex from 'vuex';

import furn from './furn';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        furn
    }
})