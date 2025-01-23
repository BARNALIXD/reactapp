function Football() {
    const shoot = () => {
        alert("Great shot!");
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}

const root = ReactDOM.createElement(document.getElementById("root"));
root.render (<Football  />);

//put the shoot function in the football component