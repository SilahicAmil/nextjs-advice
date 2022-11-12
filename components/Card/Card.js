const Card = (props) => {
  return (
    <div className="h-screen w-">
      <div className="h-60 w-full justify-center place-items-center grid">
        <h3>Advice #123</h3>
        <div className="">
          <p>{props.quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
