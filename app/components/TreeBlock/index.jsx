/*
 * @file component Item
*/
import React from 'react';
import { Icon, Table} from 'antd';

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

export default TreeBlock;
