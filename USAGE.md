<!-- Start SDK Example Usage -->
```typescript
import { SDK } from "openapi";
import { GetLiveGlobalComponentsV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.globalComponents.getLiveGlobalComponentsV2({
  channels: "corrupti",
  xSiteContext: {
    account: "1234abcd5678efgh9ijklmno",
  },
}).then((res: GetLiveGlobalComponentsV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->