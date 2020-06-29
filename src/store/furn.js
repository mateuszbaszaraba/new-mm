import products from '../data/furnitures';

const state = {
    products: []
};

const mutations = {
    'SET_PRODUCTS'(state, products) {
        state.products = products
    }
};

const actions = {
    initProducts: ({commit}) => {
        commit('SET_PRODUCTS', products)
    }
};

const getters = {
    products: state => {
        return state.products
    },
    furnDetail(state, index) {
        const record = state.products.find(element => element.id == index);
        return {
            id: index,
            name: record.name,
            dim1: record.dim1,
            dim2: record.dim2
        }
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}