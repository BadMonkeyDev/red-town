import { classNames } from 'shared/lib/classNames/classNames';
import React, { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppButton, AppThemeButton } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <AppButton theme={AppThemeButton.OUTLINED} onClick={onToggle}>{t('toggle')}</AppButton>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
