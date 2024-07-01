import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface BadgeProps extends HTMLAttributes<HTMLElement> {
  size?: 'md' | 'lg';
  bg?: boolean;
  color?: 'primary' | 'neutral';
  dot?: boolean;
  componentAs?: string;
}

export default function Badge({
  color = 'neutral',
  bg = true,
  size = 'md',
  dot = false,
  componentAs = 'span',
  ...rest
}: BadgeProps) {
  return <SBadge $color={color} $bg={bg} $size={size} $dot={dot} as={componentAs} {...rest} />;
}

const SBadge = styled.span<{
  $color: 'primary' | 'neutral';
  $bg: boolean;
  $size: 'md' | 'lg';
  $dot: boolean;
}>(({ theme: { spacing, color, radius, fontStyle, fontWeight }, $color, $size, $bg, $dot }) => ({
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

  ...($dot && {
    padding: 0,
    width: '5px',
    height: '5px',
    borderRadius: radius.radiusFull,
    backgroundColor: color.primaryNormal,
    overflow: 'hidden',
  }),
}));
