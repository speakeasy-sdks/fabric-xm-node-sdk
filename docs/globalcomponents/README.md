# globalComponents

## Overview

XM Global Components API allows you to fetch all the live global component data

### Available Operations

* [getLiveGlobalComponentsV2](#getliveglobalcomponentsv2) - Retrieves Live Global Components For A Channel

## getLiveGlobalComponentsV2

Returns a list of all the live global component data for a specified channel

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetLiveGlobalComponentsV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.globalComponents.getLiveGlobalComponentsV2({
  channels: "provident",
  xSiteContext: {
    account: "1234abcd5678efgh9ijklmno",
  },
}).then((res: GetLiveGlobalComponentsV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
