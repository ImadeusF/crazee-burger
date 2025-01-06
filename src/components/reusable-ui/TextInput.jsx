import styled from "styled-components";
import { theme } from "../../../themes";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      <input
        value={value}
        onChange={onChange}
        type="text"
        {...extraProps}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
    background: ${theme.colors.white};
    border-radius: 5px;
    padding: 18px 24px;
    display: flex;
    align-items: center;
    margin: 18px 0;

    .icon {
    color:red;
    font-size: 15px;
    margin-right:8px;
    color: ${theme.colors.greyMedium};
    }

    input {
      border: none;
      font-size: 15px;
      width:100%;
    }

    &::placeholder {
      background: ${theme.colors.white};
      color: ${theme.colors.greyLight};
    }
`;