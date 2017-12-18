import { connect } from 'react-redux'
import FileTableBlock from '../components/FileTableBlock'

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(FileTableBlock)
