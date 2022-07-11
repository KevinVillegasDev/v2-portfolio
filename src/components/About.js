const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>
                Bilingual Army nurse turned software developer leveraging strong
                communication, interpersonal, and analytical skills gained
                through my background as a soldier and nurse. Utilizing
                innovative critical thinking skills to solve complex technical
                problems. Passionate for working within a team environment and
                achieving the best possible solution within each project. Very
                eager to join a team of like minded individuals who value
                diversity and hard work.
            </p>
            <br></br>
            <br></br>
            <h2>Skills</h2>
            <p>
                Currently have experience with JavaScript, React, Mongoose,
                Express, MongoDB, MySQL, Python, and Django.{" "}
            </p>
            <div className="icons">
                <img
                    src={process.env.PUBLIC_URL + "/js.png"}
                    alt="javascript"
                />
                <img src={process.env.PUBLIC_URL + "/jquery.png"} />
                <img src={process.env.PUBLIC_URL + "/mongo.png"} />
                <img src={process.env.PUBLIC_URL + "/python.png"} />
                <img src={process.env.PUBLIC_URL + "/react.png"} />
                <img src={process.env.PUBLIC_URL + "/mysql.png"} />
            </div>
        </div>
    );
};

export default About;
