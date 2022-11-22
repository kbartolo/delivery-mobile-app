module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["nativewind/babel"],
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".android.js", ".android.tsx", ".ios.js", ".ios.tsx"],
          root: ["./src"],
          alias: {
            "@components": "./src/components/index.ts",
            "@screens": "./src/screens/index.ts",
            "@hooks": "./src/hooks/index.ts",
            "@helpers": "./src/helpers",
            "@store": "./src/store/index.ts",
            "@schemas": "./src/sanity",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
