import Navbar from './components/Navbar';
import ContactList from './container/ContactList';
import AddContact from './container/AddContact';
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./store";
import UpdateContact from './container/UpdateContact';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ContactList}/>
            <Route exact path="/contacts/add" component={AddContact}/>
            <Route exact path="/contacts/edit/:id" component={UpdateContact}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
