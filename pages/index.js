const AdviceHomePage = (props) => {
  const generateQuote = async () => {
    const response = await fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        return data["slip"];
      });
    console.log(response);
  };

  return (
    <div className="h-screen w-">
      <div className="h-60 w-full justify-center place-items-center grid">
        <h3>Advice #123</h3>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolor
            alias ea aliquid? Est sunt minima placeat iste temporibus in rerum
            eius ea, nobis quae laboriosam, deleniti quisquam tenetur ut.
            {props.data}
          </p>
        </div>
      </div>
      <button onClick={generateQuote}>Generate Quote</button>
    </div>
  );
};

export default AdviceHomePage;
