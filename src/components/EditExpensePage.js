import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        
      <div>
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(editExpense(props.expense.id, expense));
            props.history.push('/');
          }}
        />
        <button onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/');
        }}>Remove</button>
      </div>
    );
  };

// We are using the props in this method to filter the data for the ID that was passed to the edit expense page.
const mapStateToProps = (state, props) => {
    return {
        //find method allows us to search the array for a given item with specific id
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
        
        //Important: Andrew put the expense in the props through the connect function
    }
}

export default connect(mapStateToProps)(EditExpensePage);

/*
state.expenses.find((expense) => {
        console.log(`expense id of ${typeof(expense.id)} is ${expense.id == props.match.params.id}
        and props id is ${typeof(props.match.params.id)}`)
    })
*/