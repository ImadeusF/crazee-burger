import styled from "styled-components";
import { theme } from "../../themes";

export default function SelectInput({
  value,
  options,
  name,
  className,
  id,
  Icon,
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <SelectInputStyled className={className}>
      {Icon && <div className="icon">{Icon}</div>}
      <select name={name} value={value} id={id} onChange={onChange} onBlur={onBlur} onFocus={onFocus}>
      {options.map(({ optionValue, label }) => (
        <option key={label} value={optionValue}>
          {label}
        </option>
      ))}
      </select>
    </SelectInputStyled>
  );
}

const SelectInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;

  .icon {
    font-size: ${theme.fonts.size.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex; //centre verticlament l'icone dans le select
  }

  select {
    background: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
`;
