import styled from "styled-components";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyle>
     Il n'y a pas de produit client pour le moment.
    </EmptyMenuClientStyle>
  );
}

const EmptyMenuClientStyle = styled.div``;
