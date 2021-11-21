import React from 'react';
import styled from 'styled-components';
import cartoonImage from '../../images/cartoon_image.png';

const AvatarWrapper = styled.div`
  display: flex;
  border: 1px solid grey;
  align-items: center;
  padding: 1rem;
`;

const AvatarBody = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  src: ${(props) => props.src};
`;

const Avatar = ({ message }) => {
  return (
    <AvatarWrapper>
      <AvatarBody src={cartoonImage}></AvatarBody>
      {message}
    </AvatarWrapper>
  );
};

export default Avatar;
