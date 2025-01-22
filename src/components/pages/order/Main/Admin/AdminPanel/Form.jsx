import { useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import Button from "../../../../../reusable-ui/Button";
import ImagePreview from "./ImagePreview";
import SubmitMessage from "./SubmitMessage";
import { getInputTextsConfig } from "./inputTextsConfig";

export default function Form({product, onSubmit, onChange, isSubmited}) {

  const inputTexts = getInputTextsConfig(product);

  return (
    <FormStyled onSubmit={onSubmit}>
      <ImagePreview
        imageSource={product.imageSource}
        title={product.title}
      />
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
            version={"minimalist"}
          />
        ))}
      </div>
      <div className="submit">
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version={"success"}
        />
        {isSubmited && <SubmitMessage />}
      </div>
    </FormStyled>
  );
}

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
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: submit-button;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      height:100%;
    }
  }
`;
