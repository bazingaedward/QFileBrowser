import { connect } from 'react-redux'
import FileTableBlock from '../components/FileTableBlock'

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//
//   }
// }

export default connect(mapStateToProps)(FileTableBlock)
