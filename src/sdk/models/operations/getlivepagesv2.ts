import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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


// GetLivePagesV2200ApplicationJsonDataLivePagesPageSeoFieldsMetadata
/** 
 * The metadata associated with the SEO field
**/
export class GetLivePagesV2200ApplicationJsonDataLivePagesPageSeoFieldsMetadata extends SpeakeasyBase {
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


// GetLivePagesV2200ApplicationJsonDataLivePagesPageSeoFields
/** 
 * The SEO fields
**/
export class GetLivePagesV2200ApplicationJsonDataLivePagesPageSeoFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: GetLivePagesV2200ApplicationJsonDataLivePagesPageSeoFieldsMetadata })
  metadata?: GetLivePagesV2200ApplicationJsonDataLivePagesPageSeoFieldsMetadata[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}


// GetLivePagesV2200ApplicationJsonDataLivePagesPage
/** 
 * The page object
**/
export class GetLivePagesV2200ApplicationJsonDataLivePagesPage extends SpeakeasyBase {
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
  seoFields?: GetLivePagesV2200ApplicationJsonDataLivePagesPageSeoFields;

  @SpeakeasyMetadata({ data: "json, name=typeId" })
  typeId?: string;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;

  @SpeakeasyMetadata({ data: "json, name=typeUrl" })
  typeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}


// GetLivePagesV2200ApplicationJsonDataLivePages
/** 
 * The version object
**/
export class GetLivePagesV2200ApplicationJsonDataLivePages extends SpeakeasyBase {
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
  page?: GetLivePagesV2200ApplicationJsonDataLivePagesPage;

  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: number;
}


// GetLivePagesV2200ApplicationJsonDataQuery
/** 
 * The query information
**/
export class GetLivePagesV2200ApplicationJsonDataQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: string[];

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;
}


// GetLivePagesV2200ApplicationJsonData
/** 
 * The data object holding the query information and the list of live page versions
**/
export class GetLivePagesV2200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=livePages", elemType: GetLivePagesV2200ApplicationJsonDataLivePages })
  livePages?: GetLivePagesV2200ApplicationJsonDataLivePages[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: GetLivePagesV2200ApplicationJsonDataQuery;
}


// GetLivePagesV2200ApplicationJson
/** 
 * 200 response object
**/
export class GetLivePagesV2200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetLivePagesV2200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


// GetLivePagesV2404ApplicationJson
/** 
 * 404 response object
**/
export class GetLivePagesV2404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}


export class GetLivePagesV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLivePagesV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetLivePagesV2Headers;
}


export class GetLivePagesV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLivePagesV2200ApplicationJSONObject?: GetLivePagesV2200ApplicationJson;

  @SpeakeasyMetadata()
  getLivePagesV2404ApplicationJSONObject?: GetLivePagesV2404ApplicationJson;
}
