import { SheetsRegistry } from "jss"
import { createMuiTheme, createGenerateClassName } from "@material-ui/core/styles"

/** https://material.io/tools/color/#!/?view.left=1&view.right=0&primary.color=2E7D32&secondary.color=795548 */
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#2e7d32",
      light: "#60ad5e",
      dark: "#005005"
    },
    secondary: {
      main: "#795548",
      light: "#a98274",
      dark: "#4b2c20"
    },
    text: {
      primary: "#222",
      secondary: "#aaa"
    }
  },
})

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  }
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn"t shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext()
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}