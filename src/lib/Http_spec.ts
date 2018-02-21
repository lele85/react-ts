import Http, { buildUri } from "./Http";
import { AbortTokens } from "../actions/ShowActions";
import Axios from "axios";
import HttpRequests from "./HttpRequests";
describe("Http", () => {
    describe("get", () => {
        const mockModel = {
            id: 12,
            title: "Show Title"
        };
        const mockParams = {
            id: 12,
            exports: "all"
        };
        const mockCancel = {
            cancel: () => {},
            token: "123"
        };

        beforeEach(() => {
            jest.spyOn(HttpRequests, "getHttpRequest").mockReturnValue(mockCancel);
            jest.spyOn(HttpRequests, "setHttpRequest");
            jest.spyOn(HttpRequests, "abortHttpRequest");
        });

        it("should cancel the pending request with the same token, set the current one and resolve succesfully", async () => {
            jest.spyOn(Axios, "get").mockReturnValue(Promise.resolve({ data: mockModel }));
            const result = await Http.get<typeof mockModel, typeof mockParams>(
                "/api/shows/:id",
                mockParams,
                AbortTokens.SHOW
            );
            expect(result).toEqual({ canceled: false, model: mockModel });
            expect(HttpRequests.getHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
            expect(HttpRequests.setHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
            expect(HttpRequests.abortHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
            expect(Axios.get).toHaveBeenCalledWith("/api/shows/12", { cancelToken: "123", exports: "all" });
        });

        it("should cancel the pending request with the same token, set the current one and reject in case of error", async () => {
            jest.spyOn(Axios, "get").mockReturnValue(Promise.reject({ error: new Error("message") }));
            try {
                await Http.get<typeof mockModel, typeof mockParams>("/api/shows/:id", mockParams, AbortTokens.SHOW);
            } catch (e) {
                expect(HttpRequests.getHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
                expect(HttpRequests.setHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
                expect(HttpRequests.abortHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
                expect(Axios.get).toHaveBeenCalledWith("/api/shows/12", { cancelToken: "123", exports: "all" });
            }
        });

        it("should cancel the pending request with the same token, set the current one and resolve with a canceled response in case of CancelationError", async () => {
            jest.spyOn(Axios, "get").mockReturnValue(Promise.reject(new Axios.Cancel("message")));
            const result = await Http.get<typeof mockModel, typeof mockParams>(
                "/api/shows/:id",
                mockParams,
                AbortTokens.SHOW
            );
            expect(result).toEqual({ canceled: true, model: null });
            expect(HttpRequests.getHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
            expect(HttpRequests.setHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
            expect(HttpRequests.abortHttpRequest).toHaveBeenCalledWith(AbortTokens.SHOW);
            expect(Axios.get).toHaveBeenCalledWith("/api/shows/12", { cancelToken: "123", exports: "all" });
        });
    });

    describe("buildUri", () => {
        it("should return the same uri if no placeholder and no params", () => {
            expect(buildUri("/foo/bar", {})).toEqual({ uri: "/foo/bar", params: {} });
        });

        it("should replace the placholder if there's a match and remove the bound param", () => {
            expect(buildUri("/foo/bar/:id", { id: 12 })).toEqual({
                uri: "/foo/bar/12",
                params: {}
            });
        });

        it("should replace the placholder if there's a match and remove the bound param", () => {
            expect(buildUri("/foo/bar/:id", { id: 12, q: "search" })).toEqual({
                uri: "/foo/bar/12",
                params: { q: "search" }
            });
        });

        it("should replace the placeholedet with a match for value 0", () => {
            expect(buildUri("/foo/bar/:id", { id: 0, q: "search" })).toEqual({
                uri: "/foo/bar/0",
                params: { q: "search" }
            });
        });
    });
});
