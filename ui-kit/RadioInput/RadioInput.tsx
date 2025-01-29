import { ChangeEvent, ChangeEventHandler } from 'react';
import styles from './RadioInput.module.css';

interface RadioProps extends ChangeEventHandler<HTMLInputElement> {
   id: string;
   name: string;
   value: string;
   defaultChecked?: boolean;
   required?: boolean;
   disabled?: boolean;
   onChange: ({ name, value }: onChangeProps) => void;
}

type onChangeProps = {
   name: string,
   value: string
}

export const RadioInput = ({
   id,
   name,
   value,
   defaultChecked = false,
   disabled = false,
   required = false,
   onChange,
   ...props
}: RadioProps) => {

   function changeHandler(e: ChangeEvent<HTMLInputElement>) {
      onChange({
         name: e.target.name,
         value: e.target.value
      })
   }

   return (
      <>
         <label className={styles['radio-label']} >
            <input
               className={styles['radio-item']}
               id={id}
               type="radio"
               name={name}
               value={value}
               defaultChecked={defaultChecked}
               disabled={disabled}
               required={required}
               onChange={changeHandler}
               {...props}
            />
            <span className={styles['radio-button']}></span>
         </label>
      </>
   );
};