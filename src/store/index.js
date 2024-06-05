import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
	state: {
		user: null,
		repositories: null,
		error: null,
		currentSort: 'name',
		url: 'https://api.github.com/users/'
	},
	mutations: {
		userInfo(state, data) {
			state.user = data
			state.error = null
		},
		userReset(state) {
			state.user = null
			state.error = null
		},
		userError(state, error) {
			state.error = error.response.data.message
		},
		reposInfo(state, repos) {
			state.repositories = repos
		},
		changeSort(state, payload) {
			state.currentSort = payload
		}
	},
	actions: {
		async userInfo({commit, state}, search) {
			try {
				const res = await axios.get(`${state.url}${search}`)
				const repos = await axios.get(`${state.url}${search}/repos`)
				commit('userInfo', res.data)
				commit('reposInfo', repos.data)
			} catch (error) {
				commit('userError', error)
				state.user = null
			}
		}
	},
	getters: {
		getReposSort(state) {
			if (state.repositories != null) {
				return state.repositories.sort((prev, next) => {
					let reposSort = 1
					if (prev[state.currentSort] < next[state.currentSort]) {
						return -1 * reposSort
					}
				})
			}
    },
	}
})

export default store
