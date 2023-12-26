import Router from "./router/router";
import { dashboard } from "./domEvents/dashboard";
import { login } from "./domEvents/login";
import { page404 } from "./domEvents/page404";

document.addEventListener("DOMContentLoaded", async () => {
  const appElement = document.querySelector<HTMLDivElement>("#app");

  if (appElement) {
    const result = await new Router().engine();
    appElement.innerHTML = await result.htmlContent;

    switch (result.Page) {
      case "":
        await dashboard();
        break;
      case "login":
        await login();
        break;
      default:
        await page404();
        break;
    }
  }
});
