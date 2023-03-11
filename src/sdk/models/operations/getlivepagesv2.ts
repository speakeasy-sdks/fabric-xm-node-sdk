import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";


export class GetLivePagesV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channels" })
  channels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}

export class GetLivePagesV2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class GetLivePagesV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLivePagesV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetLivePagesV2Headers;
}

// GetLivePagesV2404ApplicationJSON
/** 
 * 404 response object
**/
export class GetLivePagesV2404ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "statusCode" })
  statusCode?: number;
}

// GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata
/** 
 * The metadata associated with the SEO field
**/
export class GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}

// GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields
/** 
 * The SEO fields
**/
export class GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata({ elemType: GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata })
  @Expose({ name: "metadata" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata)
  metadata?: GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata[];

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}

// GetLivePagesV2200ApplicationJSONDataLivePagesPage
/** 
 * The page object
**/
export class GetLivePagesV2200ApplicationJSONDataLivePagesPage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "__v" })
  v?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "channels" })
  channels?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "isArchived" })
  isArchived?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "pageId" })
  pageId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageUrl" })
  pageUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "seoFields" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields)
  seoFields?: GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields;

  @SpeakeasyMetadata()
  @Expose({ name: "typeId" })
  typeId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "typeName" })
  typeName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "typeUrl" })
  typeUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}

// GetLivePagesV2200ApplicationJSONDataLivePages
/** 
 * The version object
**/
export class GetLivePagesV2200ApplicationJSONDataLivePages extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "channel" })
  channel?: number[];

  @SpeakeasyMetadata()
  @Expose({ name: "channels" })
  channels?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "components" })
  components?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "createdAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "endDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  endDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "isArchived" })
  isArchived?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataLivePagesPage)
  page?: GetLivePagesV2200ApplicationJSONDataLivePagesPage;

  @SpeakeasyMetadata()
  @Expose({ name: "pageId" })
  pageId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "versionId" })
  versionId?: number;
}

// GetLivePagesV2200ApplicationJSONDataQuery
/** 
 * The query information
**/
export class GetLivePagesV2200ApplicationJSONDataQuery extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "channels" })
  channels?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "count" })
  count?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "limit" })
  limit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "offset" })
  offset?: number;
}

// GetLivePagesV2200ApplicationJSONData
/** 
 * The data object holding the query information and the list of live page versions
**/
export class GetLivePagesV2200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GetLivePagesV2200ApplicationJSONDataLivePages })
  @Expose({ name: "livePages" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataLivePages)
  livePages?: GetLivePagesV2200ApplicationJSONDataLivePages[];

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  @Type(() => GetLivePagesV2200ApplicationJSONDataQuery)
  query?: GetLivePagesV2200ApplicationJSONDataQuery;
}

// GetLivePagesV2200ApplicationJSON
/** 
 * 200 response object
**/
export class GetLivePagesV2200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => GetLivePagesV2200ApplicationJSONData)
  data?: GetLivePagesV2200ApplicationJSONData;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class GetLivePagesV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getLivePagesV2200ApplicationJSONObject?: GetLivePagesV2200ApplicationJSON;

  @SpeakeasyMetadata()
  getLivePagesV2404ApplicationJSONObject?: GetLivePagesV2404ApplicationJSON;
}