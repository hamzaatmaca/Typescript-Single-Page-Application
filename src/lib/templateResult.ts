import TemplateResult from "../interfaces/templateResult";

class Layout {
  constructor() {}

  private async _HTMLPage_(url: string): Promise<string> {
    const response = await fetch(url);
    return response.text();
  }

  async template(url: string, lastPath: string): Promise<TemplateResult> {
    const htmlContent = await this._HTMLPage_(url);

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const Page = lastPath;
    return { htmlContent, doc, Page };
  }
}

export default Layout;
