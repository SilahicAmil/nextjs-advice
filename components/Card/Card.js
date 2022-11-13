const Card = (props) => {
  return (
    <div className=" ">
      <div className="flex  w-full justify-center place-items-center ">
        <div className="">
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
