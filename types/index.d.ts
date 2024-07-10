/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
import * as React from 'react';

// Base Element type
type BaseElement = {
  id: string;
  element:
  | "Header Text"
  | "Label"
  | "Paragraph"
  | "Line Break"
  | "Dropdown"
  | "Tags"
  | "Checkboxes"
  | "Multiple Choice"
  | "Text Input"
  | "Number Input"
  | "Multi-line Input"
  | "Two Column Row"
  | "Three Column Row"
  | "Multi Column Row"
  | "Image"
  | "Rating"
  | "Date"
  | "Signature"
  | "Web site"
  | "Fieldset"
  | "File Attachment"
  | "Range"
  | "Camera";
  showDescription?: boolean;
  required: boolean;
  canHaveAlternateForm: boolean;
  canHaveDisplayHorizontal: boolean;
  canHaveOptionCorrect: boolean;
  canHaveOptionValue: boolean;
  canHavePageBreakBefore: boolean;
  canPopulateFromApi: boolean;
  text: string;
};

// Static Element type
export type StaticElement = {
  bold: boolean;
  content: string;
  inline?: boolean;
  italic: boolean;
  static: true;
};

// FormBuilder Input type
export type FormBuilderInput = {
  canHaveAnswer?: true;
  field_name: string;
  label: string;
};

// Option type
export type Option = {
  key: string;
  label?: string;
  text: string;
  value: string;
};

// Selectable Element type
export type SelectableElement = {
  options: Option[];
} & FormBuilderInput;

// Image Element type
export type ImageElement = {
  field_name: string;
  src: string;
};

// Date Element type
export type DateElement = {
  dateFormat: string;
  defaultToday: boolean;
  readOnly: boolean;
  showTimeSelect: boolean;
  showTimeSelectOnly: boolean;
  showTimeInput: boolean;
  timeFormat: string;
} & FormBuilderInput;

// Range Element type
export type RangeElement = {
  max_label: string;
  max_value: number;
  min_label: string;
  min_value: number;
} & FormBuilderInput;

// File Element type
export type FileElement = {
  _href: string;
  file_path: string;
  field_name: string;
} & StaticElement;

// Website Element type
export type WebsiteElement = {
  href: string;
} & StaticElement;

// Signature Element type
export type SignatureElement = {
  readOnly: boolean;
} & FormBuilderInput;

// TaskData type
export type TaskData = BaseElement &
  (
    | StaticElement
    | FormBuilderInput
    | SelectableElement
    | ImageElement
    | DateElement
    | RangeElement
    | WebsiteElement
    | FileElement
    | SignatureElement
    // eslint-disable-next-line no-use-before-define
    | FormBuilderLayout
  );

// FormBuilder Layout type
export type FormBuilderLayout = {
  isContainer: true;
  childItems: TaskData[];
  field_name: string;
};

// FormBuilder Post Data type
export type FormBuilderPostData = {
  task_data: TaskData[];
};

// Toolbar Item type
export type ToolbarItem = {
  key: string;
  name: string;
  static: boolean;
  icon: string;
  content: string;
};

// FormBuilder Props interface
export interface FormBuilderProps {
  data?: FormBuilderPostData;
  toolbarItems?: ToolbarItem[];
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  files?: any[];
  url?: string;
  showCorrectColumn?: boolean;
  show_description?: boolean;
  onLoad?: () => Promise<FormBuilderPostData>;
  onPost?: (data: FormBuilderPostData) => void;
  saveUrl?: string;
  saveAlways?: boolean;
  editMode?: boolean;
  renderEditForm?: (props: BaseElement) => React.ReactNode;
}

// ReactFormBuilder component
export const ReactFormBuilder: React.FC<FormBuilderProps>;

// FormGenerator OnSubmitParams interface
export interface FormGeneratorOnSubmitParams {
  id: number;
  name: string;
  custom_name: string;
  value: string | string[];
}

// FormGenerator Props interface
export interface FormGeneratorProps {
  form_action: string;
  form_method: string;
  action_name?: string;
  onBlur?: (info: FormGeneratorOnSubmitParams[]) => void;
  onSubmit?: (info: FormGeneratorOnSubmitParams[]) => void;
  onChange?: (info: FormGeneratorOnSubmitParams[]) => void;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any[];
  back_action?: string;
  back_name?: string;
  task_id?: number;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  answer_data?: any[];
  authenticity_token?: string;
  hide_actions?: boolean;
  skip_validations?: boolean;
  display_short?: boolean;
  read_only?: boolean;
  variables?: Record<any, any>;
  // eslint-disable-next-line no-undef
  submitButton?: JSX.Element;
}

// ReactFormGenerator component
export class ReactFormGenerator extends React.Component<FormGeneratorProps> { }

// ActionType type
export type ActionType = "load" | "updateOrder" | "delete";

// ElementStore class
// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ElementStore {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  static dispatch: (type: ActionType, data: any) => void;
}

// Registry class
// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class Registry {
  static register: (name: string, component: React.ReactNode) => void;

  static list: () => string[];

  static get: (name: string) => React.ReactNode;
}
