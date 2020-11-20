export const formData = {
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
                label: 'CNY - Chinese Yuan',
                value: 'CNY',
              },
              {
                label: 'AUD - Australian Dollar',
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
              {
                label: 'SWIFT',
                key: 'SWIFT',
                value: 'SWIFT',
                extra: {
                  description: [
                    'Local bank transfer, which needs:',
                    'SWIFT code',
                    'Account number',
                  ],
                  agreements: [
                    {
                      label: 'PROCESSING TIME',
                      value: '0-3 business days',
                    },
                    {
                      label: 'PAYMENT FEE',
                      value: '$10 USD',
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
            rule: {
              $id: '167decfa-ed27-4304-bb43-be75a1a1a468',
              $schema: 'http://json-schema.org/draft-07/schema#',
              type: 'string',
              maxLength: 32,
              minLength: 1,
              pattern: '^([A-Za-z]{1,32})$',
            },
          },
          {
            type: 'SELECT',
            label: 'Country or region',
            key: 'countryOrRegion',
            defaultValue: 'AU',
            required: true,
            tip: '',
            description: '',
            rule: {},
            options: [
              {
                label: 'China',
                value: 'CN',
              },
              {
                label: 'Australian',
                value: 'AU',
              },
            ],
            refresh: true,
          },
          {
            type: 'INPUT',
            label: 'Address',
            key: 'address',
            defaultValue: '',
            required: true,
            tip: '',
            placeholder: '',
            description:
              "Recipient's Address(Should not be a PO or GPO box address)",
            rule: {},
            refresh: true,
          },
          {
            type: 'INPUT',
            label: 'City',
            key: 'city',
            defaultValue: '',
            required: true,
            tip: '',
            placeholder: '',
            description: '',
            rule: {},
            refresh: true,
          },
          {
            type: 'INPUT',
            label: 'State',
            key: 'state',
            defaultValue: '',
            required: true,
            tip: '',
            placeholder: '',
            description: '',
            rule: {},
            refresh: true,
          },
        ],
      },
    ],
  },
};
