import Http from "./Http";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

export function mockGetSuccess<T>(result : T) {
    Http.get = jest.fn<T>(() => {
        return Promise.resolve(result);
    });
};

export function mockGetError<T>(error : T) {
    Http.get = jest.fn<T>(() => {
        return Promise.reject(error);
    });
};

export function createMockStore<T>(state: T) {
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    return mockStore(state);
}

export function assertEquals<T> (result : T, expected: T) {
    return expect(result).toEqual(expected);
}