import { connect } from 'react-redux'
import FileTableBlock from '../components/FileTableBlock'

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    rowSelection: {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRows)
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileTableBlock)
