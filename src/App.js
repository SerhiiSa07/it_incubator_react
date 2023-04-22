import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Switch} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/dialogs' render={() => <Dialogs/>}/>
                        <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                        <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
