import React,  {Component} from 'react'

class Header extends Component{
    constructor(){
        super();
        this.state={
            loggedIn:false
        }
    }

    componentDidMount(){
        if(localStorage.getItem("token")){
            this.setState({
                loggedIn:true
            })
        }   
       else
       {
           this.setState({
               loggedIn:false
           })
       }
    }

    logout(){
        localStorage.removeItem("token");
            this.setState({
                loggedIn:false
            })
        
    }

    render(){

        if(!this.state.loggedIn){
            return(
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register ">Register</a>
                        </li>
                        </ul>
                        </div>
                        </nav>                
            )

            }

            else{
                return(
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.logout.bind(this)} href="/logout">logout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/mybooks ">mybooks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/admin ">Admin</a>
                        </li>
                        </ul>
                </div>
                        </nav>
                )
            }
        }
    }
           
export default Header;