// src/components/UI/SearchInput/searchValidation.ts
import * as yup from 'yup';

export const searchSchema = yup.object().shape({
  search: yup
    .string()
    .required(' ')
    .min(1, 'Минимум 1 символ1')
    .max(50, 'Максимум 50 символов')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Только буквы и цифры без спецсимволов')
    .test('empty-check', '', (value) => {
      return value === '' || value.length >= 1;
    }),
});
