import React from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextsConfig";

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
      "price extra1 extra2";
    grid-row-gap: 8px;

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
    .extra1 {
      grid-area: extra1;
      background: yellow;
    }
    .extra2 {
      grid-area: extra2;
      background: green;
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
