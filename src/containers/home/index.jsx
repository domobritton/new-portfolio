import React from 'react';
import glamorous from 'glamorous';
import Button from '../../components/home/button.jsx';

const Page = glamorous.div({
  display: 'flex',
  flexDirection: 'column'
});

const Home = () => {
  return (
    <Page>
      <Button />
    </Page>
  );
};

export default Home;
