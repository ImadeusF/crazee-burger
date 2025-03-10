import styled from "styled-components";
import { theme } from "../../../../../../../themes";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { saveThemeColor } from "../../../../../../../api/theme";

export default function ThemeColors() {
  const { username, themeColor, setThemeColor } = useContext(OrderContext);

  const initialThemeColor = themeColor || theme.themecolors.orange;

  const [pickColor, setPickColor] = useState(initialThemeColor);

  useEffect(() => {
    document.body.style.backgroundColor = themeColor;
  }, [themeColor]);

  const handleChangeColor = (color) => {
    setPickColor(color);
    setThemeColor(color)
    saveThemeColor(username, color);
  };

  return (
    <ThemeColorsStyled>
      Choisissez la couleur de votre thème :
      <div className="colorchoice">
        {Object.entries(theme.themecolors).map(([key, color]) => (
          <button
            key={key}
            className={key}
            style={{ backgroundColor: color }}
            onClick={() => handleChangeColor(color)}
          ></button>
        ))}
      </div>
    </ThemeColorsStyled>
  );
}

const ThemeColorsStyled = styled.div`
  text-align: left;
  flex: 1;
  justify-content: center;
  align-self: center;
  line-height: 2;
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.greyBlue};

  .colorchoice {
    display: flex;
    gap: 20px;

    button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
