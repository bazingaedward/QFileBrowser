import { connect } from 'react-redux'
import BreadcrumbBlock from '../components/BreadcrumbBlock'

function mapStateToProps(state) {
  return {
    paths: state.paths
  }
}

export default connect(mapStateToProps)(BreadcrumbBlock)
