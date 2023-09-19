/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
      themes: [
        { light: { ...require("daisyui/src/theming/themes")["[data-theme=aqua]"] } },
        { dark: { ...require("daisyui/src/theming/themes")["[data-theme=synthwave]"] }
        }
      ]
    }
  }