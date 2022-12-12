import { useState } from "react";

function Form({getData}) {
    const [weight, setweight] = useState("");
    const [height, setheight] = useState("");
    const [alert, setAlert] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault();
        if(isNaN(weight) || isNaN(height)){
            console.log('Invalid Input!!!')
            setAlert(true)
        }else {
            getData(weight,height)
            setAlert(false)
            // console.log(weight)
            // console.log(height)
        }
    }
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>BMI Calculator</h1>
      <form className="row g-3" onSubmit={onSubmit}>

        {alert ? <p style={{color:"red"}}>Invalid Input!!!</p> : "" }
        {alert && <p style={{color:"red"}}>Invalid Input!!!</p> }

        <div className="col-md-6">
          <label className="form-label">
            Weight(kg)
          </label>
          <input type="text" value={weight} onChange={(e)=>setweight(e.target.value)} className="form-control" id="inputWeight4" required />
        </div>
        <div className="col-md-6">
          <label className="form-label">
            Height(m)
          </label>
          <input type="text" value={height} onChange={(e)=>setheight(e.target.value)} className="form-control" id="inputHeight4" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-dark">
            Get BMI
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
