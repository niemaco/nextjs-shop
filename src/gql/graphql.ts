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

export type CartFragment = { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> } }> };

export type OrderFragment = { id: string, status: OrderStatus, totalAmount: number, createdAt: unknown, updatedAt: unknown, lines: unknown };

export type ProductFragment = { id: string, name: string, price: number, slug: string, description: string, rating?: number | null, categories: Array<{ name: string, slug: string }>, reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, id: string, rating: number, title: string, updatedAt: unknown }>, images: Array<{ url: string, alt: string }> };

export type ProductImageFragment = { url: string, alt: string };

export type CartAddItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
}>;


export type CartAddItemMutation = { cartAddItem: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> } }> } };

export type CartChangeItemQuantityMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartChangeItemQuantityMutation = { cartChangeItemQuantity: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> } }> } };

export type CartCompleteMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
}>;


export type CartCompleteMutation = { cartComplete: { id: string, status: OrderStatus, totalAmount: number, createdAt: unknown, updatedAt: unknown, lines: unknown } };

export type CartFindOrCreateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
}>;


export type CartFindOrCreateMutation = { cartFindOrCreate: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> } }> } };

export type CartRemoveItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { cartRemoveItem: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> } }> } };

export type ReviewCreateMutationVariables = Exact<{
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ReviewCreateMutation = { reviewCreate: { id: string, items: Array<{ quantity: number, product: { id: string } }> } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, slug: string, description: string, categories: Array<{ name: string, slug: string }>, images: Array<{ url: string, alt: string }> } }> } | null };

export type OrderGetByIdQueryVariables = Exact<{
  orderId: Scalars['ID']['input'];
}>;


export type OrderGetByIdQuery = { order?: { id: string, status: OrderStatus, totalAmount: number, createdAt: unknown, updatedAt: unknown, lines: unknown } | null };

export type OrdersGetQueryVariables = Exact<{
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
}>;


export type OrdersGetQuery = { orders: { data: Array<{ id: string, status: OrderStatus, totalAmount: number, createdAt: unknown, updatedAt: unknown, lines: unknown }>, meta: { count: number, total: number } } };

export type ProductGetByIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, price: number, slug: string, description: string, rating?: number | null, categories: Array<{ name: string, slug: string }>, reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, id: string, rating: number, title: string, updatedAt: unknown }>, images: Array<{ url: string, alt: string }> } | null };

export type ProductsGetQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  order: SortDirection;
  orderBy: ProductSortBy;
}>;


export type ProductsGetQuery = { products: { data: Array<{ id: string, name: string, price: number, slug: string, description: string, rating?: number | null, categories: Array<{ name: string, slug: string }>, reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, id: string, rating: number, title: string, updatedAt: unknown }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

export type ProductsGetByCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCategoryQuery = { category?: { name: string, description: string, products: Array<{ id: string, name: string, price: number, slug: string, description: string, rating?: number | null, categories: Array<{ name: string, slug: string }>, reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, id: string, rating: number, title: string, updatedAt: unknown }>, images: Array<{ url: string, alt: string }> }> } | null };

export type ProductsGetByCollectionQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCollectionQuery = { collection?: { name: string, description: string, products: Array<{ id: string, name: string, price: number, slug: string, description: string, rating?: number | null, categories: Array<{ name: string, slug: string }>, reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, id: string, rating: number, title: string, updatedAt: unknown }>, images: Array<{ url: string, alt: string }> }> } | null };

export type ProductsGetRelatedQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  sortOrder: SortDirection;
  sortBy: ProductSortBy;
}>;


