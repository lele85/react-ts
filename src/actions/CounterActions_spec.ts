import { CounterState } from '../state/CounterState';
import { createMockStore } from '../lib/TestUtils';
import { counterInc, counterDec } from './CounterActions';

describe("Counter Actions", () => {

    it("should be dispatched", async () => { 
        const store = createMockStore<CounterState>({value:0});
        store.dispatch(counterInc({by:2}));
        store.dispatch(counterDec({by:3}));
        store.dispatch(counterInc({by:10}))
        expect(store.getActions()).toMatchSnapshot();
    });

});