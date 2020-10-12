import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export  class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
      this.props.editExpense(this.props.expense.id, expense);
      this.props.history.push('/');
  }

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}


// We are using the props in this method to filter the data for the ID that was passed to the edit expense page.
const mapStateToProps = (state, props) => {
  return {
    //find method allows us to search the array for a given item with specific id
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)

    //Important: Andrew put the expense in the props through the connect function
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

/*
state.expenses.find((expense) => {
        console.log(`expense id of ${typeof(expense.id)} is ${expense.id == props.match.params.id}
        and props id is ${typeof(props.match.params.id)}`)
    })
*/