import styled from 'styled-components';
import Charge from '../assets/illustration-40/Charge.svg?react';
import chargeSrc from '../assets/illustration-40/Charge.svg';

function Test() {
  return (
    <div>
      <STestHello hello={'world'}>T-MAX</STestHello>
      <Charge width={60} height={60} />
      <img src={chargeSrc} alt='' />
    </div>
  );
}

export default Test;

const STestHello = styled.div<{ hello: string }>(({ theme, hello }) => ({
  ...theme.fontStyle.body3,
  fontWeight: theme.fontWeight.semibold,
  boxShadow: theme.elevation.bottomNavigation,
  position: 'relative',
  padding: '1rem',
  ...(hello === 'world'
    ? { color: theme.color.textStrongWhite, background: theme.color.primaryGradation }
    : { color: theme.color.blue40, background: 'lightgray' }),
}));
