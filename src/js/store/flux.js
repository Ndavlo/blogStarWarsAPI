import { element } from "prop-types";
const apiUrl = "https://3000-4geeksacade-flaskresthe-e41tw5wytpf.ws-us85.gitpod.io"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
favoritos: [],
		},
		actions: {
			getList: async (element) => {
				let response = await fetch(apiUrl+`/`+element)
				if (!response.ok) console.error(`Error en la petición: ${response.statusText}`)
				else {
					let data = await response.json()
					let newStore = {}
					newStore[element] = data
					newStore[element] = newStore[element].map(item => {
						item.img = `https://starwars-visualguide.com/assets/img/${element == "people" ? "characters" : element}/${item.id}.jpg`
						return item
					})
					setStore(newStore)
					return{data}
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
