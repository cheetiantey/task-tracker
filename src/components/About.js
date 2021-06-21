import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <a href="https://github.com/cheetiantey/task-tracker" target="_blank" rel="noopener noreferrer">GitHub</a>
            <br></br>
            <br></br>
            <Link to="/">Go Back</Link>
        </div>
    )
};

export default About;
