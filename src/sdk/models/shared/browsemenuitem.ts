import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

// BrowseMenuItemImages
/**
 * The image resource details
 **/
export class BrowseMenuItemImages extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  meta?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

// BrowseMenuItemParams
/**
 * Additional data associated with the menu item
 **/
export class BrowseMenuItemParams extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_id" })
  id?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "kind" })
  kind?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

// BrowseMenuItem
/**
 * The browse menu item object
 **/
export class BrowseMenuItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "children" })
  @Type(() => BrowseMenuItem)
  children?: BrowseMenuItem;

  @SpeakeasyMetadata({ elemType: BrowseMenuItemImages })
  @Expose({ name: "images" })
  @Type(() => BrowseMenuItemImages)
  images?: BrowseMenuItemImages[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "nodeId" })
  nodeId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "order" })
  order?: number;

  @SpeakeasyMetadata({ elemType: BrowseMenuItemParams })
  @Expose({ name: "params" })
  @Type(() => BrowseMenuItemParams)
  params?: BrowseMenuItemParams[];

  @SpeakeasyMetadata()
  @Expose({ name: "parentId" })
  parentId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}
