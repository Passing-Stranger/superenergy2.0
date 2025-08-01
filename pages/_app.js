import '@fortawesome/fontawesome-svg-core/styles.css' // Import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since we did it manually above

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp