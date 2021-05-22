import {React, useRef, PureComponent} from 'react';
import useStyle from '../styles';
import {Typography, Container, Grid, Box, IconButton, CssBaseline } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default class CarouselClass extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasOverflow: false,
      canScrollLeft: false,
      canScrollRight: false
    }
  }
  this.checkForOverflow = this.checkForOverflow.bind(this)
  this.checkForScrollPosition = this.checkForScrollPosition.bind(this)

  this.debounceCheckForOverflow = debounce(this.checkForOverflow, 1000)
  this.debounceCheckForScrollPosition = debounce(
    this.checkForScrollPosition,
    200
  )

  this.container = null

  componentDidMount() {
    this.checkForOverflow()
    this.checkForScrollPosition()

    this.container.addEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
  }

  componentWillUnmount() {
    this.container.removeEventListener(
      'scroll',
      this.debounceCheckForScrollPosition
    )
    this.debounceCheckForOverflow.cancel()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items.length !== this.state.items.length) {
      this.checkForOverflow()
      this.checkForScrollPosition()
    }
  }

  checkForScrollPosition() {
    const { scrollLeft, scrollWidth, clientWidth } = this.container

    this.setState({
      canScrollLeft: scrollLeft > 0,
      canScrollRight: scrollLeft !== scrollWidth - clientWidth
    })
  }

  checkForOverflow() {
    const { scrollWidth, clientWidth } = this.container
    const hasOverflow = scrollWidth > clientWidth

    this.setState({ hasOverflow })
  }
}