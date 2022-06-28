import { ControlType } from './controlType';

export interface Question {
    id: number;
    text: string;
    controlType: ControlType;
    possibleValues?: string[];
  }