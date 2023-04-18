import { CounterSchema } from '../types/CounterSchema';
import { counterActions, counterReducer } from './CounterSlice';

describe('CounterSlice', () => {
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterReducer(
                state as CounterSchema,
                counterActions.increment(),
            ),
        )
            .toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = { value: 33 };
        expect(
            counterReducer(
                state as CounterSchema,
                counterActions.decrement(),
            ),
        )
            .toEqual({ value: 32 });
    });
    test('should wotk with empty state', () => {
        expect(
            counterReducer(
                undefined,
                counterActions.decrement(),
            ),
        )
            .toEqual({ value: -1 });
    });
});
