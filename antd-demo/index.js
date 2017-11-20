import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'antd';
import MenuBlock from './components/MenuBlock'
import BreadcrumbBlock from './components/BreadcrumbBlock'
import TreeBlock from './components/TreeBlock'


const DATA = [
  {
    name: "hello",
    isDir: true,
    size: 0,
    date: new Date().toLocaleTimeString(),
  },
  {
    name: "world",
    isDir: true,
    size: 0,
    date: new Date().toLocaleTimeString(),
  },
  {
    name: "test.ppt",
    isDir: false,
    size: 128,
    date: new Date().toLocaleTimeString(),
  }
];

const hello = [
  {
    name: "hello1.txt",
    isDir: false,
    size: 12800,
    date: new Date().toLocaleTimeString(),
  },
  {
    name: "hello2.xlsx",
    isDir: false,
    size: 16000,
    date: new Date().toLocaleTimeString(),
  },
  {
    name: "test2.ppt",
    isDir: false,
    size: 128,
    date: new Date().toLocaleTimeString(),
  }
];

class QFileBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'breadcrumb': [
        {'key': "0", 'name':'根目录', 'href':'/'},
      ],
      currentIdx: 0,
      paths: [],
      data: []

    };
  }

  getData(path='/'){
    "get custom directory list data asynethically"
    if(path == '/')
      return DATA;
    else {
      return hello;
    }
  }

  componentWillMount(){
    this.state.data = this.getData('/');
  }

  onPathChanged = (path) => {
    this.setState({
      paths: path,
      data: this.getData(path)
    })

  }

  render() {
    return (
      <div>
        <Row>
          <Col span={4}><MenuBlock /></Col>
          <Col span={20}><BreadcrumbBlock paths={this.state.paths}/></Col>
        </Row>
          <TreeBlock paths={this.state.paths} data={this.state.data}
            onSelect={path => this.onPathChanged(path)}/>
      </div>
    );
  }
}

ReactDOM.render(<QFileBrowser />, document.getElementById('root'));
