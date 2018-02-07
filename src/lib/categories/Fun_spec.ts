import { Fun, fun } from "./Fun";

describe("Fun", () => {

    it("f", () => {
        let incr:Fun<number,number> = fun(x => x + 1);
        let is_even:Fun<number,boolean> = fun(x => x % 2 ===0);
        let not:Fun<boolean,boolean> = fun(x => !x);
        expect(incr.then(is_even).then(not).f(10)).toBe(true);
    });
});