import styled from "styled-components";
import { theme } from "../../../../../../../themes";
import { FiCheck } from "react-icons/fi";
import { devices } from "../../../../../../../enums/devices";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <FiCheck className="icon" />
      <span className="message">Ajouté avec succès !</span>
    </SubmitMessageStyled>
  );
}

const SubmitMessageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  .icon {
    color: ${theme.colors.success};
    margin-left: 10px;
    width: 1em;
    height: 1em;
    border: 1px solid ${theme.colors.success};
    border-radius: 50%;
  }

  .message {
    margin-left: 5px;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.success};
  }

  @media ${devices.md} {
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-top: 10px;
  }
`;
