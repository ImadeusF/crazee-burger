import styled, { css } from "styled-components";
import { theme } from "../../themes";

export default function Button({ label, Icon, className, version = "normal", onClick, disabled, themeColor }) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick} disabled={disabled} $themeColor={themeColor}>
      <span>{label}</span>
      <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ version }) => extraStyle[version]}
`;

const extraStyleNormal = css`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  white-space: nowrap;
  text-decoration: none;
  line-height: 1;

  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.heavy};
  color: ${theme.colors.white};
  background: ${({ $themeColor }) => $themeColor || theme.colors.primary};
  /* background: ${({ $themeColor }) => $themeColor || theme.colors.primary}; */
  border: 1px solid ${({ $themeColor }) => $themeColor};
  cursor: pointer;

  &:active {
    color: ${({ $themeColor }) => $themeColor || theme.colors.primary};
    background: ${({ $themeColor }) => $themeColor || theme.colors.primary};
    border: 1px solid ${({ $themeColor }) => $themeColor};
  }

  &:hover:not(:disabled) {
    color: ${({ $themeColor }) => $themeColor || theme.colors.primary};
    background: ${theme.colors.white};
    border: 1px solid ${({ themeColor }) => themeColor};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    z-index: 2;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
  }
`;

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }

  :active {
    background: ${theme.colors.success};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.success};
  }
`;

const extraStyle = {
  normal: extraStyleNormal,
  success: extraStyleSuccess,
};
