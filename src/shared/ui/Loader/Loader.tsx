import { CSSProperties } from 'react';
import cn from '@/shared/lib/classNames';
import './Loader.scss';

export interface PageLoaderProps {
  className?: string;
  color?: string;
  size?: number;
}

export const Loader = (props: PageLoaderProps) => {
  const {
    className,
    color = 'teal',
    size = 80,
  } = props;

  return (
    <div
      className={cn(className, 'lds-spinner')}
      style={{ '--spinner-color': color, '--size': `${size}px` } as CSSProperties}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
