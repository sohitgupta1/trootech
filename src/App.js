
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoute from './route'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div >
    <Provider store={store}>
      <AppRoute />
    </Provider>
   
    </div>
  );
}

export default App;
