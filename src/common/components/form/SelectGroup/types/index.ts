export type FieldControled<T> = {
  onBlur(): void;
  onchange(): void;
  value: T;
  ref: unknown;
};

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
}

export type SelectGroupOption = SelectOption & {
  options: SelectOption[];
}
