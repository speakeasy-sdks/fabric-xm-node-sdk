import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetLivePageV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=channels",
  })
  channels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}

export class GetLivePageV2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-site-context",
  })
  xSiteContext?: shared.XSiteContext;
}

export class GetLivePageV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLivePageV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetLivePageV2Headers;
}

// GetLivePageV2204ApplicationJSON
/**
 * 204 response object
 **/
export class GetLivePageV2204ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status_code" })
  statusCode?: number;
}

// GetLivePageV2200ApplicationJSONDataPagePageType
/**
 * The page type object
 **/
export class GetLivePageV2200ApplicationJSONDataPagePageType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "urlPrefix" })
  urlPrefix?: string;
}

// GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata
/**
 * The metadata associated with the SEO field
 **/
export class GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata extends SpeakeasyBase {
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

// GetLivePageV2200ApplicationJSONDataPageSeoFields
/**
 * The SEO fields
 **/
export class GetLivePageV2200ApplicationJSONDataPageSeoFields extends SpeakeasyBase {
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

  @SpeakeasyMetadata({
    elemType: GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata,
  })
  @Expose({ name: "metadata" })
  @Type(() => GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata)
  metadata?: GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata[];

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "updatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  updatedAt?: Date;
}

// GetLivePageV2200ApplicationJSONDataPage
/**
 * The page object
 **/
export class GetLivePageV2200ApplicationJSONDataPage extends SpeakeasyBase {
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
  @Expose({ name: "pageType" })
  @Type(() => GetLivePageV2200ApplicationJSONDataPagePageType)
  pageType?: GetLivePageV2200ApplicationJSONDataPagePageType;

  @SpeakeasyMetadata()
  @Expose({ name: "pageUrl" })
  pageUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "seoFields" })
  @Type(() => GetLivePageV2200ApplicationJSONDataPageSeoFields)
  seoFields?: GetLivePageV2200ApplicationJSONDataPageSeoFields;

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

// GetLivePageV2200ApplicationJSONDataVersion
/**
 * The version object
 **/
export class GetLivePageV2200ApplicationJSONDataVersion extends SpeakeasyBase {
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
  @Expose({ name: "pageId" })
  pageId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "startDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate?: Date;

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

// GetLivePageV2200ApplicationJSONData
/**
 * The data object holding the live page and version details
 **/
export class GetLivePageV2200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "page" })
  @Type(() => GetLivePageV2200ApplicationJSONDataPage)
  page?: GetLivePageV2200ApplicationJSONDataPage;

  @SpeakeasyMetadata({ elemType: GetLivePageV2200ApplicationJSONDataVersion })
  @Expose({ name: "version" })
  @Type(() => GetLivePageV2200ApplicationJSONDataVersion)
  version?: GetLivePageV2200ApplicationJSONDataVersion[];
}

// GetLivePageV2200ApplicationJSON
/**
 * 200 response object
 **/
export class GetLivePageV2200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => GetLivePageV2200ApplicationJSONData)
  data?: GetLivePageV2200ApplicationJSONData;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status_code" })
  statusCode?: number;
}

export class GetLivePageV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getLivePageV2200ApplicationJSONObject?: GetLivePageV2200ApplicationJSON;

  @SpeakeasyMetadata()
  getLivePageV2204ApplicationJSONObject?: GetLivePageV2204ApplicationJSON;
}
