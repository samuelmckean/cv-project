import React from 'react';

function ThemeChange(props) {
  
  return (
    <div className="row">
      <h2>Theme</h2>
      <button className="btn btn-primary col-md-2" onClick={() => props.changeTheme('normal')}>Normal</button>
      <button className="btn btn-primary col-md-2" onClick={() => props.changeTheme('dark')}>Dark</button>
    </div>
  )
}

export default ThemeChange;
