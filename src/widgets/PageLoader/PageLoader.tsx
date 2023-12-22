import cn from '@/shared/lib/classNames';
import styles from './PageLoader.module.scss';
import { Loader } from '@/shared/ui/Loader';

export interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const {
    className,
  } = props;

  const spinnerColor = 'var(--inverted-bg-color)';

  return (
    <div className={cn(styles.root, className)}>
      <Loader
        size={128}
        color={spinnerColor}
      />
    </div>
  );
};
