import React from 'react';

const Indi = (props) => {
  return (
    <div>
      <p>
      {props.pass.name} <span> age:{props.pass.age}</span>
      </p>
      <p>
      {props.pass.email}
      </p>




    </div>
  )
}

export default Indi;