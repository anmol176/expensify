import React from 'react';
import {connect} from 'react-redux';
import ExportListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


const ExpenseList = (props) => (
    
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExportListItem {...expense} key={expense.id}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};


/*First argument: call back function that we use to access only data that we need from redux store, 
we do not need all the data
Second argument: This becomes like our component rendered inside of HOC.
*/
export default connect(mapStateToProps)(ExpenseList);
