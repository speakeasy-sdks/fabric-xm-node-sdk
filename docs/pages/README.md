# pages

## Overview

XM Pages API allows you to fetch all the live pages, or a live page by a specific URL

### Available Operations

* [getLivePageV2](#getlivepagev2) - Retrieves Live Page For A Channel By URL
* [getLivePagesV2](#getlivepagesv2) - Retrieves Live Pages For Specified Channels

## getLivePageV2

Returns the live page for the specified page url and channel

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetLivePageV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.pages.getLivePageV2({
  channels: "corrupti",
  url: "illum",
  xSiteContext: {
    account: "1234abcd5678efgh9ijklmno",
  },
}).then((res: GetLivePageV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## getLivePagesV2

Returns a list of all the live pages for the specified channels

### Example Usage

```typescript
import { SDK } from "openapi";
import { GetLivePagesV2Response } from "openapi/dist/sdk/models/operations";

const sdk = new SDK();

sdk.pages.getLivePagesV2({
  channels: "vel",
  limit: 623564,
  offset: 645894,
  xSiteContext: {
    account: "1234abcd5678efgh9ijklmno",
  },
}).then((res: GetLivePagesV2Response) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
