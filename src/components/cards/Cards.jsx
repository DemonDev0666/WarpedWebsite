import React from 'react';


function Card(props) {
  return (
    <div className="bg-Gray1 shadow-md p-6 mb-4 text-Cyan2 h-52 w-52 rounded-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      {props.children}
    </div>
  );
}

export default Card;
