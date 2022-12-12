import { useState } from "react";
import "./App.css";
import BmiList from "./components/BmiList";
import BmiScore from "./components/BmiScore";
import Form from "./components/Form";

function App() {
  const [bmi, setbmi] = useState("00");
  const [bmiType, setbmiType] = useState("Not Calculated");
  // const [bmiRange, setBmiRang] = useState({
  //   underWeight: { low: "" },
  //   normal: { low: "", high: "" },
  //   overWeight: { low: "", high: "" },
  //   obesityOne: { low: "", high: "" },
  //   obesityTwo: { low: "", high: "" },
  //   obesityThree: { high: "" },
  // });
  const onFormSub = (w, h) => {
    let b = calBmi(w, h);
    setbmi(b);

    setbmiType(weightType(b));

    console.log(w, h);
  };
  const calBmi = (w, h) => (w / (h * h)).toFixed(2);

  // function to get the weight type
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };

  return (
    <>
      <Form getData={onFormSub} />
      <BmiScore bmiNo={bmi} bmiName={bmiType} />
      <BmiList />
    </>
  );
}

export default App;
