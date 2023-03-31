const size = {
  mobile: "767px",
  tablet: "768px",
  pc: "1024px",
};

const positionStyled = {
  center: [
    `position: absolute; top: 50%; left: 50%;transform: translate(-50%, -50%);width:100%;height:100%`,
  ],
};

const theme = {
  mainColor: "#01d8df",
  point: `var(--bs-point)`,
  subColor: "#1B1B1B",
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  positionCenter: `${positionStyled.center}`,
};

export default theme;
