/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type ProductGetByIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> } | null };

export type ProductImageFragment = { url: string, alt: string };

export type ProductItemFragment = { id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> };

export type ProductsGetQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetQuery = { products: { data: Array<{ id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

export type ProductsGetByCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCategoryQuery = { category?: { products: Array<{ id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> }> } | null };

export type ProductsGetByCollectionQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCollectionQuery = { collection?: { products: Array<{ id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> }> } | null };

export type ProductsGetRelatedQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  sortOrder: SortDirection;
  sortBy: ProductSortBy;
}>;


export type ProductsGetRelatedQuery = { products: { data: Array<{ id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

export type ProductsGetSearchedQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetSearchedQuery = { products: { data: Array<{ id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductImageFragmentDoc = new TypedDocumentString(`
    fragment ProductImage on ProductImage {
  url
  alt
}
    `, {"fragmentName":"ProductImage"}) as unknown as TypedDocumentString<ProductImageFragment, unknown>;
export const ProductItemFragmentDoc = new TypedDocumentString(`
    fragment ProductItem on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  images {
    ...ProductImage
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}`, {"fragmentName":"ProductItem"}) as unknown as TypedDocumentString<ProductItemFragment, unknown>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($productId: ID!) {
  product(id: $productId) {
    ...ProductItem
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}
fragment ProductItem on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  images {
    ...ProductImage
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetDocument = new TypedDocumentString(`
    query ProductsGet($offset: Int, $take: Int) {
  products(order: ASC, orderBy: DEFAULT, skip: $offset, take: $take) {
    data {
      ...ProductItem
    }
    meta {
      total
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}
fragment ProductItem on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  images {
    ...ProductImage
  }
}`) as unknown as TypedDocumentString<ProductsGetQuery, ProductsGetQueryVariables>;
export const ProductsGetByCategoryDocument = new TypedDocumentString(`
    query ProductsGetByCategory($slug: String!) {
  category(slug: $slug) {
    products {
      ...ProductItem
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}
fragment ProductItem on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  images {
    ...ProductImage
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategoryQuery, ProductsGetByCategoryQueryVariables>;
export const ProductsGetByCollectionDocument = new TypedDocumentString(`
    query ProductsGetByCollection($slug: String!) {
  collection(slug: $slug) {
    products {
      ...ProductItem
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}
fragment ProductItem on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  images {
    ...ProductImage
  }
}`) as unknown as TypedDocumentString<ProductsGetByCollectionQuery, ProductsGetByCollectionQueryVariables>;
export const ProductsGetRelatedDocument = new TypedDocumentString(`
    query ProductsGetRelated($offset: Int!, $take: Int!, $sortOrder: SortDirection!, $sortBy: ProductSortBy!) {
  products(order: $sortOrder, orderBy: $sortBy, skip: $offset, take: $take) {
    data {
      ...ProductItem
    }
    meta {
      total
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}
fragment ProductItem on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  images {
    ...ProductImage
  }
}`) as unknown as TypedDocumentString<ProductsGetRelatedQuery, ProductsGetRelatedQueryVariables>;
export const ProductsGetSearchedDocument = new TypedDocumentString(`
    query ProductsGetSearched($offset: Int!, $take: Int!, $search: String) {
  products(search: $search, skip: $offset, take: $take) {
    data {
      ...ProductItem
    }
    meta {
      total
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}
fragment ProductItem on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  images {
    ...ProductImage
  }
}`) as unknown as TypedDocumentString<ProductsGetSearchedQuery, ProductsGetSearchedQueryVariables>;