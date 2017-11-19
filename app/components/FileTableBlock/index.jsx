/*
 * @file component Item
*/
import React from 'react';
import { Icon, Table} from 'antd';

class FileTableBlock extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '大小',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '修改日期',
      dataIndex: 'address',
      key: 'address',
    }];
    return (
      <Table dataSource={dataSource} columns={columns} />
    );
  }
}


export default FileTableBlock;
