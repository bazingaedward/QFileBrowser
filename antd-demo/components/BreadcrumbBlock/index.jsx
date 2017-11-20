/*
 * @file component Item
*/
import React from 'react';
import { Breadcrumb, Icon } from 'antd';

function BreadcrumbBlock(props) {

  const items = props.paths.map( (path, index) => (
      <Breadcrumb.Item key={index+1}>
        <span>{path}</span>
      </Breadcrumb.Item>
  ));

  return (
    <Breadcrumb separator='>'>
      <Breadcrumb.Item key="0">
        <Icon type="home"/>
      </Breadcrumb.Item>
      {items}
    </Breadcrumb>
  );
}

export default BreadcrumbBlock;