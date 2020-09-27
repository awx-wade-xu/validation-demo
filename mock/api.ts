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
        if (
          query.bankLocation === 'CN' &&
          field.key === 'accountCurrency' &&
          !query[field.key]
        ) {
          field.defaultValue = 'CNY';
        }

        if (query[field.key]) {
          field.defaultValue = query[field.key] as string;
        }

        if (
          query.recipientType &&
          query.bankLocation &&
          query.accountCurrency &&
          query.paymentMethod
        ) {
          if (field.key === 'countryOrRegion') {
            field.defaultValue = 'CN';
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
      cloneData.data.steps[1].hidden = false;
    }
    res.end(JSON.stringify(cloneData));
  },
};
