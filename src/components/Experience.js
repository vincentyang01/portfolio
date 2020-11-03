function Experience() {
    return (
        <div className="custom-section">
            <div className="experience-container">
            <h1>Experience</h1>
            <div className="experience-card">
                    <h4>Front End</h4>
                    {/* <p>I strive for simplistic yet interactive and captivating components</p> */}
                    <ul>
                        <li>React.js</li>
                        <li>Vanilla JavaScript</li>
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                    </ul>
                </div>
                <div className="experience-card">
                    <h4>Back End</h4>
                    <ul>
                        <li>Ruby</li>
                        <li>Ruby on Rails</li>
                        <li>PostGRES</li>
                        <li>JSON</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Experience