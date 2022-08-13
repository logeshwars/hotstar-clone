import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Login from "./components/Login";
import db,{auth,provider} from "./firebase";
import {useDispatch,useSelector} from "react-redux"
import {setMovies} from "./features/Movies/MoviesSlice"
import {selectEmail,selectname,selectphoto,removeUser,setUser} from "./features/userSlice/userSlice"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  const [login, showLogin] = useState(false);
  const dispatch=useDispatch();
  const signIn=()=>{
    auth.signInWithPopup(provider).then((result)=>{
      dispatch(setUser({
        name:result.user.displayName,
        email:result.user.email,
        photo:result.user.photoURL,
      }))
    })
  }
  const signOut=()=>{
    auth.signOut().then(()=>{
      dispatch(removeUser())
    }).catch((err)=>alert(err.message))
  }
   const name = useSelector(selectname);
   const email = useSelector(selectEmail);
   const photo = useSelector(selectphoto);

   console.log("name:",name)
  useEffect(()  =>  {
    console.log(login);
    db.collection("movies").onSnapshot((snapshot)  =>  {
      let tempMovies  =  snapshot.docs.map((doc)  =>  {
        return {  id:doc.id,...doc.data()  };
      });
      dispatch(setMovies(tempMovies));
      console.log("login:",login);
    });
  },  []);
  return (
    <div className="App">
      <Router>
        <Header fun={showLogin} />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {login && <Login fun={signIn} show={showLogin} />}
      </Router>
    </div>
  );
}

export default App;
