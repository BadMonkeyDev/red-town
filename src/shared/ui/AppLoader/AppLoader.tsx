import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLoader.module.scss';

interface AppLoaderProps {
    className?: string;
}

export const AppLoader = ({ className }: AppLoaderProps) => (
    <span className={classNames(cls.appLoader, {}, [className])} />
);
