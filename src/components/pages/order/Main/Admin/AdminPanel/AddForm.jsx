import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview">image-preview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
        </div>
      <div className="submit-button">submit-button</div>
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
  border:2px solid black;
  margin: 20px;

  .image-preview {
    grid-area: image-preview;
    background: red;
  }

  .input-fields {
    grid-area: input-fields;
    background: blue;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }

  .submit-button {
    grid-area: submit-button;
    background: green;
  }

  p {
    padding: 40px;
  }
`;
