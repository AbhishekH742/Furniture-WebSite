import React from "react";

const Reviewscontent = (props) => {
  const currentdate = props.date;
  //const formatteddate = currentdate.toDateString();
  const newdate = new Date();
  const newdatestring = newdate.toDateString();
  return (
    <div>
      <div className="box reviewcomment">
        <div>
          <span className="reviewname">{props.name} </span>

          <span className="reviewname"> {currentdate} </span>
        </div>
        <br className="reviewgap"></br>
        <div className="box2">
          <p className="textwidth">{props.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviewscontent;
