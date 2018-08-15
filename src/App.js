import React, { Component } from 'react';
// import logo from './logo.svg';
import './index.css';
// import 'materialize-css/dist/css/materialize.css';
// import './font-awesome.css';
// import 'materialize-css/dist/js/materialize.js';
import './App.css';
import './main.css';
// import 'vendors/jquery.easings.min.js';
import 'fullpage.js';
import NavFrame from './components/nav.js';
import './components/home.js';
import $ from "jquery";
import Home from "./components/home";
window.$ = require('jquery')(window);

class App extends Component {

    // constructor(props) {
    //     super(props);
    //
    // }
    //
    componentDidMount() {
        $(document).ready(function() {
            $('#fullpage').fullpage({
                //Navigation
                menu: '#menu',
                lockAnchors: true,
                anchors:['home', 'about', 'port', 'contact'],
                // navigation: false,
                // navigationPosition: 'right',
                navigationTooltips: ['HOME', 'ABOUT', 'PORTFOLIO', 'CONTACT'],
                showActiveTooltip: true,
                slidesNavigation: true,
                navigation: true,
                navigationPosition: 'right',
                tooltips: [],

                //Scrolling
                scrollDelay: 1000,
                css3: true,
                scrollingSpeed: 700,
                autoScrolling: true,
                fitToSection: true,
                fitToSectionDelay: 1000,
                scrollBar: false,
                easing: 'easeInOutCubic',
                easingcss3: 'ease',
                loopBottom: false,
                loopTop: false,
                loopHorizontal: true,
                continuousVertical: false,
                continuousHorizontal: false,
                scrollHorizontally: false,
                interlockedSlides: false,
                dragAndMove: false,
                offsetSections: false,
                resetSliders: false,
                fadingEffect: false,
                normalScrollElements: '#element1, .element2',
                scrollOverflow: false,
                scrollOverflowReset: false,
                scrollOverflowOptions: null,
                touchSensitivity: 15,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,

                //Accessibility
                keyboardScrolling: true,
                animateAnchor: true,
                recordHistory: true,

                //Design
                controlArrows: true,
                verticalCentered: true,
                sectionsColor : ['#ccc', '#fff'],
                paddingTop: '0px',
                paddingBottom: '0px',
                fixedElements: '#header, .footer',
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: true,
                parallax: true,
                parallaxOptions: {type: 'reveal', percentage: 90, property: 'translate'},

                //Custom selectors
                sectionSelector: '.section',
                slideSelector: '.slide',
                fadingEffect:true,

                lazyLoading: true,

                //events
                onLeave: function(index, nextIndex, direction){},
                afterLoad: function(anchorLink, index){},
                afterRender: function(){},
                afterResize: function(){},
                afterResponsive: function(isResponsive){},
                afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
                onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
            });
        });
        // $("nav [href]").each(function() {
        //     if (this.href === window.location.href) {
        //         $(this).addClass("active");
        //     }
        // });

        // fullpage.initialize('#fullpage', {
        //     anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        //     menu: '#menu',
        //     css3:true
        // });
    }

    render() {


        return (

            <div id="fullpage">

                <div className="section " id="section0" data-anchor="home">
                    <div className="content">
                        <NavFrame/>
                        <div className="flex-row">
                            <div className="flex-col-10">
                                <div className="flex-row name-wrapper wow fadeIn animated"  data-wow-duration="0.8s" data-parallax="0.4">
                                    <div className="flex-col-12">
                                        <div className="title"><span><b>Taylor Emolo</b></span></div>
                                    </div>
                                    <div className="flex-col-12">
                                        <br/>
                                        <div className="subtitle">Front - End  Extraordinaire</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<h1>fullPage.js</h1>*/}
                        {/*<p>Home</p>*/}
                    </div>
                </div>
                <div className="section" id="section1" data-anchor="about">
                    <div className="content">
                        <h1>About</h1>
                        <p>IE 8+ support.</p>
                    </div>
                </div>
                <div className="section" id="section2" data-anchor="port">
                    <div className="content">
                        <h1>Portfolio</h1>
                        <p>IE 8+ support.</p>
                    </div>
                    {/*<div className="slide" id="slide2">*/}
                        {/*<div className="content">*/}
                            {/*<h1>Portfolio</h1>*/}
                            {/*<p>*/}
                                {/*5 Kb gzipped!!*/}
                            {/*</p>*/}
                            {/*<p>*/}
                                {/*Improve the loading time of your site!*/}
                            {/*</p>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="slide" id="slide2" data-anchor="portfolio">*/}
                        {/*<div className="content">*/}
                            {/*<h1>Slides too!</h1>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="slide" id="slide2">*/}
                        {/*<div className="content">*/}
                            {/*<h1>More slides!</h1>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>



                <div className="section" id="section3" data-anchor="contact">
                    <div className="content">
                        <h1>Contact</h1>
                        <p>IE 8+ support.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
