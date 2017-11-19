/*
 * @file component Item
*/
import React from 'react';
import { Breadcrumb } from 'antd';

class BreadcrumbBlock extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <Icon type="home" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
          <Icon type="user" />
          <span>Files</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Application
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default BreadcrumbBlock;
