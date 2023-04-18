import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center',
        }}
        >
            <h1 data-testid="value-title">{counterValue}</h1>
            <div style={{ display: 'flex', gap: 16 }}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppButton variant={AppButtonVariant.OUTLINED} onClick={increment} data-testid="increment-button">
                    increment
                </AppButton>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <AppButton data-testid="decrement-button" variant={AppButtonVariant.OUTLINED} onClick={decrement}>
                    decrement
                </AppButton>
            </div>
        </div>
    );
};
