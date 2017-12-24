import { connect } from 'react-redux'
import FileTableBlock from '../components/FileTableBlock'
import { subDirectory } from '../actions'

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    rowSelection: {
      onChange: (selectedRowKeys, selectedRows) => {
        // console.log(selectedRows)
        dispatch(subDirectory(selectedRows[0].name))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileTableBlock)
