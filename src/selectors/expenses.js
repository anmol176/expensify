import moment from 'moment';

/********/
//Using filters data to filter the data inside expenses array. Directly accessing the array from the store
//as state.expenses and state.filters are passed to it.
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
      // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
      //this one was for manipualting when the dates was in numbers (before react-dates library)
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
  
      return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
  };
  