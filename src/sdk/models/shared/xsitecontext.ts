import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

// XSiteContext
/**
 * The `x-site-context` header is a JSON object that must contain your account ID. This header can also be called `X-Site-Context` based on your stylistic preferences.
 **/
export class XSiteContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, name=account" })
  account: string;
}
