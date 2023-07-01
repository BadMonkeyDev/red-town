import cn from 'classnames';
import styles from './AppLoader.module.scss';

interface AppLoaderProps {
    className?: string;
}

export const AppLoader = ({ className }: AppLoaderProps) => (
    <span className={cn(styles.root, className)} />
);
