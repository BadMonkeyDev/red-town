import { render, screen } from '@testing-library/react';
import { AppButton, AppThemeButton } from 'shared/ui/AppButton/AppButton';

describe('Buttons', () => {
    test('Button rendered', () => {
        render(<AppButton>Button</AppButton>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    }); test('Button type check', () => {
        render(<AppButton theme={AppThemeButton.CLEAR} type="button">Button</AppButton>);
        expect(screen.getByText('Button')).toHaveClass('clear');
        screen.debug();
    });
});
