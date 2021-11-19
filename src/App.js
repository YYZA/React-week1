import React from "react";
import './App.css';
import Home from './Home';
import Start from './Start';
import{Route} from "react-router-dom"
import Tues from './Tues';
import Wednes from './Wednes';
import Thurs from './Thurs'
import Friday from './Friday'
import Satur from './Satur'
import Sun from './Sun'




function App() {
  return (
    <div className="App" >
      <Route path ="/" exact>
        <Home  />
      </Route>
      <Route path ="/start" >
        <Start/>
      </Route>
      <Route path ="/tues" >
        <Tues/>
      </Route>
      <Route path ="/wednes" >
        <Wednes/>
      </Route>
      <Route path ="/thurs" >
        <Thurs/>
      </Route>
      <Route path ="/friday" >
        <Friday/>
      </Route>
      <Route path ="/satur" >
        <Satur/>
      </Route>
      <Route path ="/sun" >
        <Sun/>
      </Route>
    </div>
  );
}



export default App;