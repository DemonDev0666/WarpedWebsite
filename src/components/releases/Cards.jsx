import React from 'react';


function Card(props) {
  return (
    <div className="bg-Gray1 shadow-md p-6 rounded-lg mb-4 text-Cyan2 h-52 w-52">
      {props.children}
    </div>
  );
}

export default Card;
