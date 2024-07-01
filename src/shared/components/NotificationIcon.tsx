import styled from 'styled-components';

import { Icon24, Icon16 } from './Icon';
import theme from '../../styles/theme';
import type { Icon24AssetKey } from '../../assets/icons/icon24/icon24Assets';
import type { Icon16AssetKey } from '../../assets/icons/icon16/icon16Assets';

type NotificationIconSize = '24' | '16';
type NotificationType =
  | 'default'
  | 'error'
  | 'caution'
  | 'success'
  | 'information';

interface NotificationIconProps {
  size: NotificationIconSize;
  type: NotificationType;
}

export default function NotificationIcon({
  size,
  type,
}: NotificationIconProps) {
  const Icon = size === '24' ? Icon24 : Icon16;
  const iconName = iconNameMap[type];
  return (
    <StyledNotificationIcon $size={size} $type={type}>
      <Icon iconName={iconName} />
    </StyledNotificationIcon>
  );
}

const iconNameMap = {
  default: 'Error',
  error: 'Error',
  caution: 'Error',
  success: 'Complete',
  information: 'Complete',
} satisfies { [key in NotificationType]: Icon16AssetKey | Icon24AssetKey };

const colorMap = {
  default: theme.color.neutral50,
  error: theme.color.negative,
  caution: theme.color.cautionary,
  success: theme.color.positive,
  information: theme.color.information,
};

const StyledNotificationIcon = styled.div<{
  $size: NotificationIconSize;
  $type: NotificationType;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  svg {
    // Notification Icon의 경우 box size는 기존 icon과 동일하나 svg의 크기가 다름
    width: ${({ $size }) => ($size === '24' ? '20px' : '16px')};
    height: ${({ $size }) => ($size === '24' ? '20px' : '16px')};
    path:first-child {
      fill: ${({ $type }) => colorMap[$type]};
    }
  }
`;
