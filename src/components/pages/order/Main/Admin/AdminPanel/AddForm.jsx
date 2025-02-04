import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../utils/maths";

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const {isSubmited, displaySuccessMessage} = useSuccessMessage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
      price: replaceFrenchCommaWithDot(newProduct.price),
    };
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };


  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmited={isSubmited}
    >
      <SubmitButton isSubmited={isSubmited} />
    </Form>
  );
}
