<!-- Start SDK Example Usage -->
```typescript
import {
  GetLiveGlobalComponentsV2Request,
  GetLiveGlobalComponentsV2Response
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";

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