import React from 'react';
import './App.css';
import Income from'./components/income';
import Expenselist from './components/expenselist';
import Addtransaction from'./components/Addtransaction';
import {GlobalProvider} from './context/Globalstate';

function App() {
  return (
    <div className="App">
    < GlobalProvider>

     <h2> Expense Manager</h2>
    
     <Income/>
     <Expenselist/>
     <Addtransaction/>
    </GlobalProvider>
</div>
  );
}

export default App;
