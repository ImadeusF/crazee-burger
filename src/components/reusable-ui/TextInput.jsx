import styled from "styled-components";
import { theme } from "../../themes";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      <div className="icon">{Icon && Icon}</div>
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;
  display: flex;
  align-items: center;
  margin: 18px 0;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.SM};
    margin-left: 10px;
    margin-right: 8px;
    color: ${theme.colors.greySemiDark};
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyMedium};
    }
  }
`;
