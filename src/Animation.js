import React from 'react'

import { Tween, Reveal } from 'react-gsap';


const FadeInText= ({ children }) => (
    <Reveal repeat >
    <Tween from={{ opacity: 0 }} duration={2}>
      {children}
    </Tween>
    </Reveal>
  );

const FadeInDown = ({ children }) => (
    <Reveal repeat >
    <Tween from={{ opacity: 0, transform: 'translate3d(0, 10vh, 0)' }}  ease="ease.out(1.4)">
      {children}
    </Tween>
    </Reveal>
  );

const FadeInUp = ({ children }) => (
    <Reveal repeat >
    <Tween from={{ opacity: 0, transform: 'translate3d(0, 10vh, 0)' }}
ease="ease.out(1.4)">
      {children}
    </Tween>
    </Reveal>
  );

  const FadeInUpImg = ({ children }) => (
    <Reveal repeat >
    <Tween from={{ opacity: 0, duration: 1.4 , transform: 'translate3d(0, -5vh, 0)' }}>
      {children}
    </Tween>
    </Reveal>
  );

const FadeInLeft = ({ children }) => (
    <Reveal repeat >
    <Tween from={{ opacity: 0, transform: 'translate3d(10vw, 0, 0)' }}
    ease="ease.out(2.4)">
      {children}
    </Tween>
    </Reveal>
  );

  const FadeInFullLeft = ({ children }) => (
    <Reveal repeat >
    <Tween from={{ opacity: 0, transform: 'translate3d(-10vw, 0, 0)' }}
    ease="ease.out(2.4)">
      {children}
    </Tween>
    </Reveal>
  );

const FadeInRight = ({ children }) => (
    <Reveal repeat >
    <Tween from={{ opacity: 0, transform: 'translate3d(42px, 62px, 135px)' }}
    ease="ease.out(2.4)">
      {children}
    </Tween>
    </Reveal>
  );

const FadeInUpBtn = ({ children }) => (
    <Reveal repeat >
        <Tween from={{ opacity: 0, transform: 'translate3d(0, 5vh, 0)' }}
ease="ease.out(1.4)">

    {children}
</Tween>
    </Reveal>
);

const FadeInUpContainer = ({ children }) => (
    <Reveal >
        <Tween from={{ opacity: 0, transform: 'translate3d(0, 100vh, 0)' }} duration= {1}
ease="ease.out(1.4)">

    {children}
</Tween>
    </Reveal>
);

const FadeInImg = ({ children }) => (
  <Reveal repeat >
  <Tween from={{ opacity: 0, background: "#fff" }} duration={0.2}>
    {children}
  </Tween>
  </Reveal>
);


export { FadeInText, FadeInDown, FadeInUp, FadeInUpImg, FadeInLeft, FadeInRight, FadeInUpBtn, FadeInUpContainer, FadeInImg, FadeInFullLeft}
