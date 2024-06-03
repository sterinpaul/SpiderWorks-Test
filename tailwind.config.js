import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'semi-transparent-white': 'rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
});