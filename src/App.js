import './App.css';
import {useState} from 'react';
import SubscriptionScreen from './components/SubscriptionScreen';
import TimesPrimeUI from './components/TimesPrimeUI';
import QRScreen from './components/QRScreen'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import CredentialsScreen from './components/Credentials';

function App() {

  const [loading, setLoading ] = useState(false);
  const [did, setDid] = useState("");
  const [credentials,setCredentials] =  useState([])


  const onSubscribe=()=>{
    setLoading(true)
  }
  return (
    <BrowserRouter>
    <div classname="App">
      <Switch>
        <Route path="/" exact>
        <TimesPrimeUI onSubscribe={onSubscribe}/>
        </Route>
        <Route path="/subscription" exact>
        <SubscriptionScreen did={did} setCredentials={setCredentials} setDid={setDid} loading={loading} setLoading={setLoading} issueCredentials/>
        </Route>
        <Route path="/scandid" exact>
        <QRScreen setDid={setDid}/>
        </Route>
        <Route path="/creds" exact>
        <CredentialsScreen credentials={credentials}/>
        </Route>
      </Switch>
      
  </div>
  </BrowserRouter>
  );
}

export default App;
