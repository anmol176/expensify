import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>     
    );
}

export default Header;

//<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>