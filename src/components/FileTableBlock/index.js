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
    const columns = [{
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '大小',
      dataIndex: 'size',
      key: 'size',
    }, {
      title: '修改日期',
      dataIndex: 'date',
      key: 'date',
    }];
    return (
      <Table dataSource={this.props.data} columns={columns} />
    );
  }
}


export default FileTableBlock;
