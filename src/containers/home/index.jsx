/* eslint-disable no-return-assign */
/* eslint-disable func-names */
import React, { Component } from 'react';
import glamorous from 'glamorous';
import anime from 'animejs';
import Button from '../../components/home/button.jsx';
import { ReactComponent as Comp } from './comp.svg';

const Page = glamorous.div({
  display: 'flex',
  flexDirection: 'row'
});

const Svg = glamorous.div({
  width: '50vw',
  height: '100%'
});

class Home extends Component {
  componentDidMount() {
    const wrapChildren = this.wrapper.children;
    for (let i = 0; i < wrapChildren.length; i += 1) {
      anime({
        targets: wrapChildren[i],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        // eslint-disable-next-line object-shorthand
        delay: function(el, j) {
          return j * 250;
        },
        direction: 'alternate',
        loop: false
      });
    }
  }

  render() {
    return (
      <Page>
        <Button />
        <Svg>
          <Comp ref={ref => (this.wrapper = ref)} title="React Components" />
        </Svg>
      </Page>
    );
  }
}

export default Home;
