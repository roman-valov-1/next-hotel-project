import { ChangeEventHandler } from 'react';
import styles from './TextInput.module.css';

export interface InputProps extends ChangeEventHandler<HTMLInputElement> {
   placeholder: string;
   type: string;
   title?: string;
   disabled?: boolean;
   onChange?: () => void;
}

export const TextInput = ({
   placeholder,
   type,
   title,
   disabled = false,
   onChange,
   ...props
}: InputProps) => {


   return (
      <div className={styles['input-group']}>
         <label 
            className={styles['input-title']}
            htmlFor={title}
         >
            {title}
         </label>
         <input
            type={type}
            className={styles.input}
            disabled={disabled}
            placeholder={placeholder}
            id={title}
            onChange={onChange}
            {...props}
         />
      </div>
   );
};
