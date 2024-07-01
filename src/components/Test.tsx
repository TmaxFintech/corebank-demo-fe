import styled from 'styled-components';
import { Illustration } from '../shared/components/Illustration';

function Test() {
  return (
    <div>
      <STestHello hello={'world'}>T-MAX</STestHello>
      <Illustration illustrationName='Charge' />
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
