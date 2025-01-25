
//car component
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

//garage component
function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

//render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);