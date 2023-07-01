import cn from 'classnames';
import { AppModal } from 'shared/ui/AppModal/AppModal';
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
    return (
        <AppModal
            className={cn(styles.root, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </AppModal>
    );
};
