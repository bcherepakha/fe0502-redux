import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Link = ({ active, label, onClick }) => (
  <RaisedButton
      label={label}
      onClick={onClick}
      disabled={active}
      style={{ marginLeft: 4 }}/>
);
 
export default Link;
