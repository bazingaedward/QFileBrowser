/*
 * @file component Item
*/
import React from 'react';
import { Icon, Table, Tree, Col, Row} from 'antd';
import FileTableBlock from '../../components/FileTableBlock'
const TreeNode = Tree.TreeNode;

class TreeBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      structure: []
    };
  }

  preHandleData = (data) => {
    let root = {
      key: "/",
      title: "根目录"
    };
    root.children = data.filter((item) =>{
      if(item.isDir){
        return true;
      }else{
        return false;
      }
    }).map((item) => {
        return {
          key: "/" + item.name,
          title: item.name
        }
    });
    return [root];

  }

  componentWillMount(){
    this.state.structure = this.preHandleData(this.props.data);
  }

  renderTreeNodes = (data) => {
    return data.map((item) => {
      if(item.children) {
        return (
          <TreeNode key={item.key} title={item.title}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
      )
      }else {
        return <TreeNode {...item} />
      }
    });
  }

  onSelect = (key) => {
    this.props.onSelect(key);
  }

  render(){
    const options = {
      checkable: false,
      showLine: true,
      defaultExpandAll: true,
      onSelect: this.onSelect
    }
    return (
      <Row>
        <Col span={4}>
          <Tree {...options} >
            {this.renderTreeNodes(this.state.structure)}
          </Tree>
        </Col>
        <Col span={20}><FileTableBlock data={this.props.data}/></Col>
      </Row>
    );
  }

}

export default TreeBlock;
