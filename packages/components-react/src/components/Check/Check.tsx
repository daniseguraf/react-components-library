import React, { FC } from 'react';

export interface CheckProps {
  /**
   * Component's Id
   */
  id: string;
  /**
   * Component's name
   */
  name: string;
  /**
   * Type of check
   */
  type?: 'checkbox' | 'radio';
  /**
   * Value of the check
   */
  value?: string | number;
  /**
   * Optional CSS classes
   */
  className?: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * OnChange callback
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Check: FC<CheckProps> = ({
  id,
  name,
  type,
  value,
  onChange,
  children,
}) => {
  return (
    <div>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange && onChange(e)}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default Check;
