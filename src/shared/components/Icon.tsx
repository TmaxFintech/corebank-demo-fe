import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Icon24Assets, {
  type Icon24AssetKey,
} from '../../assets/icons/icon24/Icon24Assets';
import Icon16Assets, {
  type Icon16AssetKey,
} from '../../assets/icons/icon16/Icon16Assets';

interface IconBaseProps extends HTMLAttributes<HTMLDivElement> {
  size: '24' | '16';
  icon: React.ReactNode;
}

function IconBase({ size, icon, ...rest }: IconBaseProps) {
  return (
    <StyledIconBase size={size} {...rest}>
      {icon}
    </StyledIconBase>
  );
}

const getIconBaseStyle = (size: IconBaseProps['size']) => {
  return {
    width: size === '24' ? '24px' : '16px',
    height: size === '24' ? '24px' : '16px',
  };
};

const StyledIconBase = styled.div<Pick<IconBaseProps, 'size'>>`
  ${({ size }) => getIconBaseStyle(size)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Icon24Props extends Omit<IconBaseProps, 'size' | 'icon'> {
  iconName: Icon24AssetKey;
}

function Icon24({ iconName, ...rest }: Icon24Props) {
  const Icon = Icon24Assets[iconName];
  return <IconBase {...rest} size="24" icon={<Icon />} />;
}

interface Icon16Props extends Omit<IconBaseProps, 'size' | 'icon'> {
  iconName: Icon16AssetKey;
}

function Icon16({ iconName, ...rest }: Icon16Props) {
  const Icon = Icon16Assets[iconName];
  return <IconBase {...rest} size="16" icon={<Icon />} />;
}

export { Icon16, Icon24 };
