import styled from "styled-components"

export default function SelectInput({ value, options, name, className, id, Icon, onChange }) {
  return (
    <SelectInputStyled value={value} name={name} className={className} id={id} onChange={onChange} >
    {options.map(({value, label}) => (
      <option key={label} value={value}>
        {label}
      </option>
    ))}
  </SelectInputStyled>
  )
}

const SelectInputStyled = styled.select`
border: 1px solid red;
`
