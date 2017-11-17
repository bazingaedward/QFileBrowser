import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message ,Tree, Button, Breadcrumb, Icon, Table} from 'antd';
import { Row, Col } from 'antd';

const TreeNode = Tree.TreeNode;

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

class TreeBlock extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Tree
        checkable={false}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        <TreeNode title="root" key="0-0">
          <TreeNode title="1" key="0-0-0">
            <TreeNode title="1.1" key="0-0-0-0"/>
            <TreeNode title="1.2" key="0-0-0-1" />
          </TreeNode>
          <TreeNode title="2" key="0-0-1">
            <TreeNode title="2.1" key="0-0-1-0" />
          </TreeNode>
        </TreeNode>
      </Tree>
    );
  }

}

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

class QFileBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={4}><MenuBlock /></Col>
          <Col span={20}><BreadcrumbBlock /></Col>
        </Row>
        <Row>
          <Col span={4}><TreeBlock /></Col>
          <Col span={20}><FileTableBlock /></Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<QFileBrowser />, document.getElementById('root'));
