import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetLiveGlobalComponentsV2QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channels" })
  channels?: string;
}

export class GetLiveGlobalComponentsV2Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-site-context" })
  xSiteContext?: shared.XSiteContext;
}

export class GetLiveGlobalComponentsV2Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLiveGlobalComponentsV2QueryParams;

  @SpeakeasyMetadata()
  headers: GetLiveGlobalComponentsV2Headers;
}

export class GetLiveGlobalComponentsV2Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  components?: Record<string, any>[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}