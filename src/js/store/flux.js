import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
favoritos: [],
		},
		actions: {
			getList: async (element, page=1, limit=10) => {
				let response = await fetch(`https://www.swapi.tech/api/${element}?page=${page}&limit=${limit}`)
				if (!response.ok) console.error(`Error en la petición: ${response.statusText}`)
				else {
					let data = await response.json()
					let newStore = {}
					newStore[element] = data.result || data.results
					newStore[element] = newStore[element].map(item => {
						item.img = `https://starwars-visualguide.com/assets/img/${element == "people" ? "characters" : element}/${item.uid}.jpg`
						return item
					})
					setStore(newStore)
					return{pages: data.total_pages}
				}
			},

			favoritos: (item) => {
				const store = getStore()
				if(!store.favoritos.includes(item)){
					setStore({
						favoritos: [...store.favoritos, item]
					})
				} 
			},

			borrarFavorito: (item) => {
				const store = getStore()
				let array = []
				array = store.favoritos.filter((element) => element !== item)
				console.log(array)
				setStore({
					favoritos: array
				})
			},

			getDetail: async (element, id) => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/${element}/${id}`)
				if (!response.ok) {
					console.error(`Error en la petición: ${response.statusText}`)
					return null
				}
				else {
					let data = await response.json()
					// let newStore = {}
					// newStore[element + "Detail"] = data.result || data.results
					// setStore(newStore)
					return data.result || data.results
				}
					
				} catch (error) {
					console.error(`Error en la petición: ${error}`)
					return null
				}

			}
		}
	};
};

export default getState;
