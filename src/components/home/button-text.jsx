/* eslint-disable no-plusplus */
// import React, { useState, useEffect, useRef } from 'react';
import React from 'react';
import glamorous from 'glamorous';
import Typist from 'react-typist';

const Text = glamorous.div({
  width: '100%',
  fontSize: 50
});

export const ButtonText1 = ({ text, handleIndexChange }) => {
  if (text) {
    return (
      <Typist
        avgTypingDelay={300}
        startDelay={2000}
        cursor={{ hideWhenDone: true }}
        onTypingDone={handleIndexChange}
      >
        <Text>{text}</Text>
        <Typist.Backspace count={5} delay={1000} />
        <Typist.Delay ms={200} />
      </Typist>
    );
  }
  return null;
};

export const ButtonText2 = ({ text, handleIndexChange }) => {
  if (text) {
    return (
      <Typist
        avgTypingDelay={180}
        startDelay={2000}
        cursor={{ hideWhenDone: true }}
        onTypingDone={handleIndexChange}
      >
        <Text>{text}</Text>
        <Typist.Delay ms={3000} />
      </Typist>
    );
  }
  return null;
};
