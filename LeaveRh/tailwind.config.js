// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust to your project structure
    "./node_modules/antd/dist/antd.*.js", // Optional, for purging unused styles
  ],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts
  },
  theme: {
    extend: {
      backgroundImage: {
        layout: "background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      colors: {
        "color-primary": "#904fd1",
      },
    },
  },
  plugins: [],
};
