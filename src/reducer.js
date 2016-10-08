import { REQUEST, RECEIVE } from './actions';

const initialState = {
    isFetching: false,
    message: [65, 59, 80, 81, 56, 55, 40]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                message: action.message
            });
        default:
            return state;
    }
};
