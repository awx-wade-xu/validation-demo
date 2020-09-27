import { Rule as IFormRule, RuleObject } from 'antd/lib/form';
import { IRule } from '@/types';

export const getValidationMap = (rule: IRule, formRule: IFormRule) => {
  const finalRules = [];

  const map = {
    required: 'required',
    enum: 'enum',
    maximum: 'max',
    minimum: 'min',
    pattern: 'pattern',
  };

  if (rule.required) {
  }
};
