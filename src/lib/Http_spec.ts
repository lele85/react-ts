import { buildUri } from "./Http";

describe("buildUri", () => {
    
    it("should return the same uri if no placeholder and no params", () => {
        expect(buildUri("/foo/bar",{})).toEqual({uri:"/foo/bar", params:{}});
    });

    it("should replace the placholder if there's a match and remove the bound param", () => {
        expect(buildUri("/foo/bar/:id", {id:12})).toEqual({uri:"/foo/bar/12", params:{}});
    });

    it("should replace the placholder if there's a match and remove the bound param", () => {
        expect(buildUri("/foo/bar/:id", {id:12,q:"search"})).toEqual({uri:"/foo/bar/12", params:{q:"search"}});
    });
});