import styles from './Button.module.css';
import cn from 'classnames';

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'with-arrow';
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variant,
  text,
  disabled = false,
  ...props
}: ButtonProps) => {
  
  
  return (
    <button
      type="button"
      className={cn({
        [styles['button']]: variant === 'primary',
        [styles['button-secondary']]: variant === 'secondary',
        [styles['button-with-arrow']]: variant === 'with-arrow'
      })}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};
