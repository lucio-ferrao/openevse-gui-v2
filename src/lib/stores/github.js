import { writable } from 'svelte/store'
import { httpAPI } from '../utils.js'


function createGitHubStore() {
	const P = writable()
	const { subscribe, set, update } = P

	async function download() {
		let res = await httpAPI("GET", "https://api.github.com/repos/lucio-ferrao/openevse_esp32_firmware/releases")
		if (res) {
			P.update(() => res)
			return true
		}
		else return false
	}

	return {
		subscribe,
		set,
		update,
		download
	}
}

export const github_store = createGitHubStore()