import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Logout from "./component/Logout"
import DND from "./component/DND"
import Userpage from "./component/Userpage"


class Home extends React.Component{

    doRedirect=()=>{
        let loggedIn=localStorage.getItem("user");
        console.log("done")
        if(loggedIn){
             return < Redirect to="/userpage"/>
        }
        else{
         return < Redirect to="/"/>
        }
   }



    render(){
        return (
            <Router>
            <div>
            </div>
            <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/userpage" component={Userpage}/>
            <Route path="/logout" component={Logout}/>
            <Route component={DND}/>
             {this.doRedirect()}
            
            </Switch>
            </Router>

        )
    }
}
 

ReactDOM.render(<Home/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
