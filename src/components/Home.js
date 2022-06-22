const Home = () => {
    return (
        <div className="home">
            <h1>Kevin Villegas</h1>
            <p>
                Full Stack Developer based in Los Angeles with a passion for
                technology, DeFi and the outdoors.
            </p>
            <img src={process.env.PUBLIC_URL + "/selfie.JPG"} />
        </div>
    );
};

export default Home;
