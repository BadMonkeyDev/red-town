import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(cls.notFoundPage, className)}>
            {t('Page not found')}
        </div>
    );
};
