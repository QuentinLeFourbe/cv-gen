export const theme = {
  extend: {
    tokens: {
      colors: {
        darkdarkBlue: { value: "#213547" },
        greyLight: { value: "grey" },
        duckTeal: { value: "#01717D" },
        white: { value: "#fff" },
        yellowLight: { value: "#FFF7A3" },
        darkBlue: { value: "#293156" },
        middleBorder: { value: "#f2d78e" },
      },
      fonts: {
        body: { value: "var(--font-roboto), sans-serif" },
        heading: { value: "var(--font-playfair), serif" },
      },
    },
    semanticTokens: {
      colors: {
        cv: {
          header: {
            text: { value: "{colors.darkBlue}" },
            background: { value: "{colors.yellowLight}" },
          },
          title: {
            text: { value: "{colors.white}" },
            background: { value: "{colors.duckTeal}" },
          },
          text: {
            primary: { value: "{colors.darkdarkBlue}" },
            secondary: { value: "{colors.greyLight}" },
          },
        },
        textInverse: { value: "{colors.white}" },
      },
    },
  },
};

export default theme;
