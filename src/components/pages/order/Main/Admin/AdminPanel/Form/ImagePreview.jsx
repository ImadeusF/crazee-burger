import styled, { keyframes } from "styled-components";
import { theme } from "../../../../../../../themes";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <div className="empty-image">Aucune image</div>
      )}
    </ImagePreviewStyled>
  );
}

const ImagePreviewStyled = styled.div`
  grid-area: image-preview;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    object-position: center;
    animation: ${fadeIn} 1s;
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
`;
