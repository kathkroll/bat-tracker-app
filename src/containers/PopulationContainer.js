import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PopulationComponent from '../components/PopulationComponent'

const mapStateToProps = state => ({
  bats: state.populationReducer.bats,
})

const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(TodoActions, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopulationComponent)