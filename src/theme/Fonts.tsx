import { Global } from '@emotion/react'

const baseUrl = '/themes/custom/signup'
const baseUrlFonts = `${baseUrl}/fonts`

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "Campton-Book";
        src: url("${baseUrlFonts}/campton/30463E_0_0.eot");
        src: url("${baseUrlFonts}/campton/30463E_0_0.eot?#iefix") format("embedded-opentype"),
            url("${baseUrlFonts}/campton/30463E_0_0.woff2") format("woff2"),
            url("${baseUrlFonts}/campton/30463E_0_0.woff") format("woff"),
            url("${baseUrlFonts}/campton/30463E_0_0.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        font-display: fallback;
      }

      @font-face {
        font-family: "Campton-Medium";
        src: url("${baseUrlFonts}/campton/35BCF9_1_0.eot");
        src: url("${baseUrlFonts}/campton/35BCF9_1_0.eot?#iefix") format("embedded-opentype"),
            url("${baseUrlFonts}/campton/35BCF9_1_0.woff2") format("woff2"),
            url("${baseUrlFonts}/campton/35BCF9_1_0.woff") format("woff"),
            url("${baseUrlFonts}/campton/35BCF9_1_0.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        font-display: fallback;
      }

      @font-face {
          font-family: "Campton-Thin";
          src: url("${baseUrlFonts}/campton/campton_thin-webfont.eot");
          src: url("${baseUrlFonts}/campton/campton_thin-webfont.eot?#iefix") format("embedded-opentype"),
              url("${baseUrlFonts}/campton/campton_thin-webfont.woff2") format("woff2"),
              url("${baseUrlFonts}/campton/campton_thin-webfont.woff") format("woff"),
              url("${baseUrlFonts}/campton/campton_thin-webfont.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
      }

      @font-face {
          font-family: "Campton-Extralight";
          src: url("${baseUrlFonts}/campton/campton_extralight-webfont.eot");
          src: url("${baseUrlFonts}/campton/campton_extralight-webfont.eot?#iefix") format("embedded-opentype"),
              url("${baseUrlFonts}/campton/campton_extralight-webfont.woff2") format("woff2"),
              url("${baseUrlFonts}/campton/campton_extralight-webfont.woff") format("woff"),
              url("${baseUrlFonts}/campton/campton_extralight-webfont.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
      }

      @font-face {
        font-family: "Campton-Light";
        src: url("${baseUrlFonts}/campton/35BCF9_0_0.eot");
        src: url("${baseUrlFonts}/campton/35BCF9_0_0.eot?#iefix") format("embedded-opentype"),
            url("${baseUrlFonts}/campton/35BCF9_0_0.woff2") format("woff2"),
            url("${baseUrlFonts}/campton/35BCF9_0_0.woff") format("woff"),
            url("${baseUrlFonts}/campton/35BCF9_0_0.ttf") format("truetype");
        font-weight: 300;
        font-style: normal;
        font-stretch: normal;
      }
    `}
  />
)
