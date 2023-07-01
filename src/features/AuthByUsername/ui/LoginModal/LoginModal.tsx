import cn from 'classnames';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import { useEffect, useRef } from 'react';
import { LoginForm } from '../LoginForm';
import styles from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            ref.current?.focus();
        }
    }, [isOpen]);

    return (
        <AppModal
            className={cn(styles.root, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm textFieldRef={ref} />
        </AppModal>
    );
};
