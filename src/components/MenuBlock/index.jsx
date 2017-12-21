/*
 * @file component Item
*/
import React from 'react';
import { Icon, Button} from 'antd';

class MenuBlock extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Button icon="appstore" />
        <Button icon="left" disabled/>
        <Button icon="right" disabled/>
      </div>
    );
  }
}

export default MenuBlock;
