// @ts-ignore
import Express from '@types/express';

// const formData = {
//   success: true,
//   message: 'OK',
//   data: {
//     type: 'STEP_FORM',
//     key: 'newRecipient',
//     label: 'New Recipient',
//     description: '',
//     steps: [
//       {
//         key: 'newRecipientAccount',
//         label: "Recipient's account",
//         description: 'How do you want to pay this recipient?',
//         hidden: false,
//         fields: [
//           {
//             type: 'RADIO',
//             key: 'recipientType',
//             label: 'Recipient Type',
//             description: 'type of recipient',
//             defaultValue: 'PERSONAL',
//             required: true,
//             tip: '',
//             rule: {},
//             options: [
//               {
//                 label: 'Business',
//                 value: 'BUSINESS',
//               },
//               {
//                 label: 'Personal',
//                 value: 'PERSONAL',
//               },
//             ],
//             refresh: true,
//           },
//           {
//             type: 'SELECT',
//             key: 'bankLocation',
//             label: 'Bank Location',
//             description: "The recipient's bank location",
//             defaultValue: 'AU',
//             required: true,
//             tip: '',
//             rule: {},
//             options: [
//               {
//                 label: 'China',
//                 value: 'CN',
//               },
//               {
//                 label: 'Australia',
//                 value: 'AU',
//               },
//             ],
//             refresh: true,
//           },
//           {
//             type: 'SELECT',
//             label: 'Account Currency',
//             key: 'accountCurrency',
//             defaultValue: 'AUD',
//             required: true,
//             tip: '',
//             description: 'The recipient’s bank account currency',
//             rule: {},
//             options: [
//               {
//                 label: 'China Yuan',
//                 value: 'CNY',
//               },
//               {
//                 label: 'Australian Dollar',
//                 value: 'AUD',
//               },
//             ],
//             refresh: true,
//           },
//           {
//             type: 'CARD_SELECT',
//             label: '',
//             key: 'paymentMethod',
//             defaultValue: 'BANK_TRANSFER',
//             required: true,
//             rule: {},
//             options: [
//               {
//                 label: 'Bank Transfer',
//                 key: 'bankTransfer',
//                 value: 'BANK_TRANSFER',
//                 extra: {
//                   description: [
//                     'Local bank transfer, which needs:',
//                     'BSB',
//                     'Account number',
//                   ],
//                   agreements: [
//                     {
//                       label: 'PROCESSING TIME',
//                       value: '0-1 business days',
//                     },
//                     {
//                       label: 'PAYMENT FEE',
//                       value: '$3 USD',
//                     },
//                     {
//                       label: 'PAYMENT LIMIT',
//                       value: 'No limit',
//                     },
//                   ],
//                 },
//               },
//             ],
//             refresh: true,
//           },
//         ],
//       },
//       {
//         label: "Recipient's information",
//         key: 'newRecipientInfo',
//         description: 'The bank account details of the recipient',
//         hidden: false,
//         fields: [
//           {
//             type: 'INPUT',
//             label: 'First name',
//             key: 'firstName',
//             // defaultValue: 'James',
//             defaultValue: '',
//             required: true,
//             tip: '',
//             placeholder: '',
//             description: '',
//             refresh: true,
//             rule: {
//               id: '167decfa-ed27-4304-bb43-be75a1a1a468',
//               $schema: 'http://json-schema.org/draft-07/schema#',
//               name: 'First Name Validation',
//               description: 'first name validation',
//               type: 'string',
//               required: true,
//               maxLength: 32,
//               minLength: 1,
//               pattern: '^([A-Za-z]{1,32})$',
//               apiRule: '',
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

const formData = {
  success: true,
  message: 'OK',
  data: {
    type: 'STEP_FORM',
    key: 'newRecipient',
    label: 'New Recipient',
    description: '',
    steps: [
      {
        key: 'newRecipientAccount',
        label: "Recipient's account",
        description: 'How do you want to pay this recipient?',
        hidden: false,
        fields: [
          {
            type: 'RADIO',
            key: 'recipientType',
            label: 'Recipient Type',
            description: 'type of recipient',
            defaultValue: '',
            required: true,
            tip: '',
            rule: {},
            options: [
              {
                label: 'Business',
                value: 'BUSINESS',
              },
              {
                label: 'Personal',
                value: 'PERSONAL',
              },
            ],
            refresh: true,
          },
          {
            type: 'SELECT',
            key: 'bankLocation',
            label: 'Bank Location',
            description: "The recipient's bank location",
            defaultValue: '',
            required: true,
            tip: '',
            rule: {},
            options: [
              {
                label: 'China',
                value: 'CN',
              },
              {
                label: 'Australia',
                value: 'AU',
              },
            ],
            refresh: true,
          },
          {
            type: 'SELECT',
            label: 'Account Currency',
            key: 'accountCurrency',
            defaultValue: '',
            required: true,
            tip: '',
            description: 'The recipient’s bank account currency',
            rule: {},
            options: [
              {
                label: 'China Yuan',
                value: 'CNY',
              },
              {
                label: 'Australian Dollar',
                value: 'AUD',
              },
            ],
            refresh: true,
          },
          {
            type: 'CARD_SELECT',
            label: '',
            key: 'paymentMethod',
            defaultValue: '',
            required: true,
            rule: {},
            options: [
              {
                label: 'Bank Transfer',
                key: 'bankTransfer',
                value: 'BANK_TRANSFER',
                extra: {
                  description: [
                    'Local bank transfer, which needs:',
                    'BSB',
                    'Account number',
                  ],
                  agreements: [
                    {
                      label: 'PROCESSING TIME',
                      value: '0-1 business days',
                    },
                    {
                      label: 'PAYMENT FEE',
                      value: '$3 USD',
                    },
                    {
                      label: 'PAYMENT LIMIT',
                      value: 'No limit',
                    },
                  ],
                },
              },
            ],
            refresh: true,
          },
        ],
      },
      {
        label: "Recipient's information",
        key: 'newRecipientInfo',
        description: 'The bank account details of the recipient',
        hidden: false,
        fields: [
          {
            type: 'INPUT',
            label: 'First name',
            key: 'firstName',
            defaultValue: '',
            required: true,
            tip: '',
            placeholder: '',
            description: '',
            refresh: true,
            rule: {
              id: '167decfa-ed27-4304-bb43-be75a1a1a468',
              $schema: 'http://json-schema.org/draft-07/schema#',
              name: 'First Name Validation',
              description: 'first name validation',
              type: 'string',
              required: true,
              maxLength: 32,
              minLength: 1,
              pattern: '^([A-Za-z]{1,32})$',
              apiRule: '',
            },
          },
        ],
      },
    ],
  },
};

export default {
  'GET /api/form': formData,

  'GET /api/v2/form': (req: Express.Request, res: Express.Response) => {
    console.log(req.query);
    const { query } = req;

    for (let step of formData.data.steps) {
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
      }
    }

    res.end(JSON.stringify(formData));
  },
};
