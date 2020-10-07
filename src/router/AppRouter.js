import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashbaordPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

//Edit route: <Route path="/edit/:id" component={EditExpensePage} />

const AppRouter = () =>{
    return(
        <div>
            <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/" component={ExpenseDashbaordPage} exact={true} />
                        <Route path="/create" component={AddExpensePage} />
                        <Route path="/edit/:id" component={EditExpensePage} />
                        <Route path="/help" component={HelpPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </BrowserRouter>
        </div>
    );
}

export default AppRouter;