import styles from './Input.module.css';

export interface InputProps {
   placeholder: string;
   type: string;
   title?: string;
   disabled?: boolean;
   onChange?: () => void;
}

export const Input = ({
   placeholder,
   type,
   title,
   disabled = false,
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
            {...props}
         />
      </div>
   );
};
