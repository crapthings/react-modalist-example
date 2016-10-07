import React, { Component } from 'react'

class modalist extends Component {

  constructor(props) {
    super(props)

    this.state = {
      toggleState: false,
    }

    this.toggleHandler = this.toggleHandler.bind(this)
  }

  getModalistStyle() {
    return {
      display: 'inline'
    }
  }

  toggleHandler(e) {
    e.preventDefault()
    this.setState({
      toggleState: !this.state.toggleState
    })
  }

  render() {
    const { toggleHandler, props } = this
    const { toggleState } = this.state
    const { toggler, component } = this.props
    return <div className='modalist' style={this.getModalistStyle()}>
      {toggler(toggleHandler)}
      {toggleState && <Modal
        toggleHandler={toggleHandler}
        component={component()}
        {...props}
      />}
    </div>
  }

}

class Modal extends Component {

  constructor() {
    super()
    this.getComputedPosition = this.getComputedPosition.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  getWrapperStyle() {
    return {
      display: 'inline',
    }
  }

  getContainerStyle() {
    return {
      position: 'absolute',
      zIndex: 999,
      width: '640px',
      border: '1px solid #efefef',
      backgroundColor: 'white',
    }
  }

  getBackdropStyle() {
    return {
      position: 'fixed',
      zIndex: 998,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, .64)',
    }
  }

  getComputedPosition() {
    const { modal } = this.refs
    const { innerWidth, innerHeight } = window
    modal.style.top = (innerHeight / 2 - modal.clientHeight / 2) + 'px'
    modal.style.left = (innerWidth / 2 - modal.clientWidth / 2) + 'px'
    if (modal.offsetParent !== document.body) {
      console.log(1)
      modal.style.top = 0
      modal.style.left = 0
    }
    console.dir(modal)
  }

  toggleModal(e) {
    if (e.keyCode == 27) this.props.toggleHandler(e)
  }

  componentWillMount() {
    document.body.addEventListener('keyup', this.toggleModal)
  }

  componentWillUnmount() {
    document.body.removeEventListener('keyup', this.toggleModal)
  }

  componentDidMount() {
    this.getComputedPosition()
  }

  render() {
    const { toggleHandler, title, component } = this.props
    return <div className='modalist-wrapper' style={this.getWrapperStyle()}>
      <div
        className='modalist-backdrop'
        style={this.getBackdropStyle()}
        onClick={toggleHandler}
      />
      <div className='modalist-container' ref='modal' style={this.getContainerStyle()}>
        <div className='modalist-header'>{title}
          <a href='#' onClick={toggleHandler}>X</a>
        </div>
        <div className='modalist-body'>{component()}</div>
        <div className='modalist-footer'>modal foot</div>
      </div>
    </div>
  }

}

export default modalist
