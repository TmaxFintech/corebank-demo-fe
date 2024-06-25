import styled from 'styled-components';

function Test() {
  return (
    <div>
      <STestHello hello={'world'}>T-MAX</STestHello>
    </div>
  );
}

export default Test;

const STestHello = styled.div<{ hello: string }>(({ theme, hello }) => ({
  ...theme.fontStyle.body1,
  fontWeight: theme.font.semibold,
  boxShadow: theme.elevations.level3,
  position: 'relative',
  padding: '1rem',
  ...(hello === 'world'
    ? { color: theme.color.textStrongWhite, background: theme.color.primaryGradation }
    : { color: theme.color.blue40, background: 'lightgray' }),
}));
