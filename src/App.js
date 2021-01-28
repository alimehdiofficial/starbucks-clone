import React, { useEffect } from 'react'
import './App.css'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import { auth } from './firebase'
import Menu from './Menu'
import { Footer } from './Footer'
import FeaturedPage from './FeaturedPage'
import { Fade } from 'react-awesome-reveal'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route exact path='/account/signin'>
            {user ? <Redirect to='/menu' /> : <Login />}
          </Route>
          <Route exact path='/account/create'>
            {user ? <Redirect to='/menu' /> : <Signup />}
          </Route>
          <Route exact path='/menu'>
            {!user ? (
              <Redirect to='/account/signin' />
            ) : (
              <>
                <Header menuPage />
                <Menu />
              </>
            )}
          </Route>
          <Route exact path='/menu/featured'>
            <Header />
            <FeaturedPage />
            <Fade>
              <Footer />
            </Fade>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
