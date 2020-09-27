export interface IRule {
  id: string;
  $schema: string;
  name: string;
  description: string;
  type: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern: string;
  apiRule: string;
}

export interface IExtra {
  description: string[];
  agreements: IOption[];
}

export interface ICardSelectOption {
  label: string;
  value: string;
  key: string;
  extra: IExtra;
}

interface IOption {
  label: string;
  value: string;
}

interface IFieldCommon {
  key: string;
  label: string;
  description: string;
  defaultValue: string;
  placeholder?: string;
  tip?: string;
  refresh?: boolean;
  required?: boolean;
  rule?: IRule;
}

interface IInput extends IFieldCommon {
  type: 'INPUT';
}
interface IRadio extends IFieldCommon {
  type: 'RADIO';
  options: IOption[];
}
interface ISelect extends IFieldCommon {
  type: 'SELECT';
  options: IOption[];
}
export interface ICardSelect extends IFieldCommon {
  type: 'CARD_SELECT';
  options: ICardSelectOption[];
}

type IField = IInput | IRadio | ISelect | ICardSelect;

export interface IFormStep {
  key: string;
  label: string;
  description: string;
  hidden: boolean;
  fields: IField[];
}

export interface IStepForm {
  type: 'STEP_FORM';
  key: string;
  label: string;
  description: string;
  steps: IFormStep[];
}
