import React, {
  useState,
  useEffect,
  memo,
  FC,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import { Button, Card, Form, Input, Radio, Select } from 'antd';
import { IStepForm, IField } from '@/types';
import { CardSelect } from './FormItems/CardSelect';
import Ajv from 'ajv';

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
  // remember defaultValue of from, will be update fresh field
  const formValuesRef = useRef<any>({});

  useMemo(() => {
    let data: any = {};
    formData.steps.forEach(step => {
      step.fields.forEach(field => (data[field.key] = field.defaultValue));
    });

    Object.keys(data).forEach(k => {
      const v = data[k];
      let changedValues: any = {};

      if (v !== formValuesRef.current[k]) {
        changedValues[k] = v;
      }

      if (Object.keys(changedValues).length > 0) {
        form.setFieldsValue(changedValues);
        formValuesRef.current = data;
      }
    });
  }, [formData]);

  const onValuesChange = useCallback(
    (changedValues, values) => {
      let field: IField | undefined;
      // one change one time
      const changedKey = Object.keys(changedValues)[0];

      formData.steps.forEach(step => {
        step.fields.forEach(innerField => {
          if (innerField.key === changedKey) {
            field = innerField;
          }
        });
      });

      if (field && field.refresh) {
        formValuesRef.current = values;

        let isClientValid = true;
        const changedValue = changedValues[changedKey];
        if (changedValue) {
          if (field?.rule?.$id) {
            const ajv = new Ajv();
            const validate = ajv.compile(field?.rule);
            const valid = validate(changedValue);
            if (!valid) {
              isClientValid = false;
            }
          }
        } else {
          if (field.required) {
            isClientValid = false;
          }
        }

        if (isClientValid) {
          refetch(values);
        }
      }
    },
    [formData],
  );

  return (
    <Form
      key={formData.key}
      form={form}
      {...formItemLayout}
      onValuesChange={onValuesChange}
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
                        () => ({
                          validator(rule, value) {
                            if (filed.rule?.$id) {
                              const ajv = new Ajv();
                              const validate = ajv.compile(filed.rule);
                              const valid = validate(value);
                              if (!valid) {
                                const message = validate.errors
                                  ? validate.errors[0].message
                                  : '';

                                return Promise.reject(message);
                              }
                            }

                            return Promise.resolve();
                          },
                        }),
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
                        () => ({
                          validator(rule, value) {
                            if (filed.rule?.$id) {
                              const ajv = new Ajv();
                              const validate = ajv.compile(filed.rule);
                              const valid = validate(value);
                              if (!valid) {
                                const message = validate.errors
                                  ? validate.errors[0].message
                                  : '';

                                return Promise.reject(message);
                              }
                            }

                            return Promise.resolve();
                          },
                        }),
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
                        () => ({
                          validator(rule, value) {
                            if (filed.rule?.$id) {
                              const ajv = new Ajv();
                              const validate = ajv.compile(filed.rule);
                              const valid = validate(value);
                              if (!valid) {
                                const message = validate.errors
                                  ? validate.errors[0].message
                                  : '';

                                return Promise.reject(message);
                              }
                            }

                            return Promise.resolve();
                          },
                        }),
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
                        () => ({
                          validator(rule, value) {
                            if (filed.rule?.$id) {
                              const ajv = new Ajv();
                              const validate = ajv.compile(filed.rule);
                              const valid = validate(value);
                              if (!valid) {
                                const message = validate.errors
                                  ? validate.errors[0].message
                                  : '';

                                return Promise.reject(message);
                              }
                            }

                            return Promise.resolve();
                          },
                        }),
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
