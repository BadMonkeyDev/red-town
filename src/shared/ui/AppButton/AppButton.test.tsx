import { render, screen } from '@testing-library/react';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';

describe('Buttons', () => {
    test('Button rendered', () => {
        render(<AppButton>Button</AppButton>);
        expect(screen.getByText('Button')).toBeInTheDocument();
    }); test('Button type check', () => {
        render(<AppButton variant={AppButtonVariant.CLEAR} type="button">Button</AppButton>);
        expect(screen.getByText('Button')).toHaveClass('clear');
        screen.debug();
    });
});
