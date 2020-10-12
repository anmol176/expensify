import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        /*Here we are checking for 2 things: 
        1) We are getting the props from the editExpensePage which is passing the expense object. if the expense
        object does not exist, then we show the default values (empty strings) or we show the existing values 
        if the expense object was passed down.
        Check if props.expense exists if it does we use the description from that expense object else empty or 0
        */
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description })) //this is an object.
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({
                error: 'Please provide description and amount'
            }))
        } else {
            //code to clear the error state if there are no errors:
            this.setState(() => ({
                error: ''
            }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(), //this.state.createdAt is a moment object but by
                //calling valueOf, we are essentially changing it to a timestamp (in miliseconds)
                note: this.state.note
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description}
                        onChange={this.onDescriptionChange} />

                    <input type="text" placeholder="Amount" value={this.state.amount}
                        onChange={this.onAmountChange} />

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea placeholder="Add a note for your expense" value={this.state.note}
                        onChange={this.onNoteChange}></textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

/*
<SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    />
*/