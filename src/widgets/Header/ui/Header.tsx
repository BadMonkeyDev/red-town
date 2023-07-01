import { useTranslation } from 'react-i18next';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import { useCallback, useState } from 'react';
import { AppButton, AppButtonColor, AppButtonVariant } from 'shared/ui/AppButton/AppButton';
import cn from 'classnames';
import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = ({ className }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    const { t } = useTranslation();
    return (
        <div className={cn(styles.root, className)}>
            <div className={styles.items}>
                <AppButton
                    variant={AppButtonVariant.CLEAR}
                    color={AppButtonColor.SECONDARY_INVERTED}
                    className={styles.links}
                    onClick={onToggleModal}
                >
                    {t('Sign in')}
                </AppButton>
            </div>

            <AppModal
                isOpen={isOpen}
                onClose={onToggleModal}

            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                {/* eslint-disable-next-line i18next/no-literal-string */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, excepturi.
            </AppModal>
        </div>
    );
};
