export type FormField = {
  label?: string;
  value: string;
  onChangeText: (e: string) => void;
  placeholder?: string;
  otherStyles?: string;
};
