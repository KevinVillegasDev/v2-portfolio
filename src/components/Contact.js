const Contact = () => {
    return (
        <div className="contact">
            <h2>Feel free to contact me through email or LinkedIn.</h2>
            <h2>I look forward to hearing from you!</h2>
            <div className="contacticons">
                <a
                    href="mailto:kevin.villegas94@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={process.env.PUBLIC_URL + "/email.png"} />
                </a>
                <a href="https://www.linkedin.com/in/kevinvillegasdev/">
                    <img src={process.env.PUBLIC_URL + "/linked.png"} />
                </a>
                <a href="https://github.com/KevinVillegasDev">
                    <img src={process.env.PUBLIC_URL + "/github.png"} />
                </a>
            </div>
        </div>
    );
};

export default Contact;
