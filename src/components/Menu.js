import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Main from './Main.js'
import Resume from './Resume.js'
import Project from './Project.js'
import Contact from './Contact.js'
import Experience from './Experience.js'


const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;



// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
// This is no longer required for the scrollOverflow option.
// const pluginWrapper = () => {
  /*
  * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
  */
// };

const originalColors = ['#EEE4E1', '#E7D8C9', '#E2D0CB', '#DFCCB9'];

class Menu extends React.Component {

    state = {
        sectionsColor: [...originalColors],
        currentPage: null,
        colorChange: null
    };


    onLeave(origin, destination, direction) {
        console.log('onLeave', { origin, destination, direction });
        // arguments are mapped in order of fullpage.js callback arguments do something
        // with the event
        console.log("testing current:", destination.anchor)

        // this.setState({currentPage: destination.anchor})

        // if (this.state.currentPage === destination.anchor) {
        //     this.setState({colorChange: 'black'})
        // } else {
        //     this.setState({colorChange: '#CE2D4F'})
        // }
    }

    render() {
        console.log('page state:', this.state.currentPage)
        const Bar = () => (
            <div className="menu">
                <div id="myMenu">
                    {/* <p data-menuanchor="main"><a href="#main" style={{color: `${this.state.colorChange}`}}>Main</a></p> */}
                    <p data-menuanchor="aboutme"><a href="#aboutme" style={{color: `${this.state.colorChange}`}}>About Me</a></p>
                    <p data-menuanchor="experience"><a href="#experience" style={{color: `${this.state.colorChange}`}}>Experience</a></p>
                    <p data-menuanchor="projects"><a href="#projects" style={{color: `${this.state.colorChange}`}}>Projects</a></p>
                    <p data-menuanchor="resume"><a href="#resume" style={{color: `${this.state.colorChange}`}}>Resume</a></p>
                    <p data-menuanchor="contact"><a href="#contact" style={{color: `${this.state.colorChange}`}}>Contact</a></p>
                </div>
            </div>
        );

    return (
        <div className="menu-container">
            <Bar/>
            <ReactFullpage
                //debug /* Debug logging */

                // Required when using extensions
                //pluginWrapper={pluginWrapper}

                // fullpage options
                licenseKey={'3FA42FA7-78F241A0-B8619608-3854E7CD'}
                navigation
                anchors={['aboutme', 'experience', 'projects', 'resume', 'contact']}
                sectionSelector={SECTION_SEL}
                onLeave={this.onLeave.bind(this)}
                sectionsColor={this.state.sectionsColor}
                render={comp => (
                    <ReactFullpage.Wrapper>
                        <Main />
                        <Experience />
                        <Project />
                        <Resume />
                        <Contact />
                    </ReactFullpage.Wrapper>
                )}
            />
        </div>
        );
    }
}

export default Menu