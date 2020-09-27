import React, { useState, useEffect, memo, FC, useCallback } from 'react';
import { Button, Card, Form, Input, Radio, Select } from 'antd';
import { IStepForm } from '@/types';
import { CardSelect } from './FormItems/CardSelect';

interface IProps {
  formData: IStepForm;
  refetch: (params: { [key: string]: string }) => void;
}

const FormItem = Form.Item;
const SelectOption = Select.Option;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

export const StepForm: FC<IProps> = memo(({ formData, refetch }) => {
  const [form] = Form.useForm();

  const onValuesChange = useCallback(
    (changedValues, values) => {
      let field;

      for (let step of formData.steps) {
        const { fields } = step;
        let found = false;
        for (let f of fields) {
          if (f.key === Object.keys(changedValues)[0]) {
            field = f;
            found = true;
            break;
          }
        }

        if (found) break;
      }

      if (field) {
        // form.resetFields();
        refetch(values);
      }
      console.log(changedValues, values);
    },
    [formData],
  );

  const onFieldsChange = useCallback((changedFields, fields) => {
    // console.log(changedFields, fields);
  }, []);

  return (
    <Form
      key={formData.key}
      form={form}
      {...formItemLayout}
      onValuesChange={onValuesChange}
      onFieldsChange={onFieldsChange}
      // validateTrigger={false}
    >
      {formData.steps.map((stepData, index) => {
        const { fields, hidden } = stepData;

        if (hidden) {
          return null;
        }

        return (
          <Card key={index}>
            {fields.map(filed => {
              switch (filed.type) {
                case 'INPUT':
                  return (
                    <FormItem
                      name={filed.key}
                      key={filed.key}
                      label={filed.label}
                      rules={[
                        {
                          required: !!filed.required,
                        },
                      ]}
                      initialValue={filed.defaultValue}
                    >
                      <Input placeholder={filed.placeholder} />
                    </FormItem>
                  );
                case 'RADIO':
                  return (
                    <FormItem
                      name={filed.key}
                      key={filed.key}
                      label={filed.label}
                      rules={[
                        {
                          required: !!filed.required,
                        },
                      ]}
                      initialValue={filed.defaultValue}
                    >
                      <Radio.Group>
                        {filed.options.map(option => {
                          return (
                            <Radio value={option.value} key={option.value}>
                              {option.label}
                            </Radio>
                          );
                        })}
                      </Radio.Group>
                    </FormItem>
                  );
                case 'SELECT':
                  return (
                    <FormItem
                      name={filed.key}
                      key={filed.key}
                      label={filed.label}
                      rules={[
                        {
                          required: !!filed.required,
                        },
                      ]}
                      initialValue={filed.defaultValue}
                    >
                      <Select>
                        {filed.options.map(option => {
                          return (
                            <SelectOption
                              value={option.value}
                              key={option.value}
                            >
                              {option.label}
                            </SelectOption>
                          );
                        })}
                      </Select>
                    </FormItem>
                  );
                case 'CARD_SELECT':
                  return (
                    <FormItem
                      name={filed.key}
                      key={filed.key}
                      label={filed.label}
                      style={{ marginLeft: 150 }}
                      rules={[
                        {
                          required: !!filed.required,
                        },
                      ]}
                      initialValue={filed.defaultValue}
                    >
                      <CardSelect filed={filed} />
                    </FormItem>
                  );
                default:
                  return null;
              }
            })}
          </Card>
        );
      })}
      <Button type="primary" style={{ marginTop: 20, float: 'right' }}>
        submit
      </Button>
    </Form>
  );
});
