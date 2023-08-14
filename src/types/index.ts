import { FormikErrors, FormikTouched } from 'formik';

export interface Item {
  id: number;
  name: string;
  category?: { id: number; name: string };
}

export interface OrganizedCategory {
  name: string;
  items: Item[];
}

export interface TaxFormValues {
  applied_to: string;
  applicable_items: number[];
  name: string;
  rate: number;
}

export interface TaxInputProps {
  value: string;
  rate: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormikErrors<TaxFormValues>;
  touched: FormikTouched<TaxFormValues>;
}

export type TaxFormErrors = {
  applied_to?: string;
  applicable_items?: string | string[];
  name?: string;
  rate?: string;
};