import styled from "styled-components";
import { motion } from "motion/react";

export default function CasinoEffect({ count, className }) {
  return (
    <CasinoEffectStyled>
      <motion.span
        key={count}
        initial={{ y: 100, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3, 
          ease: "easeOut", 
        }}
      >
        <span className={className}>{count}</span>
      </motion.span>
    </CasinoEffectStyled>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow: hidden;

  span {
    display: inline-block;
  }
`;
