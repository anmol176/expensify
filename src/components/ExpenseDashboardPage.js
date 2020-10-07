import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashbaordPage = () => {
    return (
        <div>
            <ExpenseListFilters/>
            <ExpenseList/>
        </div>
    )
};

export default ExpenseDashbaordPage;