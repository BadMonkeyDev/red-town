import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import {
    MutableRefObject,
} from 'react';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
  textFieldRef?: MutableRefObject<HTMLInputElement>;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
        textFieldRef,
    } = props;

    const { t } = useTranslation();
    return (
        <div className={cn(styles.root, [className])}>
            <form className={styles.form}>
                <AppInput type="text" ref={textFieldRef} />
                <AppInput type="password" />
            </form>
            <AppButton
                className={styles.loginBtn}
                variant={AppButtonVariant.OUTLINED}
            >
                {t('Sign in')}
            </AppButton>
        </div>
    );
};
