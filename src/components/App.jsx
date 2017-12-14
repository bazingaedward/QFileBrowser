import React from 'react';
import { Row, Col } from 'antd';
import MenuBlock from './MenuBlock';
import BreadcrumbBlock from './BreadcrumbBlock';
import TreeBlock from './TreeBlock';

const DATA = [
  {
    key: '0',
    name: 'hello',
    isDir: true,
    size: 0,
    date: new Date().toLocaleTimeString(),
  },
  {
    key: '1',
    name: 'world',
    isDir: true,
    size: 0,
    date: new Date().toLocaleTimeString(),
  },
  {
    key: '2',
    name: 'test.ppt',
    isDir: false,
    size: 128,
    date: new Date().toLocaleTimeString(),
  },
];

const hello = [
  {
    key: '00',
    name: 'hello1.txt',
    isDir: false,
    size: 12800,
    date: new Date().toLocaleTimeString(),
  },
  {
    key: '01',
    name: 'hello2.xlsx',
    isDir: false,
    size: 16000,
    date: new Date().toLocaleTimeString(),
  },
  {
    key: '02',
    name: 'test2.ppt',
    isDir: false,
    size: 128,
    date: new Date().toLocaleTimeString(),
  },
];

class QFileBrowser extends React.Component {
  static getData(url = '') {
    if (url === '') {
      return DATA;
    }
    return hello;
  }

  constructor(props) {
    super(props);
    this.state = {
      // 'breadcrumb': [
      //   {'key': "0", 'name':'根目录', 'href':'/'},
      // ],
      // currentIdx: 0,
      paths: [],
      data: [],
    };

  }


  componentWillMount() {
    this.state.data = QFileBrowser.getData();
  }

  onPathChanged = (url) => {
    // console.log(url);
    this.setState({
      paths: url.split('/'),
      data: this.getData(url),
    });
  }

  render() {
    return (
      <div>
        <Row>
          <Col span={4}><MenuBlock /></Col>
          <Col span={20}><BreadcrumbBlock paths={this.state.paths} /></Col>
        </Row>
        <TreeBlock
          paths={this.state.paths}
          data={this.state.data}
          onSelect={path => this.onPathChanged(path)}
        />
      </div>
    );
  }
}

export default QFileBrowser;
