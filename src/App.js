import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import CreateWallet from './components/dashboard/dashboardoperations/CreateWallet';
import NotFound from './components/shared/NotFound';
import { Provider } from 'react-redux';
import store from './Store';
import UpdateWallet from './components/dashboard/dashboardoperations/UpdateWallet';
import Transaction from './components/transactions/Transaction';
import AddTransaction from './components/transactions/transactionoperations/AddTransaction';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path='/' component={Nav} />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/createWallet' component={CreateWallet} />
          <Route exact path='/updateWallet/:id' component={UpdateWallet} />
          <Route exact path='/transactions/:id' component={Transaction} />
          <Route exact path='/trns/add/:id' component={AddTransaction} />
          <Route path='/' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
