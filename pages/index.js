import Card from "../components/Card/Card";
import { useState } from "react";

const AdviceHomePage = (props) => {
  const [quote, setQuote] = useState("");

  const generateQuote = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        return data["slip"];
      });

    const data = {
      id: response.id,
      advice: response.advice,
    };
  };

  return (
    <>
      <Card quoteData={data} />

      <button className="flex justify-center" onClick={generateQuote}>
        Generate Quote
      </button>
    </>
  );
};

export default AdviceHomePage;
