function Project() {
    return (
        <div className="custom-section">
            <div className='project-container'>
                <h1>Projects</h1>
                <div className='project-div'>
                    <p>Homey</p>
                    <ul>
                        <li>Ecommerce web application with 3D rendering of products</li>
                        <li>Front-end: React.js</li>
                        <li>Back-end: Ruby on Rails</li>
                        <li>Libraries: Three.JS, Stripe</li>
                        <li>Api: Stripe</li>
                    </ul>
                </div>
                <div className='project-div'>
                    <p>Among Us LFG</p>
                    <ul>
                        <li>Real time "looking for group" web application for game, Among Us</li>
                        <li>Front-end: React.js</li>
                        <li>Back-end: Ruby on Rails</li>
                        <li>Integrations: Websockets through ActionCable, JWT Authentication</li>
                    </ul>
                </div>
                <div className='project-div'>
                    <p>Socialite</p>
                    <ul>
                        <li>Social web application where users can send/receive messages, follow users and browse suggested users</li>
                        <li>Front-end: Vanilla Javascript</li>
                        <li>Back-end: Ruby on Rails</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Project