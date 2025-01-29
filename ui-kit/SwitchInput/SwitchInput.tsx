import { ChangeEvent, ChangeEventHandler } from 'react';
import styles from './SwitchInput.module.css';

interface SwitchProps extends ChangeEventHandler<HTMLInputElement> {
   id: string;
   name: string;
   checked?: boolean;
   value?: string;
   required?: boolean;
   disabled?: boolean;
   onChange: ({checked, name, value}: onChangeProps) => void;
}

type onChangeProps = {
   checked: boolean,
   name: string,
   value: string
}

export const SwitchInput = ({
   id,
   name,
   value,
   checked = false,
   disabled = false,
   required = false,
   onChange,
   ...props
}: SwitchProps) => {

   function changeHandler(e: ChangeEvent<HTMLInputElement>) {
      onChange({
         checked: e.target.checked,
         name: e.target.name,
         value: e.target.value
      })
   }

   return (
      <div className={styles['switch']}>
         <input
            className={styles['switch-input']}
            id={id}
            type='checkbox'
            defaultChecked={checked}
            name={name}
            value={value}
            disabled={disabled}
            required={required}
            onChange={changeHandler}
            {...props}
         />
         <label
            htmlFor={id}
            className={styles['switch-slider']}
         ></label>
      </div>
   );
};