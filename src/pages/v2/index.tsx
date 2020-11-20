import React, { useState, useEffect, useCallback } from 'react';
import { IForm } from '@/types';
import { SimpleForm } from './SimpleForm';
import { Button } from 'antd';

const tokenUrl = '/proxy/v1/authentication/login';
const formUrl = '/proxy/v1/beneficiary_form_schemas/generate';

export default () => {
  const [token, setToken] = useState<string>('');
  const [formData, setFormData] = useState<IForm>();

  const getToken = useCallback(() => {
    fetch(tokenUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': '2gtlewe3ShSdUnwbqakwWg',
        'x-api-key':
          'f1d5c6f6738922175ea112c486477e0d27e5b559872faaf1979c811d9c61e01e68ee69c46b224fa3042172fb92c76b99',
      },
    })
      .then(res => res.json())
      .then(d => {
        setToken(d.token);
      });
  }, []);

  useEffect(() => {
    if (token) {
      fetch('/proxy/v1/beneficiary_form_schemas/generate', {
        method: 'post',
        body: JSON.stringify({
          key: 'newRecipient',
          param: {},
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(d => {
          setFormData(d);
        });
    }
  }, [token]);

  console.log(formData);

  const refetch = useCallback((params: { [key: string]: string }) => {
    fetch(formUrl, {
      method: 'post',
      body: JSON.stringify({
        key: 'newRecipient',
        param: params,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(d => {
        setFormData(d.data);
      });
  }, []);

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <div>
        <Button onClick={getToken}>get token</Button>
      </div>

      <div style={{ marginTop: '20px' }}>
        {formData ? <SimpleForm formData={formData} refetch={refetch} /> : null}
      </div>
    </div>
  );
};
