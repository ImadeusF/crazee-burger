import Button from "../../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";

export default function SubmitButton({isSubmited}) {
  return (
    <>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version={"success"}
        />
        {isSubmited && <SubmitMessage />}
      </>
  )
}

