import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextsConfig";
import SelectInput from "../../../../../reusable-ui/SelectInput";

const isAvailableOptions = [
  { value: true, label: "En stock" },
  { value: false, label: "Rupture" },
];
const isPublicisedOptions = [
  { value: true, label: "Avec pub" },
  { value: false, label: "Sans pub" },
];

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, onBlur, children }, ref) => {
    const inputTexts = getInputTextsConfig(product);

    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className="input-fields">
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
          <SelectInput
            options={isAvailableOptions}
            className="is-available"
            id="3"
          />
          <SelectInput
            options={isPublicisedOptions}
            className="is-publicised"
            id="4"
          />
        </div>
        <div className="form-footer">{children}</div>
      </FormStyled>
    );
  }
);

export default Form;

const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "image-preview input-fields"
    "image-preview input-fields"
    "image-preview input-fields"
    ". submit-button";

  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
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
      background: red;
    }
    .is-available {
      grid-area: is-available;
      background: pink;
    }
    .is-publicised {
      grid-area: is-publicised;
      background: yellow;
    }
  }

  .form-footer {
    grid-area: submit-button;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
