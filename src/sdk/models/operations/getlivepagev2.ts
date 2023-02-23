import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode?: number;
}

// GetLivePageV2200ApplicationJSONDataPagePageType
/** 
 * The page type object
**/
export class GetLivePageV2200ApplicationJSONDataPagePageType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPrefix" })
  urlPrefix?: string;
}

// GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata
/** 
 * The metadata associated with the SEO field
**/
export class GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata extends SpeakeasyBase {
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

// GetLivePageV2200ApplicationJSONDataPageSeoFields
/** 
 * The SEO fields
**/
export class GetLivePageV2200ApplicationJSONDataPageSeoFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata })
  metadata?: GetLivePageV2200ApplicationJSONDataPageSeoFieldsMetadata[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}

// GetLivePageV2200ApplicationJSONDataPage
/** 
 * The page object
**/
export class GetLivePageV2200ApplicationJSONDataPage extends SpeakeasyBase {
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
  pageType?: GetLivePageV2200ApplicationJSONDataPagePageType;

  @SpeakeasyMetadata({ data: "json, name=pageUrl" })
  pageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=seoFields" })
  seoFields?: GetLivePageV2200ApplicationJSONDataPageSeoFields;

  @SpeakeasyMetadata({ data: "json, name=typeName" })
  typeName?: string;

  @SpeakeasyMetadata({ data: "json, name=typeUrl" })
  typeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}

// GetLivePageV2200ApplicationJSONDataVersion
/** 
 * The version object
**/
export class GetLivePageV2200ApplicationJSONDataVersion extends SpeakeasyBase {
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

// GetLivePageV2200ApplicationJSONData
/** 
 * The data object holding the live page and version details
**/
export class GetLivePageV2200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: GetLivePageV2200ApplicationJSONDataPage;

  @SpeakeasyMetadata({ data: "json, name=version", elemType: GetLivePageV2200ApplicationJSONDataVersion })
  version?: GetLivePageV2200ApplicationJSONDataVersion[];
}

// GetLivePageV2200ApplicationJSON
/** 
 * 200 response object
**/
export class GetLivePageV2200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetLivePageV2200ApplicationJSONData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
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
  getLivePageV2200ApplicationJSONObject?: GetLivePageV2200ApplicationJSON;

  @SpeakeasyMetadata()
  getLivePageV2204ApplicationJSONObject?: GetLivePageV2204ApplicationJSON;
}