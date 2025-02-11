import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
  const {
    username,
    productSelected,
    setProductSelected,
    handleEdit,
    titleEditRef,
  } = useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmited : isSaved, displaySuccessMessage } = useSuccessMessage();

  const handleChange = (e) => {
    //On modifie le state interne de EditForm
    const productBeingUpdated = {
      ...productSelected,
      [e.target.name]: e.target.value,
    };
    setProductSelected(productBeingUpdated); //Cette ligne update le formulaire
    handleEdit(productBeingUpdated, username); //Cette ligne édite le menu
  };

  const handleOnFocus = (e) => {
    const valueOnFocus = e.target.value;
    setValueOnFocus(valueOnFocus);
  };

  const handleOnBlur = (e) => {
    const valueOnBlur = e.target.value;
    if(valueOnFocus !== valueOnBlur){
      displaySuccessMessage();
    }
  };

  return (
    <Form
      product={productSelected}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      ref={titleEditRef}
    >
      { isSaved ? <SavingMessage /> : <EditInfoMessage /> }
    </Form>
  );
}
