export default {
  theme: {
    extend: {
      colors: {
        background: "#F6F6F7",
      },
      animation: {
        ddd: "wiggle 0.2s forwards",
        dddout: "wiggleout 0.2s forwards",
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "perspective(200px) rotateX(-90deg)",
            "transform-origin": "50% 0",
          },
          "100%": {
            transform: "perspective(200px) rotateX(0deg)",
            "transform-origin": "50% 0",
          },
        },
        wiggleout: {
          "0%": {
            transform: "perspective(200px) rotateX(0deg)",
            "transform-origin": "50% 0",
          },
          "100%": {
            transform: "perspective(200px) rotateX(-90deg)",
            "transform-origin": "50% 0",
          },
        },
      },
    },
  },
};
