import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchCommentItem, fetchList } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(respnose => {
            console.log(respnose);
            context.commit('SET_NEWS', respnose.data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_ASK(context) {
        fetchAskList()
        .then(response => {
            context.commit('SET_ASK', response.data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error);
        });
    },
    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
        .then(({ data }) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ITEM({ commit }, id ) {
        fetchCommentItem(id)
        .then(( { data }) => {
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
        .then(({ data }) => commit('SET_LIST', data))
        .catch(error => console.log(error));
    }
}