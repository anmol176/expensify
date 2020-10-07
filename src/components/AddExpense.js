import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => {
    return (
        <div>
            This is from my add component
            <ExpenseForm onSubmit={(expense) =>{
                props.dispatch(addExpense(expense)); //the action creator takes the 4 values from extense
                props.history.push('/');
            }}/>
        </div>
    )
};



export default connect()(AddExpensePage);