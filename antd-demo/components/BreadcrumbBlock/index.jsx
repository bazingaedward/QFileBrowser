/*
 * @file component Item
*/
import React from 'react';
import { Breadcrumb, Icon } from 'antd';

function BreadcrumbBlock(props) {

  const items = props.paths.map( path => (
      <Breadcrumb.Item key={path.key}>
        <span>{path.name}</span>
      </Breadcrumb.Item>
  ));

  return (
    <Breadcrumb separator='->'>
      {items}
    </Breadcrumb>
  );
}

export default BreadcrumbBlock;
