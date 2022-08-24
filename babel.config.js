const tsconfig = require("./tsconfig.json")
const rawAlias = tsconfig.compilerOptions.paths
const alias = {}

// get aliases from tsconfig
for (let alias in rawAlias) {
  alias[alias.replace("/*", "")] = rawAlias[alias].map((path) =>
    path.replace("/*", "")
  )
}

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias,
        },
      ],
    ],
  }
}
