import expensesReducer from '../../reducers/expenseReducer';
import expenses from '../fixtures/expenses'; 

// if we are testing for default, the state value that we pass can be undefined and type @@INIT
test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
}); 

//2 test cases for remove: provide an ID that does exist and provide and ID that does not exist.

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

//should add an expense 

test('should add an expense', () => {
    const expense = {
        id: '109',
        description: 'laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state =expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});

//should edit an expense 

test('should edit an expense', () => {
    const amount  = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount); 
})

//should not edit expense if expense is not found.

test('should not edit an expense if expense id is not found', () => {
    const amount  = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses); 
})
