import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextsConfig";
import TextInput from "../../../../../reusable-ui/TextInput";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext); 
  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (e) => {
    //On modifie le state interne de EditForm
    const productBeingUpdated = {
      ...productSelected,
      [e.target.name]: e.target.value,
    };
    setProductSelected(productBeingUpdated); //Cette ligne update le formulaire
    handleEdit(productBeingUpdated); //Cette ligne édite le menu
  };

  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
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
            onChange={handleChange}
            version={"minimalist"}
            ref={inputText.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit"></div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.div`
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
      height: 100%;
    }
  }
`;
