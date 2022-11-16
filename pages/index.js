import Card from "../components/Card/Card";
import { useState } from "react";

const AdviceHomePage = (props) => {
  const [quote, setQuote] = useState({
    id: 0,
    advice: "Generate a Quote!",
  });

  const generateQuote = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data["slip"]);
      });
    // console.log(quote);
  };

  return (
    <>
      {/* <Card quoteData={data} /> */}
      {!quote ? (
        <h1>Generate New Quote</h1>
      ) : (
        Object.values(quote).map((data) => {
          return <Card key={data}>{data}</Card>;
        })
      )}
      <div className="flex items-center justify-center mt-4">
        <button onClick={generateQuote}>Generate Quote</button>
      </div>
    </>
  );
};

export default AdviceHomePage;

// GET SERVER SIDE PROPS of ipData
// and just pass data directly through props
