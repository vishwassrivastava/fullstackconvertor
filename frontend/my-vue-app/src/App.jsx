import "./App.css";
import { useState } from "react";
import axios from "axios";
const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const body = {
    text: input,
  };
  const Submit = async () => {
    try {
      await axios.post("http://localhost:3000/translate", body).then((res) => {
        setOutput(res.data.translation);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>English to french convertor</div>
      <div className="translate">
        <textarea
          type="text"
          id="input"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          Submit();
        }}
      >
        Translate
      </button>
      {output && (
        <div>
          <h3>Output</h3>
          <p>{output}</p>
        </div>
      )}
    </>
  );
};

export default App;
