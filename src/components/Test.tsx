import styled from 'styled-components';
import Badge from '../shared/components/Badge';

function Test() {
  return (
    <div>
      <STestHello hello={'world'}>T-MAX</STestHello>
      <div style={{ display: 'flex', gap: 8 }}>
        <Badge>99</Badge>
        <Badge size='lg'>99</Badge>
      </div>
      <div>
        <Badge color='primary'>99</Badge>
        <Badge color='primary' size='lg'>
          99
        </Badge>
      </div>
      <div>
        <Badge color='primary' size='lg' bg={false}>
          99
        </Badge>

        <Badge color='primary' size='lg' bg={false}>
          99
        </Badge>
      </div>
      <CustomBadge size='lg'>99</CustomBadge>
    </div>
  );
}

export default Test;

const CustomBadge = styled(Badge)`
  padding: 2rem;
  color: #fff;
`;

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
