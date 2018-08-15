import React, { Component } from 'react';
import './index.css';
import './Index2.css';
import './main.css';
import 'fullpage.js';
import NavFrame from './components/nav.js';
import './components/home.js';
import $ from "jquery";
window.$ = require('jquery')(window);

class Index2 extends Component {

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
                scrollDelay: 600,
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
                responsiveSlides: false,
                parallax: false,
                parallaxOptions: {type: 'reveal', percentage: 90, property: 'translate'},

                //Custom selectors
                sectionSelector: '.section',
                slideSelector: '.slide',

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
    }

    render() {


        return (

            <div id="fullpage">

                <div className="section " id="section0" data-anchor="home">
                    <div className="content">
                        <NavFrame/>
                        <h1>fullPage.js</h1>
                        <p>Home</p>
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

export default Index2;
