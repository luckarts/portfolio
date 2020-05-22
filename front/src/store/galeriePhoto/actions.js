export const GET_PHOTO_INDEX = 'GET_PHOTO_INDEX';
export const CREATE_ARTWORK = 'CREATE_ARTWORK';
export const getIndexPhoto = (photoIndex) => ({
	type: GET_PHOTO_INDEX,
	payload: {
		photoIndex,
	},
});

export const createRequestArtwork = (img) => ({
	type: CREATE_ARTWORK,
	img,
});
