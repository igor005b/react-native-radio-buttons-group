export type RadioButtonProps = {
  borderColor?: string;
  selectedColor?: string;
  color?: string;
  containerStyle?: object;
  disabled?: boolean;
  id: string;
  label?: string;
  labelStyle?: object;
  layout?: 'row' | 'column';
  onPress?: (id: string) => void;
  selected?: boolean;
  size?: number;
  value?: string;
};

export type RadioGroupProps = {
  layout?: 'row' | 'column';
  onPress?: (radioButtons: RadioButtonProps[]) => void;
  radioButtons: RadioButtonProps[];
  color?: string;
  selectedColor?: string;
  labelStyle?: object;
  reset?: boolean;
};
