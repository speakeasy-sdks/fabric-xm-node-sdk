# globalComponents

## Overview

XM Global Components API allows you to fetch all the live global component data

### Available Operations

* [getLiveGlobalComponentsV2](#getliveglobalcomponentsv2) - Retrieves Live Global Components For A Channel

## getLiveGlobalComponentsV2

Returns a list of all the live global component data for a specified channel

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "openapi";
import { GetLiveGlobalComponentsV2Request, GetLiveGlobalComponentsV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

const req: GetLiveGlobalComponentsV2Request = {
  channels: "provident",
  xSiteContext: {
    account: "1234abcd5678efgh9ijklmno",
  },
};

sdk.globalComponents.getLiveGlobalComponentsV2(req).then((res: GetLiveGlobalComponentsV2Response | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
