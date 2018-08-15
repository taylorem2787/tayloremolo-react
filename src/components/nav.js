import React from 'react';
// import $ from "jquery";
// import 'materialize-css/dist/js/materialize.js';
// import { Link } from 'react-router-dom';


class NavFrame extends React.Component {

    componentDidMount() {
        // $(document).ready(function(){
        //     $(".button-collapse").sideNav();
        // });
    }

    render() {

        return (
            <div>
                <p className="logo designer-logo">DEVELOPER<b className="and">&</b>DESIGNER</p>
                <p className="logo name-logo">Taylor Emolo</p>
                <a title="Email" href="mailto:taylor.emolo@gmail.com" className="logo email-logo">Email</a>
                <a title="Github" href="https://github.com/taylorem2787" className="logo github-logo">Github</a>
                {/*<div className="logo-line"></div>*/}
                {/*<div className="city-navigation-wrapper" id="menu">*/}
                    {/*<nav id="menu">*/}
                        {/*<ul>*/}
                            {/*<li data-menuanchor="home" className="active"><a href="#home">Home</a></li>*/}
                            {/*<li data-menuanchor="about"><a href="#about">About</a></li>*/}
                            {/*<li data-menuanchor="portfolio"><a href="#portfolio">Portfolio</a></li>*/}
                            {/*<li data-menuanchor="contact"><a href="#contact">Contact</a></li>*/}
                        {/*</ul>*/}
                    {/*</nav>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default NavFrame;
