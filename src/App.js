import './App.css';

// import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Form from './components/Form';


function App() {

  return (
    <>
      <Router>
      <Switch>
        <Route exact path = '/' >
          <Form/>
        </Route>
      </Switch>
      </Router>
 
         
    </>
  );
}

export default App;
