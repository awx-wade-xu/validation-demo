import React, { useState, useEffect, memo, FC, useCallback } from 'react';
import { Button, Card, Descriptions } from 'antd';
import { ICardSelect } from '@/types';

interface IProps {
  filed: ICardSelect;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
export const CardSelect: FC<IProps> = memo(({ filed, value, onChange }) => {
  const { options } = filed;

  const onClick = (v: string) => {
    return () => {
      let finalV = v;
      if (value === v) {
        finalV = '';
      }

      if (onChange) {
        onChange(finalV);
      }
    };
  };

  return (
    <div>
      {options.map(option => {
        const { value: optionValue, extra } = option;
        return (
          <Card key={optionValue} style={{ width: '600px' }}>
            <Descriptions title={optionValue} layout="vertical">
              {extra.agreements.map(agreement => {
                return (
                  <Descriptions.Item
                    label={agreement.label}
                    key={agreement.label}
                  >
                    {agreement.value}
                  </Descriptions.Item>
                );
              })}
            </Descriptions>

            <Button
              onClick={onClick(optionValue)}
              type="primary"
              style={{ float: 'right' }}
            >
              {value === optionValue ? 'Change' : 'Select'}
            </Button>
          </Card>
        );
      })}
    </div>
  );
});
