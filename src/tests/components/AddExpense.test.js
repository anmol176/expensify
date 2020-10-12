import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpense';
import toJSON from 'enzyme-to-json';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


let addExpense, history, wrapper;
/*Jest lifecycle methods which are global functions that help us to reuse code 
BeforeEach will run before each test case so by putting duplicate code inside, we can minimise the 
number of repititions*/

beforeEach(() => {
    addExpense = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>)
});


/*Suppose we are dispatching a redux action creator in the component and we want to test that 
component then we should call the mapDispatchToProps function to simplify that function call
which will make it easier for us to do the testing. */

/*We make use of spies for testing the add expense component*/

test('should render Add expense page correctly',() => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle onSubmit',() => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});





