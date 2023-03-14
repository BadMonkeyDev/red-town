import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cls from './Navbar.module.scss';

export enum NavbarMode {
    LINKS='mode-links',
    ICONS='mode-icons',
    LINKS_AND_ICONS='mode-links-and-icons'
}

export enum NavbarVariant {
    NONE = 'none',
    INVERTED = 'inverted',
}

export enum NavbarDirection {
    COLUMN = 'column',
    ROW = 'row',
}

interface NavbarProps {
    className?: string;
    direction?: NavbarDirection;
    variant?: NavbarVariant;
    mode?: NavbarMode;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {
        className,
        direction = NavbarDirection.ROW,
        variant = NavbarVariant.NONE,
        mode = NavbarMode.LINKS_AND_ICONS,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className, cls[direction], cls[variant], cls[mode]])}>
            <div className={cls.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>{t('Main')}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('About')}</span>
                </AppLink>
            </div>
        </div>
    );
};
