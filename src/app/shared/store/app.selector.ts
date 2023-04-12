import { createFeatureSelector } from '@ngrx/store';
import { Appstate } from './appstate';

export const selectAppState = createFeatureSelector<Appstate>('appState');
export const selectCounter = (state: Appstate) => state.counter;
