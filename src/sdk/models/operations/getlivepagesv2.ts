import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


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
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}

// GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata
/** 
 * The metadata associated with the SEO field
**/
export class GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}

// GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields
/** 
 * The SEO fields
**/
export class GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata })
  metadata?: GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFieldsMetadata[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}

// GetLivePagesV2200ApplicationJSONDataLivePagesPage
/** 
 * The page object
**/
export class GetLivePagesV2200ApplicationJSONDataLivePagesPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=__v" })
  v?: number;

  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: number[];

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: string[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=isActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isArchived" })
  isArchived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId?: number;

  @SpeakeasyMetadata({ data: "json, name=pageUrl" })
  pageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=seoFields" })
  seoFields?: GetLivePagesV2200ApplicationJSONDataLivePagesPageSeoFields;

  @SpeakeasyMetadata({ data: "json, name=typeId" })
  typeId?: string;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;

  @SpeakeasyMetadata({ data: "json, name=typeUrl" })
  typeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}

// GetLivePagesV2200ApplicationJSONDataLivePages
/** 
 * The version object
**/
export class GetLivePagesV2200ApplicationJSONDataLivePages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: number[];

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: string[];

  @SpeakeasyMetadata({ data: "json, name=components" })
  components?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=isArchived" })
  isArchived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: GetLivePagesV2200ApplicationJSONDataLivePagesPage;

  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: number;
}

// GetLivePagesV2200ApplicationJSONDataQuery
/** 
 * The query information
**/
export class GetLivePagesV2200ApplicationJSONDataQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: string[];

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;
}

// GetLivePagesV2200ApplicationJSONData
/** 
 * The data object holding the query information and the list of live page versions
**/
export class GetLivePagesV2200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=livePages", elemType: GetLivePagesV2200ApplicationJSONDataLivePages })
  livePages?: GetLivePagesV2200ApplicationJSONDataLivePages[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: GetLivePagesV2200ApplicationJSONDataQuery;
}

// GetLivePagesV2200ApplicationJSON
/** 
 * 200 response object
**/
export class GetLivePagesV2200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetLivePagesV2200ApplicationJSONData;

  @SpeakeasyMetadata({ data: "json, name=message" })
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
  getLivePagesV2200ApplicationJSONObject?: GetLivePagesV2200ApplicationJSON;

  @SpeakeasyMetadata()
  getLivePagesV2404ApplicationJSONObject?: GetLivePagesV2404ApplicationJSON;
}