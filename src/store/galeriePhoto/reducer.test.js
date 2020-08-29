import { GET_PHOTO_INDEX } from './actions';
import reducer from './reducer';
const initstate = { photoIndex: 0 };
describe('Post Reducer', () => {
	it('Should return default state', () => {
		const newState = reducer(undefined, []);
		expect(newState).toEqual(initstate);
	});
	it('Should return new Statess', () => {
		const initstate = { photoIndex: 0 };
		const newState = reducer(undefined, {
			type: GET_PHOTO_INDEX,
			payload: initstate,
		});
		expect(newState).toEqual(initstate);
	});
});
