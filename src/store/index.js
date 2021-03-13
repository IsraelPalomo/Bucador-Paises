import { createStore } from "vuex";

export default createStore({
	state: {
		paises: [],
		paisesFiltrados: [],
	},
	mutations: {
		setPaises(state, payload) {
			state.paises = payload;
		},
		setPaisesFiltrados(state, payload) {
			state.paisesFiltrados = payload;
		},
	},
	actions: {
		filtroNombre({ commit, state }, texto) {
			const textoCliente = texto.toLowerCase();
			const filtro = state.paises.filter((pais) => {
				const textoApi = pais.name.toLowerCase();
				if (textoApi.includes(textoCliente)) {
					return pais;
				}
			});
			commit("setPaisesFiltrados", filtro);
		},

		filtrarRegion({ commit, state }, region) {
			const filtro = state.paises.filter((pais) => pais.region.includes(region));
			commit("setPaisesFiltrados", filtro);
		},

		async getPaises({ commit }) {
			try {
				const res = await fetch("banderas.json");
				const data = await res.json();
				console.log(data);
				commit("setPaises", data);
			} catch (error) {
				console.log(error);
			}
		},
	},
	getters: {
		topPaisesPoblacion(state) {
			return state.paisesFiltrados.sort((a, b) => {
				return a.population < b.population ? 1 : -1;
			});
		},
	},
	modules: {},
});
