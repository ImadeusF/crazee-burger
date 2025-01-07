import styled from "styled-components";
import { theme } from "../../themes";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyle>
      <span>{label}</span>
      {Icon && Icon}
    </PrimaryButtonStyle>
  );
}

const PrimaryButtonStyle = styled.button`
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
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weights.heavy};
  color: ${theme.colors.white};
  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};

  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
  }

  &:hover:not(:disabled) {
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
