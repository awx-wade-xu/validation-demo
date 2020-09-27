import React, { useState, useEffect, useCallback } from 'react';
import { IStepForm } from '@/types';
import { StepForm } from './StepForm';

export default () => {
  const [formData, setFormData] = useState<IStepForm>();

  useEffect(() => {
    fetch('/api/v2/form')
      .then(res => res.json())
      .then(d => {
        setFormData(d.data);
      });
  }, []);

  const refetch = useCallback((params: { [key: string]: string }) => {
    let url = '/api/v2/form';
    Object.keys(params).forEach((k, index) => {
      if (index === 0) {
        url += `?${k}=${params[k]}`;
      } else {
        url += `&${k}=${params[k]}`;
      }
    });

    fetch(url)
      .then(res => res.json())
      .then(d => {
        setFormData(d.data);
      });
  }, []);

  if (!formData) return null;

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      {formData.type === 'STEP_FORM' ? (
        <StepForm formData={formData} refetch={refetch} />
      ) : null}
    </div>
  );
};
