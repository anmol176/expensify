import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

//Step 1: call a function 
//Step 2: Assert something about what comes back (ex using expect)

/*toEqual method will loop through the object or array and check the individual items if they are equal
toBe method to compare boolean, numbers or strings.*/

// const add = (a,b) => a+b;
// const generateGreeting = (name) => `Hello ${name}`

// test('should add two numbers', () => {
//     const result = add(3,4);
//     expect(result).toBe(7);

//     // if(result!==7) {
//     //     throw new Error(`you added 4 and 3. The reuslt was ${result}. Expect 7`)
//     // }
// });

// /*To pass an argument from the Command line down to the script, we have to add two dash in between 
// the command and the command that comes after. Example: npm test -- --watch, this is the same as
// in the package.json file, in scripts we have, "test": "jest --watch" (--watch is to watch for 
// changes without us having to run the jest test command everytime)
// */

// test(`should greet`, () => {
//     const result = generateGreeting('Anmol');
//     expect(result).toBe('Hello Anmol');
// })


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

//setup test case
//call edit expense 
//make an assertion

test('should setup edit expense action object', ()=> {
    const action = editExpense('123', {note: 'a new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: 'a new note'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Telcom bill', 
        amount: 100, 
        createdAt: 1000, 
        notes: 'august bill' 
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData, 
            id: expect.any(String)
        } 
    });
});


test('should setup add expense action object with default values', () => {
    const expenseData = {
        description: '', 
        notes: '', 
        amount: 0, 
        createdAt: 0
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
    
    
})
