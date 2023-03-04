import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Pages {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getLivePageV2 - Retrieves Live Page For A Channel By URL
   *
   * Returns the live page for the specified page url and channel
  **/
  getLivePageV2(
    req: operations.GetLivePageV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLivePageV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLivePageV2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/page/live";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLivePageV2Response = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getLivePageV2200ApplicationJSONObject = plainToInstance(
                operations.GetLivePageV2200ApplicationJSON,
                httpRes?.data as operations.GetLivePageV2200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 204:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getLivePageV2204ApplicationJSONObject = plainToInstance(
                operations.GetLivePageV2204ApplicationJSON,
                httpRes?.data as operations.GetLivePageV2204ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getLivePagesV2 - Retrieves Live Pages For Specified Channels
   *
   * Returns a list of all the live pages for the specified channels
  **/
  getLivePagesV2(
    req: operations.GetLivePagesV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLivePagesV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLivePagesV2Request(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/pages/live";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetLivePagesV2Response = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getLivePagesV2200ApplicationJSONObject = plainToInstance(
                operations.GetLivePagesV2200ApplicationJSON,
                httpRes?.data as operations.GetLivePagesV2200ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.getLivePagesV2404ApplicationJSONObject = plainToInstance(
                operations.GetLivePagesV2404ApplicationJSON,
                httpRes?.data as operations.GetLivePagesV2404ApplicationJSON,
                { excludeExtraneousValues: true }
              );
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
