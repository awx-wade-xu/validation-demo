// @ts-ignore
import Express from '@types/express';
import { cloneDeep } from 'lodash';
import { formData } from '../mockData';

export default {
  'GET /api/form': formData,

  'GET /api/v2/form': (req: Express.Request, res: Express.Response) => {
    const { query } = req;
    const cloneData = cloneDeep(formData);

    for (let step of cloneData.data.steps) {
      const { fields } = step;
      for (let field of fields) {
        if (query[field.key]) {
          field.defaultValue = query[field.key] as string;
        }

        if (
          query.bankLocation === 'CN' &&
          field.key === 'accountCurrency' &&
          !query[field.key]
        ) {
          field.defaultValue = 'CNY';
        }
        if (
          query.bankLocation === 'AU' &&
          field.key === 'accountCurrency' &&
          !query[field.key]
        ) {
          field.defaultValue = 'AUD';
        }

        if (
          query.recipientType &&
          query.bankLocation &&
          query.accountCurrency &&
          query.paymentMethod
        ) {
          if (field.key === 'countryOrRegion') {
            field.defaultValue = query.bankLocation as string;
          }

          if (field.key === 'paymentMethod') {
            if (
              (query.bankLocation === 'CN' &&
                query.accountCurrency !== 'CNY') ||
              (query.bankLocation === 'AU' && query.accountCurrency !== 'AUD')
            ) {
              field.defaultValue = '';
            }
          }
        }

        if (query.recipientType && query.bankLocation) {
          if (query.bankLocation === 'CN' && field.key === 'paymentMethod') {
            field.options?.splice(0, 1);
          }
        }
      }
    }

    // initial
    if (!(query.recipientType && query.bankLocation)) {
      cloneData.data.steps[0].fields.splice(3);
      cloneData.data.steps.splice(1);
    }

    if (query.recipientType && query.bankLocation) {
      if (!query.paymentMethod) {
        cloneData.data.steps.splice(1);
      }
    }

    if (
      query.recipientType &&
      query.bankLocation &&
      query.accountCurrency &&
      query.paymentMethod
    ) {
      if (query.bankLocation === 'CN' && query.accountCurrency !== 'CNY') {
        cloneData.data.steps.splice(1);
      }
      if (query.bankLocation === 'AU' && query.accountCurrency !== 'AUD') {
        cloneData.data.steps.splice(1);
      }
    }

    res.end(JSON.stringify(cloneData));
  },
};
