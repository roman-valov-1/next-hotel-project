import { ChangeEventHandler, ReactNode } from 'react';
import styles from './Field.module.css';

export interface FieldProps extends ChangeEventHandler<HTMLInputElement> {
   direction?: 'row' | 'column';
   gap?: number;
   children?: ReactNode;
}

export const Field = ({
   direction = 'row',
   gap = 5,
   children,
   ...props
}: FieldProps) => {


   return (
      <div className={direction === 'row' ? styles['field-row'] : styles['field-column']} 
      style={ {gap: gap + 'px'}}
      {...props}>
         {children}
      </div>
   );
};