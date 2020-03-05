import React from "react"
import logo from "../images/elance.jfif"


export default function Navbar(props){


     return  <section>
                 {/* Navbar */}
                 <nav className="navbar navbar-expand-lg fixed-top pr-0 mr-0 my-0 py-0">
                        <a className="navbar-brand ml-2" href="/"><img src={logo} className="py-0 my-0"/></a>
                        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-right inline-block ml-5 mr-4 " id="navbarNav">
                            <ul className="nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Find Freelancer <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Find Job</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">How it works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                
                            </ul>
                              
                        </div>
                        <div className="collapse navbar-collapse  inline-block pr-0 mr-0  " id="collapsibleNavId">
                            
                                
                                {!localStorage.getItem('login')?<ul className="nav ml-3 mr-0 pr-0"><li className="nav-item ml-3">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                                <li className="nav-item ml-3">
                                    <a className="nav-link" href="/signup">SignUp</a>
                                </li> </ul>:<ul className="nav ml-3 mr-0 pr-0"> <li className="nav-item ml-3">
                                    <a className="nav-link" href="/logout">Logout</a>
                                </li> </ul>
                            }
                               <ul className="nav ml-3 mr-0 pr-0"><li className="nav-item  ml-3 mr-0 pr-0">
                                    <a className="nav-link btn btn-outline-secondary" href="#">Post Project</a>
                                </li></ul> 
                                
                           
                        </div>
                    </nav>
            </section>
    

}

