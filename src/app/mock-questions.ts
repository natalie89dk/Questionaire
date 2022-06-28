import { Question } from './question';

const possibleValues: string[] =["black","blond","brown", "gray", "white","other color", "don't know"];

export const QUESTIONS: Question[] = [
  { id: 1, text: 'What is your favorite hobby', controlType: 1 },
  { id: 2, text: 'How old are you?', controlType: 1 },
  { id: 3, text: 'What is your hair color?', controlType: 2 , possibleValues},
  { id: 4, text: 'What is your height?', controlType: 1  },
  { id: 5, text: 'Do you have kids?', controlType: 3  },
  { id: 6, text: 'What is your favorite moovie?', controlType: 1  },
  { id: 7, text: 'Do you like animals?', controlType: 3  }
];