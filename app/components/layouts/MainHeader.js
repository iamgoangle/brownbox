import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import SearchBox from '../general/SearchBox';
import CategoryBar from '../general/CategoryBar';

/*
This is a header of the page, it will be mount(render) only one time.
Please find react's component life cycle : https://facebook.github.io/react/docs/component-specs.html

The most important function is render which is what this component will return.
The render function has to return ONLY ONE BLOCK
*/

export default class MainHeader extends React.Component {
    static get NAME() {
        return 'MainHeader';
    }

    static get contextTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props, context) {
        super(props, context);
        this.state = context.data[MainHeader.NAME] || {};
        console.log(this.state);
    }


    //user created function. can be called in DOM
    handleLogout() {


    }
    //function to render html-like code, notice that we use 'className' instead of 'class'
    render() {

        let loginButton;
        let greeting;

        let currentUser = false;

        if (currentUser)
        {
            loginButton = (
                <div className="dropdown">
                    <div className="profileThumbnail dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img className="dropdown-toggle" src="/images/mark.jpg"/>
                    </div>

                    {/*<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">*/}

                    {/*<span className="caret"></span>*/}
                    {/*</button>*/}
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a href={currentUser._id}>{currentUser.profile.full_name}</a></li>
                        <li><a href="#">Setting</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Startup A</a></li>
                        <li><a href="#">Startup B</a></li>
                        <li><a href="#">+ Create new Startup</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
                    </ul>
                </div>
            )
            greeting = (
                <p className="navbar-text nav navbar-nav navbar-right" style={{marginRight:15 + 'px'}}>Welcome, Pongsakorn Semsuwan</p>
            )
        }
        else
        {
            let loginButtonClass = this.props.activeNav === "login" ? "active" : "";
            loginButton = (<li className={loginButtonClass}><a href="/login">Login</a></li>)
        }

        let signupButton;
        if( currentUser ){

        } else {
            let signUpButtonClass = this.props.activeNav === "signup" ? "active" : "";
            signupButton = (<li className={signUpButtonClass}><Link className="link" to="/signup">Sign Up</Link></li>);
        }

        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header col-md-7">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                             <Link className="navbar-brand" to="/">
                                <img src="/img/logo.jpg" style={{width:35,display:'inline',marginRight:15}}/>
                                Brown Box :)</Link>
                            {/* <Link className="navbar-brand" to="/shop">Stickers</Link>
                            <Link className="navbar-brand" to="/add">Add Stickers</Link> */}
                        </div>
                        <div className="col-md-5">
                            <SearchBox/>
                        </div>

                        <div className="col-md-5 collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                {/*signupButton*/}
                                {/*loginButton*/}
                            </ul>
                            {greeting}
                        </div>
                    </div>
                    <div className="row">
                        <CategoryBar/>
                    </div>
                </div>
            </nav>
        )
    }
}