export type ProductsGetRelatedQuery = { products: { data: Array<{ id: string, name: string, price: number, slug: string, description: string, rating?: number | null, categories: Array<{ name: string, slug: string }>, reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, id: string, rating: number, title: string, updatedAt: unknown }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

export type ProductsGetSearchedQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetSearchedQuery = { products: { data: Array<{ id: string, name: string, price: number, slug: string, description: string, rating?: number | null, categories: Array<{ name: string, slug: string }>, reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, id: string, rating: number, title: string, updatedAt: unknown }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

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
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Cart {
  id
  items {
    product {
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
    quantity
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}`, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const OrderFragmentDoc = new TypedDocumentString(`
    fragment Order on Order {
  id
  status
  totalAmount
  createdAt
  updatedAt
  lines
}
    `, {"fragmentName":"Order"}) as unknown as TypedDocumentString<OrderFragment, unknown>;
export const ProductFragmentDoc = new TypedDocumentString(`
    fragment Product on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  rating
  reviews {
    author
    createdAt
    description
    email
    id
    rating
    title
    updatedAt
  }
  images {
    ...ProductImage
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}`, {"fragmentName":"Product"}) as unknown as TypedDocumentString<ProductFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {
  cartAddItem(id: $id, input: $input) {
    id
    items {
      product {
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
      quantity
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {
    id
    items {
      product {
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
      quantity
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<CartChangeItemQuantityMutation, CartChangeItemQuantityMutationVariables>;
export const CartCompleteDocument = new TypedDocumentString(`
    mutation CartComplete($cartId: ID!, $userEmail: String!) {
  cartComplete(cartId: $cartId, userEmail: $userEmail) {
    ...Order
  }
}
    fragment Order on Order {
  id
  status
  totalAmount
  createdAt
  updatedAt
  lines
}`) as unknown as TypedDocumentString<CartCompleteMutation, CartCompleteMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput!) {
  cartFindOrCreate(id: $id, input: $input) {
    id
    items {
      product {
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
      quantity
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<CartFindOrCreateMutation, CartFindOrCreateMutationVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($cartId: ID!, $productId: ID!) {
  cartRemoveItem(id: $cartId, productId: $productId) {
    id
    items {
      product {
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
      quantity
    }
  }
}
    fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  reviewCreate(
    author: $author
    description: $description
    email: $email
    productId: $productId
    rating: $rating
    title: $title
  ) {
    id
    items {
      quantity
      product {
        id
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    product {
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
    quantity
  }
}
fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const OrderGetByIdDocument = new TypedDocumentString(`
    query OrderGetById($orderId: ID!) {
  order(id: $orderId) {
    ...Order
  }
}
    fragment Order on Order {
  id
  status
  totalAmount
  createdAt
  updatedAt
  lines
}`) as unknown as TypedDocumentString<OrderGetByIdQuery, OrderGetByIdQueryVariables>;
export const OrdersGetDocument = new TypedDocumentString(`
    query OrdersGet($email: String!, $order: SortDirection! = ASC, $orderBy: OrderSortBy! = DEFAULT, $skip: Int! = 0, $take: Int! = 10) {
  orders(
    email: $email
    order: $order
    orderBy: $orderBy
    skip: $skip
    take: $take
  ) {
    data {
      ...Order
    }
    meta {
      count
      total
    }
  }
}
    fragment Order on Order {
  id
  status
  totalAmount
  createdAt
  updatedAt
  lines
}`) as unknown as TypedDocumentString<OrdersGetQuery, OrdersGetQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($productId: ID!) {
  product(id: $productId) {
    ...Product
  }
}
    fragment Product on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  rating
  reviews {
    author
    createdAt
    description
    email
    id
    rating
    title
    updatedAt
  }
  images {
    ...ProductImage
  }
}
fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetDocument = new TypedDocumentString(`
    query ProductsGet($offset: Int!, $take: Int!, $order: SortDirection!, $orderBy: ProductSortBy!) {
  products(order: $order, orderBy: $orderBy, skip: $offset, take: $take) {
    data {
      ...Product
    }
    meta {
      total
    }
  }
}
    fragment Product on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  rating
  reviews {
    author
    createdAt
    description
    email
    id
    rating
    title
    updatedAt
  }
  images {
    ...ProductImage
  }
}
fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<ProductsGetQuery, ProductsGetQueryVariables>;
export const ProductsGetByCategoryDocument = new TypedDocumentString(`
    query ProductsGetByCategory($slug: String!) {
  category(slug: $slug) {
    name
    description
    products {
      ...Product
    }
  }
}
    fragment Product on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  rating
  reviews {
    author
    createdAt
    description
    email
    id
    rating
    title
    updatedAt
  }
  images {
    ...ProductImage
  }
}
fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<ProductsGetByCategoryQuery, ProductsGetByCategoryQueryVariables>;
export const ProductsGetByCollectionDocument = new TypedDocumentString(`
    query ProductsGetByCollection($slug: String!) {
  collection(slug: $slug) {
    name
    description
    products {
      ...Product
    }
  }
}
    fragment Product on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  rating
  reviews {
    author
    createdAt
    description
    email
    id
    rating
    title
    updatedAt
  }
  images {
    ...ProductImage
  }
}
fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<ProductsGetByCollectionQuery, ProductsGetByCollectionQueryVariables>;
export const ProductsGetRelatedDocument = new TypedDocumentString(`
    query ProductsGetRelated($offset: Int!, $take: Int!, $sortOrder: SortDirection!, $sortBy: ProductSortBy!) {
  products(order: $sortOrder, orderBy: $sortBy, skip: $offset, take: $take) {
    data {
      ...Product
    }
    meta {
      total
    }
  }
}
    fragment Product on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  rating
  reviews {
    author
    createdAt
    description
    email
    id
    rating
    title
    updatedAt
  }
  images {
    ...ProductImage
  }
}
fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<ProductsGetRelatedQuery, ProductsGetRelatedQueryVariables>;
export const ProductsGetSearchedDocument = new TypedDocumentString(`
    query ProductsGetSearched($offset: Int!, $take: Int!, $search: String) {
  products(search: $search, skip: $offset, take: $take) {
    data {
      ...Product
    }
    meta {
      total
    }
  }
}
    fragment Product on Product {
  id
  name
  price
  slug
  categories {
    name
    slug
  }
  description
  rating
  reviews {
    author
    createdAt
    description
    email
    id
    rating
    title
    updatedAt
  }
  images {
    ...ProductImage
  }
}
fragment ProductImage on ProductImage {
  url
  alt
}`) as unknown as TypedDocumentString<ProductsGetSearchedQuery, ProductsGetSearchedQueryVariables>;