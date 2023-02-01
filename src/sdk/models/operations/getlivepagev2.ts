import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLivePageV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channels" })
  channels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetLivePageV2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}


// GetLivePageV2200ApplicationJsonDataPagePageType
/** 
 * The page type object
**/
export class GetLivePageV2200ApplicationJsonDataPagePageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPrefix" })
  urlPrefix?: string;
}


// GetLivePageV2200ApplicationJsonDataPageSeoFieldsMetadata
/** 
 * The metadata associated with the SEO field
**/
export class GetLivePageV2200ApplicationJsonDataPageSeoFieldsMetadata extends SpeakeasyBase {
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


// GetLivePageV2200ApplicationJsonDataPageSeoFields
/** 
 * The SEO fields
**/
export class GetLivePageV2200ApplicationJsonDataPageSeoFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: GetLivePageV2200ApplicationJsonDataPageSeoFieldsMetadata })
  metadata?: GetLivePageV2200ApplicationJsonDataPageSeoFieldsMetadata[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}


// GetLivePageV2200ApplicationJsonDataPage
/** 
 * The page object
**/
export class GetLivePageV2200ApplicationJsonDataPage extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=pageType" })
  pageType?: GetLivePageV2200ApplicationJsonDataPagePageType;

  @SpeakeasyMetadata({ data: "json, name=pageUrl" })
  pageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=seoFields" })
  seoFields?: GetLivePageV2200ApplicationJsonDataPageSeoFields;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;

  @SpeakeasyMetadata({ data: "json, name=typeUrl" })
  typeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}


// GetLivePageV2200ApplicationJsonDataVersion
/** 
 * The version object
**/
export class GetLivePageV2200ApplicationJsonDataVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=__v" })
  v?: number;

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

  @SpeakeasyMetadata({ data: "json, name=pageId" })
  pageId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=versionId" })
  versionId?: number;
}


// GetLivePageV2200ApplicationJsonData
/** 
 * The data object holding the live page and version details
**/
export class GetLivePageV2200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: GetLivePageV2200ApplicationJsonDataPage;

  @SpeakeasyMetadata({ data: "json, name=version", elemType: GetLivePageV2200ApplicationJsonDataVersion })
  version?: GetLivePageV2200ApplicationJsonDataVersion[];
}


// GetLivePageV2200ApplicationJson
/** 
 * 200 response object
**/
export class GetLivePageV2200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetLivePageV2200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode?: number;
}


// GetLivePageV2204ApplicationJson
/** 
 * 204 response object
**/
export class GetLivePageV2204ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode?: number;
}


export class GetLivePageV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLivePageV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetLivePageV2Headers;
}


export class GetLivePageV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLivePageV2200ApplicationJSONObject?: GetLivePageV2200ApplicationJson;

  @SpeakeasyMetadata()
  getLivePageV2204ApplicationJSONObject?: GetLivePageV2204ApplicationJson;
}
