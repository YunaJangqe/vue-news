import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(respnose => {
    //         console.log(respnose);
    //         context.commit('SET_NEWS', respnose.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },
    async FETCH_NEWS({ commit }) {
        const response = await fetchNewsList();
        commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    async FETCH_JOBS({ commit }) {
        try {
            const response = await fetchJobsList();
            commit('SET_JOBS', response.data);
            return response;
        } catch(error) {
            console.log(error);
        }        
    },
    async FETCH_USER({ commit }, username) {
        const response = await fetchUserInfo(username);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    }
}