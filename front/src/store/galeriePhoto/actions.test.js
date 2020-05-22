import * as actions from './actions';

it('entitiesReceive', () => {
	expect(actions.getIndexPhoto(0)).toEqual({
		type: actions.GET_PHOTO_INDEX,
		payload: { photoIndex: 0 },
	});
});
