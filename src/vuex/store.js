import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        deleteCart : 0,
        catalog: [],
        cart : [],
        searchValue : '',
        tovarAll : 0,
        deleteCartClick : ''
    },

    mutations: {
        SET_CATALOG_ANTIC(state, catalog) {
            state.catalog = catalog;
        },

        SET_ADD_TO_CART(state, paints) {
          if(state.cart.length) {
                let isProductExists = false;
                state.cart.map(function(item) {
                    if(item.id === paints.id) {
                        isProductExists = true;
                    }
                })
                if (!isProductExists) {
                    state.cart.push(paints);
                }
            } else {
                state.cart.push(paints);
            }
        },

        SET_SEARCH_VALUE(state, value_search) {
            state.searchValue = value_search;
        },

        SET_TOVAR_ALL(state, tovar_all) {
            state.tovarAll = tovar_all
        },

        SET_DELETE_PICT(state, value) {
            state.cart.splice(value, 1);
        },

        SET_DELETE_PICT_ITEM(state, value) {
            state.deleteCart = value;
        },

        SET_DELETE_ITEM_FROM_AUCTION(state, value) {
            if(value) {
                state.cart.map((item) => {
                    let index = state.cart.indexOf(item)
                    console.log(state.cart.indexOf(item))
                    if(item.id == value) {
                        state.cart.splice(index, 1);
                    } else {
                        return state.cart;
                    }
                })
            }
        }

    },

    actions: {
        GET_CATALOG_ANTIC({commit}) {
            return axios.get('https://renaisancevue2-default-rtdb.europe-west1.firebasedatabase.app/catalog/.json')
                .then((response) => {
                    commit('SET_CATALOG_ANTIC', response.data);
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                })
        },

        //Cart
        GET_ADD_TO_CART({commit}, paints ) {
            commit("SET_ADD_TO_CART", paints);
        },
        //SEARCH Value
        GET_SEARCH_VALUE({commit}, value_search) {
            commit("SET_SEARCH_VALUE", value_search);
        },
        //Tovar all
        GET_TOVAR_ALL({commit}, tovar_all) {
            commit('SET_TOVAR_ALL', tovar_all);
        },
        //Delete cart from auction
        GET_DELETE_PICT({commit}, value) {
            commit('SET_DELETE_PICT', value);
        },
        //Delete block
        GET_DELETE_PICT_ITEM({commit}, value) {
            commit("SET_DELETE_PICT_ITEM", value)
        },
        GET_DELETE_ITEM_FROM_AUCTION({commit}, value) {
            commit("SET_DELETE_ITEM_FROM_AUCTION", value)
        }

    },
    getters: {
        CATALOG (state) {
            return state.catalog;
        },

        ADD_CART(state) {
            return state.cart;
        },

        SEARCH_VALUE(state) {
            return state.searchValue;
        },

        TOVAR_ALL(state) {
            return state.tovarAll;
        },

        DELETE_BLOCK_FROM_CATALOG(state) {
            return state.deleteCart;
        }
    }
})

export default store;