import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';
import styles from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface AppInputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  labelPosition?: 'start' | 'top' | 'end'
  helpText?: string;
  error?: string;
  showError?: boolean;
  autofocus?: boolean;
}

export const AppInput = memo((props: AppInputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        label,
        labelPosition = 'top',
        helpText,
        error,
        showError = true,
        autofocus = false,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>();

    const Id = uuidv4();

    const [focused, setFocused] = useState<boolean>(false);

    useEffect(() => {
        if (autofocus) {
            setFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    const onBlur = () => {
        setFocused(false);
    };

    const onFocus = () => {
        setFocused(true);
    };

    return (
        <div className={cn(
            styles.root,
            {
                [styles.error]: showError && error,
                [styles.focused]: focused,
            },
            [className, styles[labelPosition]],
        )}
        >
            {label && <label htmlFor={Id} className={styles.label}>{label}</label>}
            <label htmlFor={Id} className={styles.inputWrapper}>
                <input
                    id={Id}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...otherProps}
                />
            </label>
            {showError && error && !focused
                ? <span className={styles.errorText}>{error}</span>
                : helpText && <span className={styles.helpText}>{helpText}</span>}
        </div>
    );
});
