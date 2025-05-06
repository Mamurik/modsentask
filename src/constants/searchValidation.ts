// src/components/UI/SearchInput/searchValidation.ts
import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  search: yup
    .string()
    .required('')
    .min(2, 'Minimum 2 letters')
    .max(50, 'Maximum 50 letters')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Only letters without symbols')
    .test('empty-check', '', (value) => {
      return value === '' || value.length >= 1;
    }),
});
