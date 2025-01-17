import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../themes";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";
import { BsFillCameraFill } from "react-icons/bs";
import Button from "../../../../../reusable-ui/Button";

const EMPTY_PRODUCT = {
  id: 0,
  title: "",
  imageSource: "",
  price: 0,
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const displaySuccessMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">
        {newProduct.imageSource ? (
          <img src={newProduct.imageSource} alt={newProduct.title} />
        ) : (
          <div className="empty-image">Aucune image</div>
        )}
      </div>
      <div className="input-fields">
        <TextInput
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom du produit (ex: Super Burger)"
          onChange={handleChange}
          Icon={<FaHamburger />}
          version={"minimalist"}
        />
        <TextInput
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          onChange={handleChange}
          Icon={<BsFillCameraFill />}
          version={"minimalist"}
        />
        <TextInput
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
          Icon={<MdOutlineEuro />}
          version={"minimalist"}
        />
      </div>
      <div className="submit">
        <Button 
        className="submit-button"
        label={"Ajouter un nouveau produit au menu"}
        version={"success"}
         />
        {isSubmited && (
          <div className="submit-message">
            <FiCheck />
            <span>Ajouté avec succès</span>
          </div>
        )}
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
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

  .image-preview {
    grid-area: image-preview;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    .empty-image {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.greylight};
      line-height: 1.5;
      color: ${theme.colors.greySemiDark};
      border-radius: ${theme.borderRadius.round};
    }
  }

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

    .submit-button {
      width: 50%;
    }

    .submit-message {
      width: 50%;
      padding-left: 20px;
    }
  }
`;
