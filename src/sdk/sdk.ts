import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { GlobalComponents } from "./globalcomponents";
import { Menu } from "./menu";
import { Pages } from "./pages";


export const ServerList = [
	"https://cdn.xm.fabric.inc/api",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public globalComponents: GlobalComponents;
  public menu: Menu;
  public pages: Pages;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "2.2.1";
  private _genVersion = "0.22.1";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
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