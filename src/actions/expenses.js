import { v4 as uuidv4 } from 'uuid';

export const addExpense = ({description = '', notes='', amount=0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE', 
    expense: {
        id: uuidv4(), 
        description,
        notes,
        amount,
        createdAt
    }
});

/* WITHOUT destructuring
const addExpense2 = (expense) => ({
    type: 'ADD_EXPENSE2',
    expenses: {
        id: expense.id,
        description: expense.description,
        notes: expense.notes,
        amount: expense.amount,
        createdAt: expense.createdAt
    }
});
*/
// Remove Expense

export const removeExpense = ({id}) => ({ //takes an object not destructuring
    type: 'REMOVE_EXPENSE', 
    id
});
// Edit expense

/*
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    expense: {
        id: id,
        updates
    }
});
*/

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
  });