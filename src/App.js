import React from 'react'
import Signin from './Signin/Signin'
import Signup from './Signup/Signup'
import Dashboard from './Dashboard/Dashboard'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      
      <Switch>
        <Route exact path='/' component={Signin}/>
        <Route exact path='/signup' component={ Signup }/>
        <Route exact path='/dashboard' component={Dashboard}/>
     </Switch>
      
    </div>
  )
}

export default App
