import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLiveMenuV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channels" })
  channels?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=depth" })
  depth?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;
}


export class GetLiveMenuV2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}


// GetLiveMenuV2200ApplicationJsonQuery
/** 
 * An object describing the request query
**/
export class GetLiveMenuV2200ApplicationJsonQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=depth" })
  depth?: number;

  @SpeakeasyMetadata({ data: "json, name=nodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parentId" })
  parentId?: string;
}


// GetLiveMenuV2200ApplicationJson
/** 
 * 200 response object
**/
export class GetLiveMenuV2200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=menu" })
  menu?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: GetLiveMenuV2200ApplicationJsonQuery;
}


export class GetLiveMenuV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLiveMenuV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetLiveMenuV2Headers;
}


export class GetLiveMenuV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLiveMenuV2200ApplicationJSONObject?: GetLiveMenuV2200ApplicationJson;
}
