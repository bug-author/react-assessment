import * as yup from 'yup';

const taxValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(1, 'Tax name is required')
    .required('Tax name is required'),
  rate: yup
    .number()
    .typeError('Please enter a valid rate for tax')
    .required('Rate is required')
    .min(0, 'Rate must be 0 or greater')
    .max(100, 'Rate must be less than or equal to 100'),
  applied_to: yup.string().required(),
  applicable_items: yup.array(),
});

export default taxValidationSchema;
