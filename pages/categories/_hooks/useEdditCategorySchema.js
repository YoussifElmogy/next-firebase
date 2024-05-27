import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

export default function useAddCategorySchema() {
  const { t } = useTranslation();

  return yup.object({
    name: yup
      .string()
      .trim()
      .max(100, t('errors.maxLength', { maxLength: 100 }))
      .min(4, t('errors.minLength', { minLength: 4 }))
      .required(t('errors.required')),
    description: yup
      .string()
      .trim()
      .max(200, t('errors.maxLength', { maxLength: 200 }))
      .min(10, t('errors.minLength', { minLength: 10 }))
      .required(t('errors.required')),
    metaDescription: yup.string().optional(),

    sort: yup
      .number()
      .transform((value) => (value || value === 0 ? value : null))
      .min(1, t('errors.minValue', { minValue: 1 }))
      .nullable(true),
    isActive: yup.bool().default(false).required(t('errors.required')),
  });
}
