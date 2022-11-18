import React from 'react';
import Introduction from '../components/IntroductionComponent/Introduction';


function TestComponent(props: any) {
  return (
    <>
      <h1>Hello, {props.name}</h1>
      <Introduction></Introduction>
    </>
  );
}

export default TestComponent;