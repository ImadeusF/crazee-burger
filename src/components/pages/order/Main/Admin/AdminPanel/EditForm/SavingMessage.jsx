import styled from "styled-components";
import { theme } from "../../../../../../../themes";
import { BsCloudCheck } from "react-icons/bs";

export default function SavingMessage() {
  return (
    <SavingMessageStyled>
      <div className="icon">
        <BsCloudCheck />
      </div>
      <span className="sentence">Modifications enregistrées !</span>
    </SavingMessageStyled>
  );
}

const SavingMessageStyled = styled.div`
  display: flex;
  color: ${theme.colors.blue};
  font-size: ${theme.fonts.size.SM};

  .icon {
    font-size: ${theme.fonts.size.P2};
    display: flex;
    margin: 0 10px;
  }
`;
