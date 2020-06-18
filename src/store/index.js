import vue from 'vue';
import vuex from 'vuex';
import { getMenu } from "../data/api"

vue.use(vuex);

const state = {
    menuList: [],//所有目录
    openMenu: null,//打开的目录
    focusElm: null,//获取焦点的元素
}


const getters = {
    getMenuList(state, getters) {
        return state.menuList;
    },
    getOpenMenu(state, getters) {
        return state.openMenu;
    },
    getFocusElm(state, getters) {
        return state.focusElm;
    }
}

const mutations = {
    async setMenuList(state, playload) {
        let result = await getMenu();
        state.menuList = result.data.map((item, index) => {
            return { ...item, display: state.menuList[index] ? state.menuList[index].display : "none" };
        })
    },
    setOpenMenu(state, playload) {
        state.openMenu = playload;
    },
    setFocusElm(state, playload) {
        state.focusElm = playload;
    }
}


// const actions = {
//     asyncSetName(context, playload) {
//         const { state, rootState, commit, dispatch, getters, rootGetters } = context;
//         commit("setName", playload);
//     },
//     asyncSetAge(context, playload) {
//         const { state, rootState, commit, dispatch, getters, rootGetters } = context;
//         commit("setAge", playload);
//     },
//     asyncSetSex(context, playload) {
//         const { state, rootState, commit, dispatch, getters, rootGetters } = context;
//         // commit("setSex",playload);
//         dispatch('pMethod', { type: 'setSex', playload: playload });
//     },
//     pMethod(context, playload) {
//         const { commit } = context;
//         commit(playload.type, playload.playload);
//     }
// }


export default new vuex.Store({
    state,
    getters,
    mutations,
    // actions
})