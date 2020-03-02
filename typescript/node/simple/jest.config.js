// This file is jest configuration which using in corresponding ts project.
/*
  Note you have to install ts-jest which transform ts to js.
  Your test file may end with `.test.ts` or `.spec.ts`.
  `src/shared` in source file can be absolute in this node test system.
 */

module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleNameMapper: {
    "^shared(.*)$": "<rootDir>/src/shared$1"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
