import React, { createRef, useEffect, useState } from 'react';
import glamorous from 'glamorous';
import anime from 'animejs';
import { ButtonText1, ButtonText2 } from './button-text';

const text = ['Hello', 'I am Domonic', 'BUTTON', 'I build components', 'In React'];

const Bt = glamorous.div({
  width: '50vw',
  height: 250,
  background: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ' > div': {
    display: 'flex',
    ' > span': {
      fontSize: 50
    }
  }
});

const Button = () => {
  const [index, setIndex] = useState(0);
  const bxRef = createRef();

  const anim = () => {
    const time = anime.timeline();
    time
      .add({
        targets: bxRef.current,
        borderRadius: [0, 80],
        easing: 'easeInOutQuad',
        duration: 5000
      })
      .add({
        targets: bxRef.current,
        backgroundColor: '#5EF3FB',
        boxShadow: '10px 10px 5px 0px rgba(0,0,0,1)',
        borderColor: '#000',
        scale: 0.5,
        delay: 3000,
        translateX: -400,
        easing: 'easeInOutQuad',
        offset: 1000
      });
  };

  const handleIndexChange = () => {
    setIndex(index + 1);
  };

  useEffect(() => {
    anim();
  }, []);

  return (
    <Bt innerRef={bxRef}>
      {index === 0 && <ButtonText1 text={text[0]} handleIndexChange={handleIndexChange} />}
      {index === 1 && <ButtonText2 text={text[1]} handleIndexChange={handleIndexChange} />}
      {index === 2 && <ButtonText2 text={text[2]} handleIndexChange={handleIndexChange} />}
      {index === 3 && <ButtonText2 text={text[3]} handleIndexChange={handleIndexChange} />}
      {index === 4 && <ButtonText2 text={text[4]} handleIndexChange={handleIndexChange} />}
    </Bt>
  );
};

export default Button;

// Notes: greeting then name translates to top left and changes
// Show component tree structure to right and react icon
// Then parts of screen flip to reveal other skills
// button then translates to bottom left and splits to separate buttons that say BUTTON
// then text changes to links Portfolio, About, Contact
