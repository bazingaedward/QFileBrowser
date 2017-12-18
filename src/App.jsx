import React from 'react'
import { Row, Col } from 'antd'
import MenuBlock from './components/MenuBlock'
import Breadcrumb from './containers/Breadcrumb'
import FileTable from './containers/FileTable'
import TreeBlock from './containers/TreeBlock'

class QFileBrowser extends React.Component {
  constructor(props) {
    super(props);
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
          <Col span={20}><Breadcrumb /></Col>
        </Row>
        <Row>
          <Col span={4}><TreeBlock /></Col>
          <Col span={20}><FileTable /></Col>
        </Row>

      </div>
    );
  }
}

export default QFileBrowser;
