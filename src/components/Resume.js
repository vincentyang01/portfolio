import pdf from '../media/JenniferYoo_Resume.pdf'

function Resume() {
    return (
        <div className="custom-section">
            <div className="resume-container">
                <h1>Resume</h1>
                <iframe src={pdf} height="100%" width="50%"></iframe>
                <button><a href={pdf} target="_blank">Download PDF</a></button>
            </div>
        </div>
    )
}

export default Resume