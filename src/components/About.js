const About = () => {
    return (
        <div className="about">
            <h2>About Me</h2>
            <p>
                Bilingual Army nurse turned software developer. I have strong
                communication, interpersonal, and analytical skills gained
                through a background as a soldier and nurse. I use innovating
                critical thinking to solve complex technical problems. I bring
                my passion for teamwork and achieving the best possible solution
                into each project. I am eager to join a team of like minded
                individuals who value diversity and hard work.
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
                <img src="/jquery.png" />
                <img src="/mongo.png" />
                <img src="/python.png" />
                <img src="/react.png" />
                <img src="/mysql.png" />
            </div>
        </div>
    );
};

export default About;
