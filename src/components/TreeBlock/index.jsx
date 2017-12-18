/*
 * @file component Item
*/
import React from 'react';
import { Icon, Tree } from 'antd';

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
          key: [...this.props.paths, item.name].join('/'),
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
    if(key.length < 2)
      this.props.onSelect(key[0]);
  }

  render(){
    const options = {
      checkable: false,
      showLine: true,
      defaultExpandAll: true,
      onSelect: this.onSelect
    }
    return (
      <Tree {...options} >
        {this.renderTreeNodes(this.state.structure)}
      </Tree>
    )
  }

}

export default TreeBlock;
