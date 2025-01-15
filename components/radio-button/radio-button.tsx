import { InputHTMLAttributes } from 'react';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  label: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  ...rest
}) => {
  return (
    <label className="flex items-center gap-1">
      <input type="radio" name={name} {...rest} />
      {label}
    </label>
  );
};
