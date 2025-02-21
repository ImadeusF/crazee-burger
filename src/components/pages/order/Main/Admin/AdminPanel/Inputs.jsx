import React from "react";
import styled from "styled-components";
import { getInputTextsConfig, getSelectInputConfig } from "./inputConfig";
import TextInput from "../../../../../reusable-ui/TextInput"
import SelectInput from "../../../../../reusable-ui/SelectInput"

export const Inputs = React.forwardRef(
    ({ product, onChange, onFocus, onBlur }, ref) => {
  const inputTexts = getInputTextsConfig(product);
  const inputSelects = getSelectInputConfig(product);

  return (
    <InputsStyled>
      {inputTexts.map((inputText) => (
        <TextInput
        name={inputText.name}
        value={inputText.value}
        placeholder={inputText.placeholder}
        Icon={inputText.Icon}
        // ou {...inputText} à la place des 4 lignes ci-dessus
        key={inputText.id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        version={"minimalist"}
        className={inputText.className}
        ref={ref && inputText.name === "title" ? ref : null}
      />
      ))}
      {inputSelects.map((inputSelect) => (
        <SelectInput key={inputSelect.id} onChange={onChange} onFocus={onFocus} onBlur={onBlur}
          {...inputSelect}
        />
      ))}
    </InputsStyled>
  );
});


const InputsStyled = styled.div`
  grid-area: input-fields;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "title title title"
    "image-source image-source image-source"
    "price is-available is-publicised";
  grid-row-gap: 8px;
  grid-column-gap: 8px;

  .title {
    grid-area: title;
  }
  .image-source {
    grid-area: image-source;
  }
  .price {
    grid-area: price;
  }
  .is-available {
    grid-area: is-available;
  }
  .is-publicised {
    grid-area: is-publicised;
  }
`;
