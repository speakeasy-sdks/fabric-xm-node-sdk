# menu

## Overview

XM Menu API allows you to fetch menus and their items

### Available Operations

* [getLiveMenuV2](#getlivemenuv2) - Retrieves Live Menu For A Channel

## getLiveMenuV2

Returns the live menu of the specified channel along with all its menu items

### Example Usage

```typescript
import { AxiosError } from "axios";
import { SDK } from "openapi";
import { GetLiveMenuV2Request, GetLiveMenuV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

const req: GetLiveMenuV2Request = {
  channels: "distinctio",
  depth: 844266,
  nodeId: "unde",
  parentId: "nulla",
  xSiteContext: {
    account: "1234abcd5678efgh9ijklmno",
  },
};

sdk.menu.getLiveMenuV2(req).then((res: GetLiveMenuV2Response | AxiosError) => {
  if (res instanceof UsageExamplePostResponse && res.statusCode == 200) {
    // handle response
  }
});
```
