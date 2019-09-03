import React from 'react';
import glamorous from 'glamorous';
import Button from '../../components/home/button.jsx';
// import Comp from './comp-structure.svg';

const Page = glamorous.div({
  display: 'flex',
  flexDirection: 'column'
});

const Svg = glamorous.div({
  width: 500,
  height: 500
});

const Home = () => {
  return (
    <Page>
      <Svg>
        {/* <Comp /> */}
        <div>image</div>
      </Svg>
      <Button />
    </Page>
  );
};

export default Home;
