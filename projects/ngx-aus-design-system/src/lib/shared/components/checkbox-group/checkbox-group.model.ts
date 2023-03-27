import { CheckboxSizes } from "./../checkbox/checkbox.model";

export type Checkbox = {
  name: string;
  label: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  labelUrl?: string;
  nested?: boolean;
  indeterminate?: boolean;
  size?: CheckboxSizes;
  error?: boolean;
};
