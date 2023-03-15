import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class XSiteContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, name=account" })
  account: string;
}
