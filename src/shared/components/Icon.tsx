import type { SVGProps } from 'react';
import Icon24Assets, {
  type Icon24AssetKey,
} from '../../assets/icons/icon24/icon24Assets';
import Icon16Assets, {
  type Icon16AssetKey,
} from '../../assets/icons/icon16/icon16Assets';

// IconBase로의 확장 대비
interface IconBaseProps extends SVGProps<SVGSVGElement> {}

// 나중에 Styled(Icon24)와 같이 사용할 수 있도록 export
export interface Icon24Props extends IconBaseProps {
  iconName: Icon24AssetKey;
}

export function Icon24({ iconName, ...rest }: Icon24Props) {
  const Icon = Icon24Assets[iconName];
  return <Icon {...rest} width="24  " height="24" />;
}

// 나중에 Styled(Icon16)와 같이 사용할 수 있도록 export
export interface Icon16Props extends IconBaseProps {
  iconName: Icon16AssetKey;
}

export function Icon16({ iconName, ...rest }: Icon16Props) {
  const Icon = Icon16Assets[iconName];
  return <Icon {...rest} width="16" height="16" />;
}
