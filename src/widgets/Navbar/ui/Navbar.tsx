import React, { FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import cn from 'classnames';
import styles from './Navbar.module.scss';

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
        <div className={cn(styles.root, [className, styles[direction], styles[variant], styles[mode]])}>
            <div className={styles.items}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.item}
                >
                    <HomeIcon className={styles.icon} />
                    <span className={styles.link}>{t('Main')}</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.item}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('About')}</span>
                </AppLink>
            </div>
        </div>
    );
};
