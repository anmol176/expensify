import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import toJSON from 'enzyme-to-json';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import { SingleDatePicker } from 'react-dates';

/*
Testing with external libraries.
we have the issue of the difference in time from when we ran to our expectation time and 
that is why we created moment.js mock library. __mock__ is importance in terms of the naming 
convension*/
test('should render Expense form correctly',() => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(toJSON(wrapper)).toMatchSnapshot()
});

test('should render Expense form with expenses data',() => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
});

/*Here we are testing mainly event objects like onclick and onchange

refer to enzyme docs how to simulate an event.

For the below example, we used wrapper.find to select the div element we want to test for 
and simulate method to indicate which method we are targetting to test like onSubmit or onchange

second argument in simulate is the default event methods we want to preset else the 
default behaviour will occour and also if we are using e.target then we set target to a value 
for which we can create within the test. (see case for description)

We can call the toMatchSnapshot how many ever times we want to test the state of the 
application before and after we do something.

The state method is used to access the state value in the component. This test is if 
the error string in the state object is greater than 0 then we have a error and the test case will
pass. The value that we set is in the second argument of the simulate function and we check that
with the value we pass into the expect function.
*/

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

/*Below test is for when the description changes and testing for that change. 
Because we have multiple inputs in our ExpenseForm, we need to determine which input we want 
to test and so we use the at function and pass an index value.
*/
test('should set description on input change', () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value);
})

//testing the note in the ExpenseForm
test('should set note in ExpenseForm on change',() => {
    const value = 'A new note';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value);
});

//should set amount if valid input, 23.50

test('should set amount if a valid input exists', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
});

//should not set amount if invalid input, 12.122

test('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('');
});

/*When we want to test for unsuccessful cases, we can use the above test case implementation 
but when testing for successful cases, we need to use something called test spies.
We need to make sure the onSubmit object is called with the correctly formatted information 
in the ExpenseForm.
*/

/*Test spies: fake functions created by jest and we can make assersions about them.
We can check if the fake function was called, if it was called with specific arguments.
Documentation: Jest framework, Expect API, 

*/

/*Steps:
1) Create the spy
2) Render express form.
3) Simulate the form submission.
*/

//.fn is a test spy. This gives us access to a brand new set of assersions.
// onSubmitSpy('Andrew');
// expect(onSubmitSpy).toHaveBeenCalledWith('Andrew', '20'); //this will fail becuase we expect 
// it to be called twice, but in the args it is called once (line 112).

//to make sure, the spy was called with the correct stuff thats why toHaveBeenLastCalledWith
    //inside the toHaveBeenCalledWith argument, we cannot just put expenses[0] cos over there we have id

test('should call onSubmit prop for valid form submissions',()=> {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });  
});

/*Test a prop inside of a component, like Single date picker prop in the ExpenseForm 
We can use the find function to find a component called singleDatePicker. We get the prop and call it
We use the props method from enzyme to check for a child prop inside of a component.
Prop([key]) -> to get a single prop
Prop() -> to get multiple props.
*/
test('should set new date on date change',() => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

//Should set calender focused onchange.

test('Should set calender focused onchange',() => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused);
})


