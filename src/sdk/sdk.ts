import { GlobalComponents } from "./globalcomponents";
import { Menu } from "./menu";
import { Pages } from "./pages";
import axios, { AxiosInstance } from "axios";

export const ServerList = ["https://cdn.xm.fabric.inc/api"] as const;

export type SDKProps = {
  defaultClient?: AxiosInstance;
  serverUrl?: string;
};

/* SDK Documentation: fabric's Experience Manager (XM) enables you to design, implement, and optimize omnichannel e-commerce experiences, without having to code. With XM, you can easily add parent and child categories through our intuitive UI to create your website navigation, and seamlessly integrate with our APIs for dynamic navigation rendering on your store front. In addition, developers can implement agile design by creating reusable design components and use one set of data and APIs for every channel.
 */
export class SDK {
  public globalComponents: GlobalComponents;
  public menu: Menu;
  public pages: Pages;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "3.7.0";
  private _genVersion = "1.12.0";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;

    this.globalComponents = new GlobalComponents(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.menu = new Menu(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.pages = new Pages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
