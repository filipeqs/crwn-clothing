import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={Shop} />
                <Route path="/signin" component={SignInAndSignUpPage} />
            </Switch>
        </div>
    );
}

export default App;
