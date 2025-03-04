const breakpoints = Object.freeze({
    xs: "320px",
    xsm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1144px",
});

export const devices = {
    xs: `(max-width: ${breakpoints.xs})`,
    xsm: `(max-width: ${breakpoints.xsm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
    lgx: `(min-width: calc(${breakpoints.lg} + 1px))`,
    xl: `(max-width: ${breakpoints.xl})`,
  };