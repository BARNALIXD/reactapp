function MissedGoal(){
  return <h1>MISSED!  </h1>;
}

function MadeGoal(){
  return <h1>Goal!  </h1>;
}



function Goal (props) {
  const isGoal = props.isGoal;
  if(isGoal) {
    return <Madegoal/>;
  }
  return <Notmadegoal/>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(" Goal");
