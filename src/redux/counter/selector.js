import { createSelector } from 'reselect';

export const selectCounter = state => state.counter;

export const selectCount = createSelector([selectCounter], counter => {
    return counter.count;
});

export const selectTitle = createSelector([selectCounter], counter => {
    return counter.title;
});