/*
 * @file component Item
*/
import React from 'react';
import { Icon, Table, Tree} from 'antd';
const TreeNode = Tree.TreeNode;

class TreeBlock extends React.Component {
  constructor(props){
    super(props);
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

  render(){
    return (
      <Tree
        checkable={false}
        onSelect={this.onSelect}
        onCheck={this.onCheck}
      >
        {this.renderTreeNodes(this.props.data)}
      </Tree>
    );
  }

}

export default TreeBlock;
