import { connect } from 'react-redux'
import TreeBlock from '../components/TreeBlock'

function mapStateToProps(state) {
  return {
    data: state.data,
    paths: state.paths
  }
}

export default connect(mapStateToProps)(TreeBlock)
