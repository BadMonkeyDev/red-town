import { useTranslation } from 'react-i18next';
import React, { FC } from 'react';
import { AppButton, AppButtonColor, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cn from 'classnames';
import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };
    return (
        <AppButton
            className={cn(styles.root, [className, styles.button])}
            variant={AppButtonVariant.CLEAR}
            color={AppButtonColor.PRIMARY_INVERTED}
            onClick={toggleLanguage}
        >
            {short ? t('Short language') : t('Language')}
        </AppButton>
    );
};
