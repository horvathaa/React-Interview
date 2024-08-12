const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindColors = require("./node_modules/tailwindcss/colors")
const plugin = require('tailwindcss/plugin');
const colorSafeList = []
// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"]

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName)) {
    continue
  }

  // Define all of your desired shades
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  const pallette = tailwindColors[colorName]

  if (typeof pallette === "object") {
    shades.forEach((shade) => {
      if (shade in pallette) {
       // colorSafeList.push(`text-${colorName}-${shade}`)  <-- You can add different colored text as well 
        colorSafeList.push(`bg-${colorName}-${shade}`)
      }
    })
  }
}
module.exports = {
  important: true,
  darkMode: 'class',
  content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [...colorSafeList,    
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      animation: {
          bounce200: 'bounce 1s infinite 200ms',
          bounce400: 'bounce 1s infinite 400ms',
      },
      colors: {...colorSafeList, "pitt-blue":"#003594","pitt-gold":"#FFB81C", "pitt-stroke-blue":"#00205B", },
  },
  },
  plugins: [ plugin(function ({ addUtilities }) {
    addUtilities({
      '.drag-none': {
        '-webkit-user-drag': 'none',
        '-khtml-user-drag': 'none',
        '-moz-user-drag': 'none',
        '-o-user-drag': 'none',
        'user-drag': 'none'
      }
    });
  })],
};

