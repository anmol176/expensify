const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                //console.log(expense);
                return expense.id !== action.id
            }); 
        
        case 'EDIT_EXPENSE': 
            return state.map((expenses) => {
                if(expenses.id === action.id) {
                    return {
                        ...expenses, ...action.updates
                    };
                } else {
                    return expenses;
                }
            });
        /*
        case 'ADD_EXPENSE2':
            return [...state, action.expenses]

            //expense.id is from the expense stored in the state array.Filter will also remove everything else except for true condition.
             STATE WAS CHANGED
            return state.filter((expense) => {
                if (expense.id === action.expense.id) {
                    return expense.amount = action.expense.amount
                }
            });
            */

            
        default: 
        return state
    }
};