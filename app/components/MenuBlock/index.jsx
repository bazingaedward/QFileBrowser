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
        <Button icon="select" />
        <Button icon="left" />
        <Button icon="right" />
      </div>
    );
  }
}

export default MenuBlock;
