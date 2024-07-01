import styled, { RuleSet, css } from "styled-components";
import radius from "../../styles/constants/radius";
import colors from "../../styles/constants/colors";
import fonts from "../../styles/constants/fonts";
import spacing from "../../styles/constants/spacing";
import { ButtonHTMLAttributes } from "react";

interface FixedTextButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>,'type'> {
    size : 'lg' | 'md' | 'sm';
    type : 'primary1' | 'primary2' | 'primary3' | 'secondary1' | 'action1';
    children? : React.ReactNode;
}

interface StyleProps {
    $sizeStyle : RuleSet<object>;
    $typeStyle : RuleSet<object>;
}

const SIZES = {
    lg : css`${fonts.fontStyle.body2} width : 100px; height : 48px; padding : ${spacing.spacing80} ${spacing.spacing240};`,
    md : css`${fonts.fontStyle.caption1} width : 80px; height : 40px; padding : ${spacing.spacing80} ${spacing.spacing160};`,
    sm : css`${fonts.fontStyle.caption2} width : 68px; height : 32px; padding : ${spacing.spacing80} ${spacing.spacing120};`,
}

const TYPES = {
  primary1 : css`background-color : ${colors.primaryLight}; border : none;  --hover-shadow-color : ${colors.common100}; --hover-shadow-opacity : 0.04;`,
  primary2 : css`background-color : white; border : 1px solid ${colors.primaryNormal}; color : ${colors.turquoise30}; --hover-color : ${colors.primaryLight}; --hover-shadow-color : ${colors.common0}; --hover-shadow-opacity : 0.88; `,
  primary3 : css`background-color : white; border : none; color : ${colors.turquoise30}; --hover-shadow-color : ${colors.common0}; --hover-shadow-opacity : 0.88;`,
  secondary1 : css`background-color : white; border : 1px solid ${colors.neutral70}; --hover-shadow-color : ${colors.common100}; --hover-shadow-opacity : 0.04;`,
  action1 : css`background-color : ${colors.turquoise90}; border : none; color : ${colors.common0}; --hover-shadow-color : ${colors.common0}; --hover-shadow-opacity : 0.08;`,
}

function FixedTextButton ({size, type,children} : FixedTextButtonProps ) {
    const sizeStyle = SIZES[size];
    const typeStyle = TYPES[type];
 return <StyledButton  $sizeStyle = {sizeStyle} $typeStyle = {typeStyle}>{children}</StyledButton>

};

const StyledButton = styled.button<StyleProps>`
    position: relative;
    border : none;
    cursor: pointer;
    font-weight : ${fonts.fontWeight.medium};
    border-radius: ${radius.radius80};
    ${(props) => props.$sizeStyle}
    ${(props) => props.$typeStyle}
    background-blend-mode : multiply;

    &:hover {
        background-color: var(--hover-color,white);
    }

    &::before {
        content : '';
        position: absolute;
        top : 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--hover-shadow-color, white);
        opacity: 0;
        border-radius: ${radius.radius80};
    }
    &:hover::before {
        opacity : var(--hover-shadow-opacity, 0);
    }

    & span {
        position: relative;
    }

  &:active {
    color : ${colors.turquoise30};
  }

  &:disabled {
    cursor: default;
    background-color: ${colors.backgroundNormal};
    color : ${colors.textAssistive};
  }
`

export default FixedTextButton;