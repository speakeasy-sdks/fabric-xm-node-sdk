/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * XM Pages API allows you to fetch all the live pages, or a live page by a specific URL
 */
export class Pages {
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
   * Retrieves Live Page For A Channel By URL
   *
   * @remarks
   * Returns the live page for the specified page url and channel
   */
  async getLivePageV2(
    req: operations.GetLivePageV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLivePageV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLivePageV2Request(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/page/live";

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetLivePageV2Response =
      new operations.GetLivePageV2Response({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getLivePageV2200ApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.GetLivePageV2200ApplicationJSON
          );
        }
        break;
      case httpRes?.status == 204:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getLivePageV2204ApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.GetLivePageV2204ApplicationJSON
          );
        }
        break;
      case [400, 404, 500].includes(httpRes?.status):
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }

  /**
   * Retrieves Live Pages For Specified Channels
   *
   * @remarks
   * Returns a list of all the live pages for the specified channels
   */
  async getLivePagesV2(
    req: operations.GetLivePagesV2Request,
    config?: AxiosRequestConfig
  ): Promise<operations.GetLivePagesV2Response> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetLivePagesV2Request(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/pages/live";

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetLivePagesV2Response =
      new operations.GetLivePagesV2Response({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getLivePagesV2200ApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.GetLivePagesV2200ApplicationJSON
          );
        }
        break;
      case httpRes?.status == 404:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getLivePagesV2404ApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.GetLivePagesV2404ApplicationJSON
          );
        }
        break;
      case httpRes?.status == 500:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
        }
        break;
    }

    return res;
  }
}
