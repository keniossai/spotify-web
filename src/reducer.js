export const initialState = {
	user: null,
	playlist: [],
	playing: false,
	item: null,
    // REMOVE after finish developing
	// token:
	// 	'BQCXPfhSUWA2cDRfdNDpemDyc_-XGycYzXjVUVIeZUXlw5cKj5SysH5EhQIk-HF14QbdB0Nbsu29BYYTGle_6Yhd9hYEq_AW-M-Gkvf4vCECNBJ5rNqIELnflnQPSO3IeNRw9oIUTZDYLJl88_eiuDpfBV-ykCo-KC0',
}

const reducer = (state, action) => {
	console.log(action)

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			}

		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			}
		
		case 'SET_PLAYLIST':
			return {
				...state,
				playlists: action.playlists
			}	
		
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly 
			}	

		default:
			return state
	}
}

export default reducer
