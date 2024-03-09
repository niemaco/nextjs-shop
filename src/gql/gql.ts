/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Cart on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      slug\n      categories {\n        name\n        slug\n      }\n      description\n      images {\n        ...ProductImage\n      }\n    }\n    quantity\n  }\n}": types.CartFragmentDoc,
    "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n    }\n  }\n}": types.CartAddItemDocument,
    "mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}": types.CartFindOrCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "query ProductGetById($productId: ID!) {\n  product(id: $productId) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductImage on ProductImage {\n  url\n  alt\n}": types.ProductImageFragmentDoc,
    "fragment ProductItem on Product {\n  id\n  name\n  price\n  slug\n  categories {\n    name\n    slug\n  }\n  description\n  images {\n    ...ProductImage\n  }\n}": types.ProductItemFragmentDoc,
    "query ProductsGet($offset: Int, $take: Int) {\n  products(order: ASC, orderBy: DEFAULT, skip: $offset, take: $take) {\n    data {\n      ...ProductItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetDocument,
    "query ProductsGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductItem\n    }\n  }\n}": types.ProductsGetByCategoryDocument,
    "query ProductsGetByCollection($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductItem\n    }\n  }\n}": types.ProductsGetByCollectionDocument,
    "query ProductsGetRelated($offset: Int!, $take: Int!, $sortOrder: SortDirection!, $sortBy: ProductSortBy!) {\n  products(order: $sortOrder, orderBy: $sortBy, skip: $offset, take: $take) {\n    data {\n      ...ProductItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetRelatedDocument,
    "query ProductsGetSearched($offset: Int!, $take: Int!, $search: String) {\n  products(search: $search, skip: $offset, take: $take) {\n    data {\n      ...ProductItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetSearchedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      slug\n      categories {\n        name\n        slug\n      }\n      description\n      images {\n        ...ProductImage\n      }\n    }\n    quantity\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n    items {\n      product {\n        ...ProductItem\n      }\n      quantity\n    }\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($productId: ID!) {\n  product(id: $productId) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductImage on ProductImage {\n  url\n  alt\n}"): typeof import('./graphql').ProductImageFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  price\n  slug\n  categories {\n    name\n    slug\n  }\n  description\n  images {\n    ...ProductImage\n  }\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGet($offset: Int, $take: Int) {\n  products(order: ASC, orderBy: DEFAULT, skip: $offset, take: $take) {\n    data {\n      ...ProductItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategory($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollection($slug: String!) {\n  collection(slug: $slug) {\n    products {\n      ...ProductItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetRelated($offset: Int!, $take: Int!, $sortOrder: SortDirection!, $sortBy: ProductSortBy!) {\n  products(order: $sortOrder, orderBy: $sortBy, skip: $offset, take: $take) {\n    data {\n      ...ProductItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSearched($offset: Int!, $take: Int!, $search: String) {\n  products(search: $search, skip: $offset, take: $take) {\n    data {\n      ...ProductItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetSearchedDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
