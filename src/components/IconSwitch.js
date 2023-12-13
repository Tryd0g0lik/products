import React from 'react';

function IconSwitch(props) {

    return (
      <button onClick={item => {
        console.log("STAT: ", props.icon);
        props.onSwitch(props.icon)
      }}><i className='material-icons'>{props.icon}</i></button>
    )
  }

export default IconSwitch
