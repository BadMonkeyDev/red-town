import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    return (
        <div className={cn(styles.root, [className])}>
            <form className={styles.form}>
                <AppInput type="text" autofocus />
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
