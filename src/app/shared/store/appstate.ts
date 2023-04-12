import { CounterState } from '../../components/counter/store/counter.reducer';

export interface Appstate {
    apiStatus: string;
    apiResponseMessage: string;
    counter: CounterState;
  }
