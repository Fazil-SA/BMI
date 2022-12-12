function BmiScore({ bmiNo, bmiName }) {
  return (
    <div className="container">
      <div className="card text-bg-dark mb-3" style={{maxWidth:"18rem",marginTop:"1rem"}}>
        <div className="card-header" style={{textAlign:"center"}}>Your BMI Score</div>
        <div className="card-body">
          <h2 className="card-title" style={{textAlign:"center"}}>{bmiNo}</h2>
          <h3 className="card-text" style={{textAlign:"center"}}>
            {bmiName}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default BmiScore;
