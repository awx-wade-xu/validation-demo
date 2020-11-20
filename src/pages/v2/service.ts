const tokenUrl = '/proxy/v1/authentication/login';

export const getToken = fetch(tokenUrl, {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
    'x-client-id': '2gtlewe3ShSdUnwbqakwWg',
    'x-api-key':
      'f1d5c6f6738922175ea112c486477e0d27e5b559872faaf1979c811d9c61e01e68ee69c46b224fa3042172fb92c76b99',
  },
}).then(res => res.json());
