import api from '../../../api/posts'
import * as types from './types'

// initial state
const state = {
    all: []
}

// getters
const getters = {
    allPosts: state => state.all,
}

// actions
const actions = {
    getAllPosts ({ commit }) {
        api.getPosts().then((response) => {
            commit(types.RECEIVE_POSTS, { posts: response.data});
        });
    },
    allPostsFiltered ({ commit }, userId) {
        commit(types.FILTER_POST, {
            userId: userId
        })
    }
}

// mutations
const mutations = {
    [types.RECEIVE_POSTS] (state, { posts }) {
        state.all = posts
    },
    [types.FILTER_POST] (state, { userId }) {
        state.all = state.all.filter(post => post.userId == userId)
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}

