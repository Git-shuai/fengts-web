import {getIsCollapse, setIsCollapse} from "../../utils/app";

const state = {
    isCollapse: getIsCollapse()
};

const getters = {
};

const mutations = {
    SET_isCollapse(state) {
        state.isCollapse = !state.isCollapse;
        setIsCollapse(state.isCollapse)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
};
