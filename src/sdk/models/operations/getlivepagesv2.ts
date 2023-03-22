/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetLivePagesV2QueryParams extends SpeakeasyBase {
  /**
   * A comma-separated list of channel ids
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=channels",
  })
  channels?: string;

  /**
   * The total number of results to return
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  /**
   * The number of items to omit before collecting the resulting set
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=offset",
  })
  offset?: number;
}

export class GetLivePagesV2Headers extends SpeakeasyBase {
  /**
   * The `x-site-context` header is a JSON object that must contain your account ID. This header can also be called `X-Site-Context` based on your stylistic preferences.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class GetLivePagesV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLivePagesV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetLivePagesV2Headers;
}

/**
 * 404 response object
 */
export class GetLivePagesV2404ApplicationJSON extends SpeakeasyBase {
  /**
   * String message to inform client of error
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  /**
   * Status description
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  /**
   * Status code of response
   */
  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

/**
 * The metadata associated with the SEO field
 */
export class GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata extends SpeakeasyBase {
  /**
   * The virutal id associated with the SEO field metadata
   */
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  /**
   * Metadata content
   */
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: string;

  /**
   * The date and time the metadata was created
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  /**
   * Metadata name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * The date and time the metadata was last updated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}

/**
 * The SEO fields
 */
export class GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields extends SpeakeasyBase {
  /**
   * The virtual id associated with the SEO field
   */
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  /**
   * The date and time the SEO field was created
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  /**
   * SEO field description
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The list of metadata associated with the SEO field
   */
  @SpeakeasyMetadata({
    elemType:
      GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata,
  })
  @Expose({ name: "metadata" })
  @Type(
    () => GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata
  )
  metadata?: GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata[];

  /**
   * SEO field title
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  /**
   * The date and time the SEO field was last updated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}

/**
 * The page object
 */
export class GetLivePagesV2200ApplicationJSONDataLivePagesPage extends SpeakeasyBase {
  /**
   * The versionKey associated with the page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "__v" })
  v?: number;

  /**
   * The database id associated with the page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  /**
   * A deprecated field holding channel information
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: number[];

  /**
   * The channel ids associated with the page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channels" })
  channels?: string[];

  /**
   * The date and time the page was created
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  /**
   * True if the page is active; false otherwise
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isActive" })
  isActive?: boolean;

  /**
   * True if the page is archived; false otherwise
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isArchived" })
  isArchived?: boolean;

  /**
   * The page name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * An identifier used for the page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageId" })
  pageId?: number;

  /**
   * The relative page url
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageUrl" })
  pageUrl?: string;

  /**
   * The SEO fields
   */
  @SpeakeasyMetadata()
  @Expose({ name: "seoFields" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields)
  seoFields?: GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields;

  /**
   * The database id for the page type that is linked to the page
   */
  @SpeakeasyMetadata()
  @Expose({ name: "typeId" })
  typeId?: string;

  /**
   * The name of the page type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "typeName" })
  typeName?: string;

  /**
   * The url associated with the page type
   */
  @SpeakeasyMetadata()
  @Expose({ name: "typeUrl" })
  typeUrl?: string;

  /**
   * The date and time the page was updated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}

/**
 * The version object
 */
export class GetLivePagesV2200ApplicationJSONDataLivePages extends SpeakeasyBase {
  /**
   * The database id associated with the version
   */
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  /**
   * A deprecated field holding channel information
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: number[];

  /**
   * The channel ids associated with the version
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channels" })
  channels?: string[];

  /**
   * The list of components
   */
  @SpeakeasyMetadata()
  @Expose({ name: "components" })
  components?: Record<string, any>[];

  /**
   * The date and time the version was created
   */
  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  /**
   * The description associated with the version
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * The date when the version will no longer be live
   */
  @SpeakeasyMetadata()
  @Expose({ name: "endDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  /**
   * True if the version is archived; false otherwise
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isArchived" })
  isArchived?: boolean;

  /**
   * The version name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataLivePagesPage)
  page?: GetLivePagesV2200ApplicationJSONDataLivePagesPage;

  /**
   * The database id of the page associated with the version
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pageId" })
  pageId?: string;

  /**
   * The current status of the version
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  /**
   * The date and time the version was last updated
   */
  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  /**
   * An identifier used for the version
   */
  @SpeakeasyMetadata()
  @Expose({ name: "versionId" })
  versionId?: number;
}

/**
 * The query information
 */
export class GetLivePagesV2200ApplicationJSONDataQuery extends SpeakeasyBase {
  /**
   * The channel id(s) used to filter the live pages
   */
  @SpeakeasyMetadata()
  @Expose({ name: "channels" })
  channels?: string[];

  /**
   * The total number of results returned
   */
  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  /**
   * The maximum number of results that were attempted to be retrieved
   */
  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;

  /**
   * The number of items omitted before collecting the resulting set
   */
  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset?: number;
}

/**
 * The data object holding the query information and the list of live page versions
 */
export class GetLivePagesV2200ApplicationJSONData extends SpeakeasyBase {
  /**
   * The array of live page versions
   */
  @SpeakeasyMetadata({
    elemType: GetLivePagesV2200ApplicationJSONDataLivePages,
  })
  @Expose({ name: "livePages" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataLivePages)
  livePages?: GetLivePagesV2200ApplicationJSONDataLivePages[];

  /**
   * The query information
   */
  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataQuery)
  query?: GetLivePagesV2200ApplicationJSONDataQuery;
}

/**
 * 200 response object
 */
export class GetLivePagesV2200ApplicationJSON extends SpeakeasyBase {
  /**
   * The data object holding the query information and the list of live page versions
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => GetLivePagesV2200ApplicationJSONData)
  data?: GetLivePagesV2200ApplicationJSONData;

  /**
   * The status message
   */
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetLivePagesV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * The request was received but an internal error occurred.
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Successful operation
   */
  @SpeakeasyMetadata()
  getLivePagesV2200ApplicationJSONObject?: GetLivePagesV2200ApplicationJSON;

  /**
   * The request was received but no data matches the request parameters
   */
  @SpeakeasyMetadata()
  getLivePagesV2404ApplicationJSONObject?: GetLivePagesV2404ApplicationJSON;
}
