import styled from "@emotion/styled";

export const Theme = {
    colors: {
        primary: "#ad9e75",
        secondary: "#1d1d1d",
    },
    fonts: {
        Light: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-style: normal;
  `,
        Regular: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
  `,
        Medium: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-style: normal;
  `,
        Bold: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-style: normal;
  `,
        Black: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-style: normal;
  `,
        RegularItalic: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: italic;
  `,
        BoldItalic: styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-style: italic;
  `,
    }
}