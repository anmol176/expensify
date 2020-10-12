import filtersReducer from '../../reducers/filtersReducer';
import moment from 'moment';
//first time when redux runs the state, it returns type @@INIT as the action
test('should return the text state', () => {
    const state = filtersReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })

})

test('should set sortBy to amount', ()=> {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');

})

test('should sort by to date',() => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const action = {'type':'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

//should set text filter
test('should set text filter', () => {
    const text = 'This is my filter';
    const action = {'type':'SET_TEXT_FILTER', text}
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
})


//should set start date filter

test('should set start date filter', () => {
    const startDate = moment();
    const action = {'type':'SET_START_DATE', date: startDate}
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate)
});

//should set end date filter

test('should set end date filter', () => {
    const endDate = moment();
    const action = {'type':'SET_END_DATE', date: endDate}
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate)
});