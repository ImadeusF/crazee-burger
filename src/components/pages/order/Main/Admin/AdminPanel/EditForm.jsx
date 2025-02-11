import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  const { username, productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const handleChange = (e) => {
    //On modifie le state interne de EditForm
    const productBeingUpdated = {
      ...productSelected,
      [e.target.name]: e.target.value,
    };
    setProductSelected(productBeingUpdated); //Cette ligne update le formulaire
    handleEdit(productBeingUpdated, username); //Cette ligne édite le menu
  };

  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
