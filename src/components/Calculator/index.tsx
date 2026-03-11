import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styles from "./Calculator.module.css";
const Calculator = () => {
  const [input, setInput] = useState("");
  const HEADLING = "React Calculator";

  const calculator_value = [
    { label: 7, type: "number" },
    { label: 8, type: "number" },
    { label: 9, type: "number" },
    { label: "+", type: "operator" },

    { label: 4, type: "number" },
    { label: 5, type: "number" },
    { label: 6, type: "number" },
    { label: "-", type: "operator" },

    { label: 1, type: "number" },
    { label: 2, type: "number" },
    { label: 3, type: "number" },
    { label: "*", type: "operator" },

    { label: "C", type: "action" },
    { label: 0, type: "number" },
    { label: "=", type: "action" },
    { label: "/", type: "operator" },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="parent">
      <h1 className="heading">{HEADLING}</h1>
      <Input
        id="number"
        type="number"
        name="number"
        onChange={(e) => console.log(e)}
      />
      <p>Error</p>
      <div className={styles.calculator_btn}>
        {calculator_value.map((item) => {
          return (
            <Button
              onClick={handleChange}
              key={item.label}
              value={item.label}
              onChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;
