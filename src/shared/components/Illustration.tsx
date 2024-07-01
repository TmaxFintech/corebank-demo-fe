import { SVGProps } from 'react';
import illustration40Assets, { Illustration40AssetsKey } from '../../assets/illustration-40';

export const Illustration = ({
  illustrationName,
  ...rest
}: SVGProps<SVGSVGElement> & { illustrationName: Illustration40AssetsKey }) => {
  const Illustration = illustration40Assets[illustrationName];
  return <Illustration {...rest} />;
};
