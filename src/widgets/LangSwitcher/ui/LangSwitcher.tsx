import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { FC } from 'react';
import { AppButton, AppButtonColor, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cls from './LangSwitcher.module.scss';

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
            className={classNames(cls.langSwitcher, {}, [className, cls.button])}
            variant={AppButtonVariant.CLEAR}
            color={AppButtonColor.PRIMARY_INVERTED}
            onClick={toggleLanguage}
        >

            {t(short ? 'Short language' : 'Language')}
        </AppButton>
    );
};
