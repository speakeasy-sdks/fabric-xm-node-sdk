# Fabric XM Node SDK (V2)

Fabric's Experience Manager (XM) enables you to design, implement, and optimize omnichannel e-commerce experiences, without having to code. With XM, you can easily add parent and child categories through our intuitive UI to create your website navigation, and seamlessly integrate with our APIs for dynamic navigation rendering on your store front. In addition, developers can implement agile design by creating reusable design components and use one set of data and APIs for every channel.

API docs can be found [here](https://knowledgebase.fabric.inc/docs/openapi/xm/v2/reference/)

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @fabric/xm-sdk
```

### Yarn

```bash
yarn add @fabric/xm-sdk
```
<!-- End SDK Installation -->

## Authentication 

For more details on getting access to the Fabric API please see [here](https://knowledgebase.fabric.inc/docs/developer-portal/xm-developer-guide/)

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { SDK, withSecurity} from "@fabric/xm-sdk";
import { GetLiveGlobalComponentsV2Request, GetLiveGlobalComponentsV2Response } from "@fabric/xm-sdk/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: GetLiveGlobalComponentsV2Request = {
  queryParams: {
    channels: "sit",
  },
  headers: {
    xSiteContext: {
      account: "voluptas",
    },
  },
};

sdk.globalComponents.getLiveGlobalComponentsV2(req).then((res: GetLiveGlobalComponentsV2Response | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Global Components

* `getLiveGlobalComponentsV2` - Retrieves Live Global Components For A Channel

### Menu

* `getLiveMenuV2` - Retrieves Live Menu For A Channel

### Pages

* `getLivePageV2` - Retrieves Live Page For A Channel By URL
* `getLivePagesV2` - Retrieves Live Pages For Specified Channels

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
