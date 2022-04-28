module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "jesus-pink": {
          DEFAULT: "#fc466b",
          // 50: "#EFC9E0",
          // 100: "#EAB9D7",
          // 200: "#E199C4",
          // 300: "#D87AB2",
          // 400: "#CE5AA0",
          // 500: "#C53B8E",
          // 600: "#9A2E6F",
          // 700: "#6F2150",
          // 800: "#441431",
          // 900: "#180712",
        },
        "jesus-blue": {
          DEFAULT: "#3f5efb",
          // 50: "#FFF6F4",
          // 100: "#FFE5DF",
          // 200: "#FFC3B7",
          // 300: "#FEA28E",
          // 400: "#FE8066",
          // 500: "#FE5F3D",
          // 600: "#FE3105",
          // 700: "#CA2401",
          // 800: "#921A01",
          // 900: "#5A1000",
        },
      },
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
