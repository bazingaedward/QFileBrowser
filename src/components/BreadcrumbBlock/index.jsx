/*
 * @file component Item
*/
import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import PropTypes from 'prop-types'

const BreadcrumbBlock = ({ paths }) => {

  const items = paths.map( (path, index) => (
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

Breadcrumb.propTypes = {
  paths: PropTypes.array
}

export default BreadcrumbBlock;
