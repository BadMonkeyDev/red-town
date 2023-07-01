import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/config/tests/ComponentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar rendered', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar toggle test', () => {
        ComponentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        const sidebar = screen.getByTestId('sidebar');
        expect(sidebar).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebar).toHaveClass('collapsed');
    });
});
