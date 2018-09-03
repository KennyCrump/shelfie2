import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

export default 
<Switch>
    <Route exact path='/' component={Dashboard}/>
    <Route path='/newItem' component={Form} />
    <Route path='/editItem/:id' component={Form} />
</Switch>