import { actionCreatorFactory } from "typescript-fsa";
import Http, { HttpResponse } from "../../lib/Http";
import { fetchApiWorkerFactory } from "./ApiWorkerFactories";
import { createMockStore, mockGetSuccess, mockGetError } from "../../lib/TestUtils";
import { AbortTokens } from "../ShowActions";

describe("fetchApiWorkerFactory", () => {
    type State = {};
    type Params = { query: string };
    type Response = { value: number };
    type Error = { message: string };

    it("should dispatch started then done in case of success", async () => {
        const store = createMockStore<State>({});
        mockGetSuccess<Response>({ value: 12 });
        const actionCreator = actionCreatorFactory("@@test");
        const fetchTest = actionCreator.async<Params, HttpResponse<Response>, Error>("FETCH");
        const fetchTestWorker = fetchApiWorkerFactory<Params, Response, Error>(
            fetchTest,
            "/api/test",
            AbortTokens.SHOW
        );
        await store.dispatch(fetchTestWorker({ query: "123" }));
        expect(store.getActions()).toMatchSnapshot();
    });

    it("should dispatch started then fail in case of error", async () => {
        const store = createMockStore<State>({});
        mockGetError<Error>({ message: "Error!" });
        const actionCreator = actionCreatorFactory("@@test");
        const fetchTest = actionCreator.async<Params, HttpResponse<Response>, Error>("FETCH");
        const fetchTestWorker = fetchApiWorkerFactory<Params, Response, Error>(
            fetchTest,
            "/api/test",
            AbortTokens.SHOW
        );
        await store.dispatch(fetchTestWorker({ query: "123" }));
        expect(store.getActions()).toMatchSnapshot();
    });
});
