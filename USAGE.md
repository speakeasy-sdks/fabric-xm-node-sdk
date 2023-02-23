<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@fabric/xm-sdk";
import { GetLiveGlobalComponentsV2Request, GetLiveGlobalComponentsV2Response } from "@fabric/xm-sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetLiveGlobalComponentsV2Request = {
  queryParams: {
    channels: "unde",
  },
  headers: {
    xSiteContext: {
      account: "deserunt",
    },
  },
};

sdk.globalComponents.getLiveGlobalComponentsV2(req).then((res: GetLiveGlobalComponentsV2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->