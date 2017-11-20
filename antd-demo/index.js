import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';
import MenuBlock from './components/MenuBlock'
import BreadcrumbBlock from './components/BreadcrumbBlock'
import TreeBlock from './components/TreeBlock'
import FileTableBlock from './components/FileTableBlock'

class QFileBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'breadcrumb': [
        {'key': 0, 'name':'根目录', 'href':'/'},
      ],
      'treeData': [
        {key: "0", title:'hello', children: [
          {key: "0-0", title:'hello-1'},
          {key: "0-1", title:'hello-2'},
        ]},
        {key: "1", title:'world', children: [
          {key: "1-0", title:'world1'},
          {key: "1-1", title:'world2'},
        ]}
      ],
      tableData: [
        {
          key: 0,
          name: "hello",
          size: 0,
          date: new Date().toLocaleTimeString(),
          isDir: true,
        },
        {
          key: 1,
          name: "world",
          size: 0,
          date: new Date().toLocaleTimeString(),
          isDir: true,
        },
        {
          key: 2,
          name: "test.ppt",
          size: 128,
          date: new Date().toLocaleTimeString(),
          isDir: false,
        },
      ]
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={4}><MenuBlock /></Col>
          <Col span={20}><BreadcrumbBlock paths={this.state.breadcrumb}/></Col>
        </Row>
        <Row>
          <Col span={4}><TreeBlock data={this.state.treeData}/></Col>
          <Col span={20}><FileTableBlock data={this.state.tableData}/></Col>
        </Row>
      </div>
    );
  }
}

ReactDOM.render(<QFileBrowser />, document.getElementById('root'));
