import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form";

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
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

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const displaySuccessMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2000);
  };

  return (
    <Form 
    product={newProduct}
    onSubmit={handleSubmit}
    onChange={handleChange}
    isSubmited={isSubmited}
    />
  );
}
