import styled from "styled-components"

export default function EmptyMenuAdmin({onReset}) {
  return (
    <EmptyMenuAdminStyle>
       <span>Pas de produit</span>
       <button onClick={onReset}>Générer de nouveaux produits</button>
    </EmptyMenuAdminStyle>
  )
}

const EmptyMenuAdminStyle = styled.div`
`

