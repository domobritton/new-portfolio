import React, { createRef, useEffect, useState } from 'react';
import glamorous from 'glamorous';
import anime from 'animejs';
import { ButtonText1, ButtonText2 } from './button-text';

const text = ['Hello', 'Button', 'I build components'];

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
        duration: 2000
      })
      .add({
        targets: bxRef.current,
        backgroundColor: '#dfadfa',
        border: '30px solid',
        borderColor: '#000',
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
    </Bt>
  );
};

export default Button;
