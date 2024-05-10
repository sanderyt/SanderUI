export interface TextFieldProps {
  // `name`: The name of the input, used for form submission and linking with errors.
  name: string;

  // `label`: Optional text label for the input field.
  label?: string;

  // `type`: Optional HTML input type (e.g., 'text', 'password', etc.).
  type?: string;

  // `error`: Optional error message or object from react-hook-form for this input.
  error?: any;

  onChange?: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}
