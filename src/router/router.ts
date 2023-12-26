import TemplateResult from "../interfaces/templateResult";
import Layout from "../lib/templateResult";
import { Dashboard, Login, Page404 } from "../static/path";

class Router {
  public url: URL;
  private token: string | null | undefined;

  constructor() {
    this.url = new URL(window.location.href);
    this.token = localStorage.getItem("accessToken");
  }

  auth(): boolean {
    if (typeof this.token !== "string") {
      return true;
    }
    return false;
  }

  async engine(): Promise<TemplateResult> {
    const fullPath: string = this.url.pathname;
    const pathArr: Array<string> = fullPath.split("/");
    const pathArrLength: number = fullPath.split("/").length;

    const lastPath = pathArr[pathArrLength - 1];

    if (!this.auth()) {
      const loginResult = await new Layout().template(Login, lastPath);
      return loginResult;
    }

    switch (lastPath.trim()) {
      case "":
        const dashboardResult = await new Layout().template(
          Dashboard,
          lastPath
        );
        return dashboardResult;

      case "login":
        const loginResult = await new Layout().template(Login, lastPath);
        return loginResult;

      default:
        const page404Result = await new Layout().template(Page404, lastPath);
        return page404Result;
    }
  }
}

export default Router;
