import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ErrorT
/** 
 * The server error response object
**/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}
