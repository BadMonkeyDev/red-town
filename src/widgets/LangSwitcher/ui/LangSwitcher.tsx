import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {useTranslation} from "react-i18next";
import React from "react";
import {AppButton, AppThemeButton} from "shared/ui/AppButton/AppButton";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation()
    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
    }
    return (
        <AppButton
            className={classNames(cls.langSwitcher, {}, [className, cls.button])}
            theme={AppThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Language')}
        </AppButton>
    );
};