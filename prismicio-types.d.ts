// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *home → image_gallery*
 */
export interface HomeDocumentDataImageGalleryItem {
  /**
   * image field in *home → image_gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.image_gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Item in *home → categories*
 */
export interface HomeDocumentDataCategoriesItem {
  /**
   * category_name field in *home → categories*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.categories[].category_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  category_name: prismic.KeyTextField;

  /**
   * category_image field in *home → categories*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.categories[].category_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  category_image: prismic.ImageField<never>;
}

type HomeDocumentDataSlicesSlice = never;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * image_gallery field in *home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.image_gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  image_gallery: prismic.GroupField<Simplify<HomeDocumentDataImageGalleryItem>>;

  /**
   * categories field in *home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: home.categories[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  categories: prismic.GroupField<Simplify<HomeDocumentDataCategoriesItem>>;

  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataImageGalleryItem,
      HomeDocumentDataCategoriesItem,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
    };
  }
}
