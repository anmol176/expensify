import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({ description: 'Gas bill', createdAt:1000, amount: 500 }));
store.dispatch(addExpense({description: 'rent', amount:109500}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}><App/></Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));

/*
<Provider store={store}><App/></Provider>
HOC:
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const adminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private Info. Please do not share</p>}
            <WrappedComponent {...props} />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>

            {props.isLoggedIn ? (
                 <WrappedComponent {...props} />
            ) : (
                    <p>Please login to view the Info</p>
                )


            }

        </div>
    )
};

const AdminInfo = adminWarning(Info); //ADMIN INFO BECOMES THE HOC
const AuthInfo = requireAuthentication(Info);
// <AuthInfo isLoggedIn={true} info="Here are the details" />


USE STATE HOOK:

const Trial = (props) => {
    
    
    const [count, setCount] = useState(props.initialCount)

    return(
        <div>
            <p>The current count is {count}</p>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
pass to render => <Trial initialCount={0}/>

const NotesApp = () => {

    const [notes, setNotes] = useState([]);
    const [title,setTitle] = useState('')
    const [body, setBody] = useState('');
    const [open, setProperty] = useState(false);
    console.log(open);

    const addNote = (e) => {
        console.log("clicked")
        e.preventDefault();
        setNotes([
            ...notes, {title, body}
        ]);
        setTitle('');
        setBody('');
    }

    const removeNote = (title) => (
        setNotes(notes.filter((note) => note.title !== title))
    )

    return (
        <div>
            <h3>Notes</h3>
            {notes.map((note) => (
                <div key={note.title}>
                    <p>{note.title}</p>
                    <p>{note.body}</p>
                    <button onClick={() => removeNote(note.title)}>Remove</button>
                </div>
            ))}
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input value={body} onChange={(e) => setBody(e.target.value)}/>
                <button>Add Note</button>
            </form>
        </div>
    )
}


*/