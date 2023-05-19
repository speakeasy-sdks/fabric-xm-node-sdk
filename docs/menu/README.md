# menu

## Overview

XM Menu API allows you to fetch menus and their items

### Available Operations

* [getLiveMenuV2](#getlivemenuv2) - Retrieves Live Menu For A Channel

## getLiveMenuV2

Returns the live menu of the specified channel along with all its menu items

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetLiveMenuV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.menu.getLiveMenuV2({
  channels: "distinctio",
  depth: 844266,
  nodeId: "unde",
  parentId: "nulla",
  xSiteContext: {
    account: "1234abcd5678efgh9ijklmno",
  },
}).then((res: GetLiveMenuV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
