import React from 'react';
import { Image } from 'react-bootstrap';
import CvPicture from '../../images/cvPicture.jpeg';

const Introduction: React.FC = () => {

  return (
    <>
      <Image src={CvPicture} alt='Image not found'
        width={330}
        height={350}
        className='ml-5 mr-n5'
        rounded></Image>
    </>
  );
}

export default Introduction;