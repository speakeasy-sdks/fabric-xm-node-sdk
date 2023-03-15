import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Menu {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * getLiveMenuV2 - Retrieves Live Menu For A Channel
   *
   * Returns the live menu of the specified channel along with all its menu items
   **/
  getLiveMenuV2(
    req: operations.GetLiveMenuV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLiveMenuV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLiveMenuV2Request(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/menu/live";

    const client: AxiosInstance = this._defaultClient!;

    const headers = {
      ...utils.getHeadersFromRequest(req.headers),
      ...config?.headers,
    };
    const queryParams: string = utils.serializeQueryParams(req.queryParams);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetLiveMenuV2Response =
        new operations.GetLiveMenuV2Response({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getLiveMenuV2200ApplicationJSONObject =
              utils.deserializeJSONResponse(
                httpRes?.data,
                operations.GetLiveMenuV2200ApplicationJSON
              );
          }
          break;
        case [404, 500].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }
}
