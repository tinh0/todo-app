import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import TodoPage from './pages/todopage/todopage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='container'>
        <Switch>
          {this.state.currentUser ? (
            <Route exact path='/' component={() => <HomePage currentUser={this.state.currentUser}/>} />
          ) : (
            <Route exact path='/' component={SignInAndSignUpPage} />
          )}
          <Route path='/todo'  component={() => <TodoPage currentUser={this.state.currentUser}/>} />
        </Switch>
      </div>
    );
  }
}
