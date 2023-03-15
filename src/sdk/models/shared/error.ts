import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

// ErrorT
/**
 * The server error response object
 **/
export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}
