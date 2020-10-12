import React from 'react';
import './css/styles.css';
import 'react-dates/lib/css/_datepicker.css'
import './router/AppRouter';
import AppRouter from './router/AppRouter';



class App extends React.Component {

    render() {
        return (
            <div>
                <AppRouter/>
            </div>
        );
    };
}

export default App;

/*
const countReducer =  (state={count:0}, action) => {
    switch(action.type){
        case 'INCREMENT':
            const IncrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 0 
            return {
                count: state.count + IncrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count -1
            }
    }
}

const store = createStore();

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'DECREMENT'
});


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});


//const expenseOne = store.dispatch(addExpense({id:123, description:'rent', amount: 50, createdAt: 1000 }));
//const expenseTwo = store.dispatch(addExpense({id:246, description:'coffee', amount: 25, createdAt: 1100 }));
//const expenseTwoo = store.dispatch(addExpense2({id:1111, description:'trial', amount: 1000 }));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

//store.dispatch(setTextFilter('ffe'));
//store.dispatch(setTextFilter(''));

//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(1000));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));




const demoState = {
    expenses: [{
        id: 123,
        description: 'January Rent',
        note: 'This was the final payment for that address.',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //can be either amount or date
        startDate: undefined,
        endDate: undefined
    }
}


*/