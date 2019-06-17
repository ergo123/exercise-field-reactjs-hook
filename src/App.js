import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import {ExchangeRates} from './components/ExchangeRates/ExchangeRates';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {ToDo} from './components/ToDo/ToDo';
import {ChangeThrottled} from './components/ChangeThrottled/ChangeThrottled';
import {Map} from './components/Map/Map';
import {Incrementor} from './components/Redux/Incrementor';
import {Decrementor} from './components/Redux/Decrementor';
import {TikTak} from './components/TikTak/TikTak';


function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
                <Link className="App-link" to="/exchangeRates">Exchange rates</Link>
                -
                <Link className="App-link" to="/todo">To Do</Link>
                -
                <Link className="App-link" to="/throttle">Throttle</Link>
                -
                <Link className="App-link" to="/map">Map</Link>
                -
                <Link className="App-link" to="/redux">Redux</Link>
                -
                <Link className="App-link" to="/tiktak">Tik Tak</Link>
            </nav>
            <Provider store={store}>
                <Route path="/" exact render={() => (<h3>Choose link</h3>)} />
                <Route path="/exchangeRates" exact component={ExchangeRates} />
                <Route path="/todo/" component={ToDo} />
                <Route path="/throttle/" component={ChangeThrottled} />
                <Route path="/map" component={Map} />
                <Route path="/redux" render={() => (
                    <div>
                        <Incrementor/>
                        <Decrementor/>
                    </div>
                )} />
                <Route path="/tiktak" render={() => (
                    <div>
                        <TikTak />
                    </div>
                )} />
                {/*<Route path="/users/" component={Users} />*/}
            </Provider>

          </header>
        </div>
      </BrowserRouter>
  );
}

export default App;
