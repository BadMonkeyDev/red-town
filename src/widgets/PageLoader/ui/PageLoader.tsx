import { AppLoader } from 'shared/ui/AppLoader/AppLoader';
import cn from 'classnames';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={cn(styles.root, className)}>
        <AppLoader />
    </div>
);
