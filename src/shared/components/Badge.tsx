import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface BadgeProps extends HTMLAttributes<HTMLElement> {
  size?: 'md' | 'lg';
  bg?: boolean;
  color?: 'primary' | 'neutral';
  componentAs?: string;
}
/**
 *
 * @param color 뱃지의 색상입니다 (default: neutral)
 * @param bg - 배경이 있는지 유무 입니다 (default: true)
 * @param size - 뱃지의 크기입니다 (default: md)
 * @param componentAs - 어떤 tag로 렌더링 할지 (default: span)
 * @returns
 */
export default function Badge({
  color = 'neutral',
  bg = true,
  size = 'md',
  componentAs = 'span',
  ...rest
}: BadgeProps) {
  return <SBadge $color={color} $bg={bg} $size={size} as={componentAs} {...rest} />;
}

const SBadge = styled.span<{
  $color: 'primary' | 'neutral';
  $bg: boolean;
  $size: 'md' | 'lg';
}>(({ theme: { spacing, color, radius, fontStyle, fontWeight }, $color, $size, $bg }) => ({
  display: 'inline-flex',
  width: 'fit-content',
  height: '100%',
  borderRadius: radius.radius240,
  color: $color === 'neutral' ? color.neutral70 : color.turquoise60,
  backgroundColor: $color === 'neutral' ? color.neutral10 : color.turquoise05,
  ...(!$bg && { background: 'none' }),
  padding: `${$size === 'md' ? spacing.spacing20 : spacing.spacing40} ${spacing.spacing80}`,
  ...($size === 'md' ? fontStyle.caption2 : fontStyle.caption1),
  fontWeight: $size === 'md' ? fontWeight.regular : fontWeight.medium,
}));
