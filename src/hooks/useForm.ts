import { useState, useEffect } from "react";

interface UseFormParams<T, E> {
  initialValues: T;
  onSubmit?: (values: T) => void;
  validate?: (values: T) => E;
}

const useForm = <T = unknown, E = unknown>({ initialValues, onSubmit, validate }: UseFormParams<T, E>) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<E>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validate) setErrors(validate(values));
  };

  useEffect(() => {
    if (isSubmitting) {
      if (errors && Object.keys(errors).length === 0 && onSubmit) {
        onSubmit(values);
      }

      setIsSubmitting(false);
    }
  }, [errors]);

  return { values, errors, isSubmitting, handleChange, handleSubmit };
};

export default useForm;
