import styled from "styled-components";
import Button from "../../../../../../reusable-ui/Button";
import SubmitMessage from "./SubmitMessage";
import { devices } from "../../../../../../../enums/devices";

export default function SubmitButton({ isSubmited }) {
  return (
    <>
      <SubmitButtonStyled>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version={"success"}
        />
        {isSubmited && <SubmitMessage />}
      </SubmitButtonStyled>
    </>
  );
}

const SubmitButtonStyled = styled.div`
  display: flex;
  height: 100%;

  @media ${devices.md} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70% 30%;
    align-items: center;
    gap: 10px;
  }
`;
