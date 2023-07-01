import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import {
    AppButton, AppButtonColor, AppButtonSize, AppButtonVariant,
} from 'shared/ui/AppButton/AppButton';
import { Navbar } from 'widgets/Navbar';
import { NavbarDirection, NavbarMode } from 'widgets/Navbar/ui/Navbar';
import cn from 'classnames';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={cn(
                styles.root,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <Navbar
                direction={NavbarDirection.COLUMN}
                mode={collapsed ? NavbarMode.ICONS : NavbarMode.LINKS_AND_ICONS}
            />
            <AppButton
                data-testid="sidebar-toggle"
                square
                variant={AppButtonVariant.CONTAINED}
                color={AppButtonColor.PRIMARY_INVERTED}
                size={AppButtonSize.L}
                onClick={onToggle}
                className={styles.collapsedBtn}
            >
                {collapsed ? '>' : '<'}
            </AppButton>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
