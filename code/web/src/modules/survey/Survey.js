// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// UI Imports
// import Card from '../../ui/card/Card'
// import Button from '../../ui/button/Button'
// import H4 from '../../ui/typography/H4'
// import Icon from '../../ui/icon'
// import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
import { messageShow, messageHide } from '../common/api/actions'
import { remove, getListByUser } from '../subscription/api/actions'

// Component
class Survey extends PureComponent {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     isLoading: false
  //   }
  // }

  render() {
    // const { id, crate, createdAt } = this.props.subscription
    // const { isLoading } = this.state

    return (
			// Use Card comp later for survey options?
      // <Card style={{ width: '18em', backgroundColor: white }}>
			// </Card>
			<div>
				TEST
			</div>
    )
  }
}

// Component Properties
Item.propTypes = {
  // subscription: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired,
  // remove: PropTypes.func.isRequired,
  // getListByUser: PropTypes.func.isRequired,
  // messageShow: PropTypes.func.isRequired,
  // messageHide: PropTypes.func.isRequired
}

// Component State
function itemState(state) {
  return {
    user: state.user
  }
}

export default Survey
