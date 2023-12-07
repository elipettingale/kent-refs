import { gql } from "@apollo/client";
import client from "./client";
import { media, thumbnail } from "./fragments";
import { importFragments } from "./helpers";

function data(response: any) {
  if (response.errors) {
    response.errors.forEach((error: any) => {
      throw new Error(error.message);
    });
  }

  return response.data;
}

export const getGlobal = async () => {
  let themeOptions = await getThemeOptions();
  let mainMenu = await getMenu("main-menu");
  let footerMenu = await getMenu("footer-menu");

  return {
    themeOptions,
    mainMenu,
    footerMenu,
  };
};

export const getThemeOptions = async () => {
  let response = await client.query({
    query: gql`
      ${media}
      ${thumbnail}
      query GetThemeOptions {
        themeOptions {
          themeOptionsFields {
            contact {
              phone
              email
            }
            social {
              twitterUrl
              facebookUrl
              instagramUrl
            }
            defaults {
              bannerImage {
                ...media
              }
            }
            footer {
              text
              gallery {
                ...thumbnail
              }
            }
          }
        }
      }
    `,
  });

  return data(response).themeOptions.themeOptionsFields;
};

export const getMenu = async (id: string) => {
  let response = await client.query({
    query: gql`
      query GetMenu {
        menu(id: "${id}", idType: SLUG) {
          id
          menuItems(first: 1000) {
            nodes {
              id
              order
              path
              label
              parentId
            }
          }
        }
      }
    `,
  });

  return data(response).menu;
};

export const getAllPages = async () => {
  let response = await client.query({
    query: gql`
      {
        pages(first: 10000) {
          edges {
            node {
              slug
              template {
                templateName
              }
              isFrontPage
              isPostsPage
            }
          }
        }
      }
    `,
  });

  return data(response).pages.edges;
};

export const getPageBySlug = async (slug: string, acfFields: string = "") => {
  let response = await client.query({
    query: gql`
      ${importFragments(acfFields)}
      query GetPageBySlug($slug: ID! = "${slug}") {
        page(id: $slug, idType: URI) {
          title
          content
		      ${acfFields}
          seo {
            title
            fullHead
          }
        }
      }
    `,
  });

  return data(response).page;
};

export const getAllPosts = async (postType: string, fields = "slug") => {
  let response = await client.query({
    query: gql`
      {
        ${postType}(first: 10000) {
          edges {
            node {
              ${fields}
            }
          }
        }
      }
    `,
  });

  return response.data[postType].edges;
};

export const getAllPostsForTaxonomy = async (
  postType: string,
  taxName: string,
  taxValue: string,
  fields = "slug"
) => {
  let response = await client.query({
    query: gql`
      {
        ${postType}(first: 10000, where: {${taxName}: ["${taxValue}"]}) {
          edges {
            node {
              ${fields}
            }
          }
        }
      }
    `,
  });

  return response.data[postType].edges;
};

export const getPosts = async (
  postType: string,
  options: { first?: Number; after?: String } = {}
) => {
  let search = `first: ${options.first ?? 12}`;

  if (options.after) {
    search += `, after: "${options.after}"`;
  }

  let response = await client.query({
    query: gql`
      ${media}
      query GetPosts {
        ${postType}(${search}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
              node {
                  id
                  title
                  slug
                  link
                  excerpt
                  date
                  featuredImage {
                    node {
                      ...media
                    }
                  }
              }
          }
        }
      }
    `,
  });

  return data(response).posts;
};

export const getPostBySlug = async (
  postType: string,
  slug: string,
  acfFields: string = ""
) => {
  let response = await client.query({
    query: gql`
      ${importFragments(acfFields)}
      query GetPostData($slug: ID = "${slug}") {
        ${postType}(id: $slug, idType: URI) {
          id
          title
          link
          content
		      ${acfFields}
          seo {
            fullHead
            title
          }
        }
      }
    `,
  });

  return data(response)[postType];
};

export const getUpcomingEvents = async (first = 3) => {
  let response = await client.query({
    query: gql`
      ${media}
      query GetUpcomingEvents {
        events(first: ${first}, where: { isUpcoming: true }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              title
              slug
              link
              featuredImage {
                node {
                  ...media
                }
              }
              eventFields {
                date
                time
                venue
                address
              }
            }
          }
        }
      }
    `,
  });

  return data(response).events;
};

export const getLatestTweets = async () => {
  let response = await client.query({
    query: gql`
      query GetLatestTweets {
        tweets(first: 3) {
          edges {
            node {
              id
              title
              date
              content
            }
          }
        }
      }
    `,
  });

  return data(response).tweets;
};
