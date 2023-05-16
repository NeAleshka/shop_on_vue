import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "quasar/dist/quasar.css";
import routes from "./routes";
import i18n from "./i18n";
import "swiper/css";
import "swiper/css/bundle";

const app = createApp(App);
app.use(Quasar, {}).use(routes);

// Добавление i18n в глобальный контекст

app.use(i18n).mount("#app");
