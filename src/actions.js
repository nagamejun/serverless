import fetch from 'isomorphic-fetch';

export const REQUEST = 'REQUEST';
function request() {
    return {
        type: REQUEST
    };
}

export const RECEIVE = 'RECEIVE';
function recieve(result) {
    var arrayData = [];
    result.Items.forEach(item => arrayData.push(item.payload.hum));
    return {
        type: RECEIVE,
        message: arrayData
    };
}

export function fetchHello() {
    return (dispatch) => {
        dispatch(request());

        return fetch('https://xxxxxx.execute-api.ap-northeast-1.amazonaws.com/xxxx/xxxxxxxx').then((response) => {
                return response.json();
    }).then((result) => {
            return dispatch(recieve(result));
    });
    };
}
