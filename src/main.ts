import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router"

// The browser restores the previous scroll position on a hard reload by
// default — on this page that can momentarily land the viewport near the
// footer before layout has settled. Force every load to start at the top.
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual"
}
window.scrollTo(0, 0)

createApp(App).use(router).mount("#app")
