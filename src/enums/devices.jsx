const breakpoints = Object.freeze({
    xs: "320px",
    xsm: "480px",
    md: "768px",
    lg: "1024px",
});

export const devices = {
    xs: `(max-width: ${breakpoints.xs})`,
    xsm: `(max-width: ${breakpoints.xsm})`,
    md: `(max-width: ${breakpoints.md})`,
    lg: `(max-width: ${breakpoints.lg})`,
  };