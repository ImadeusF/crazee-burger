import React from "react";
import styled from "styled-components";
import { Inputs } from "./Inputs";
import ImagePreview from "./ImagePreview";
import { devices } from "../../../../../../../enums/devices";

const Form = React.forwardRef(
  ({ product, onSubmit, onChange, onFocus, onBlur, children }, ref) => {
    return (
      <FormStyled onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <Inputs
          product={product}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
        />
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

  .form-footer {
    grid-area: submit-button;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }

  @media ${devices.md} {
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      "image-preview "
      "input-fields"
      "input-fields"
      "input-fields"
      "submit-button";
    width: 90%;
  }
`;
