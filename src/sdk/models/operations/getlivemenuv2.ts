import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";


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

export class GetLiveMenuV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLiveMenuV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetLiveMenuV2Headers;
}

// GetLiveMenuV2200ApplicationJSONQuery
/** 
 * An object describing the request query
**/
export class GetLiveMenuV2200ApplicationJSONQuery extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "channelId" })
  channelId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "depth" })
  depth?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;
}

// GetLiveMenuV2200ApplicationJSON
/** 
 * 200 response object
**/
export class GetLiveMenuV2200ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "menu" })
  menu?: Record<string, any>[];

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  @Type(() => GetLiveMenuV2200ApplicationJSONQuery)
  query?: GetLiveMenuV2200ApplicationJSONQuery;
}

export class GetLiveMenuV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata()
  getLiveMenuV2200ApplicationJSONObject?: GetLiveMenuV2200ApplicationJSON;
}