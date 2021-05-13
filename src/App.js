import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Books from './components/Books/Books';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Books />
      </main>
    </Fragment>

  );
}
 
export default App;