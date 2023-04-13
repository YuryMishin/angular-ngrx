import { ActionReducerMap } from '@ngrx/store';

import { Appstate } from '../../../shared/store/appstate';
import { counterReducer } from './counter.reducer';

export const reducers: ActionReducerMap<Appstate> = {
  counter: counterReducer,
};
