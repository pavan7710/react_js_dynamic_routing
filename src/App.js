import React from 'react'
import Form from './components/Form'
import Navbar from './components/navbar'
import { Switch , Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Posts  from './components/Details'
import Postsdetail from './components/Postdetail'

const App = () => {
  return (
   <div className="row container p-5">
     <div className="col-lg-6">
       <Navbar/>
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/form" component={Form}/>
         <Route path= "/about" component={About}/>
         <Route exact path="/posts"  component={Posts}/>
          <Route path="/posts/:id" component={Postsdetail} />
       </Switch>
     </div>
   </div>
  )
}

export default App
