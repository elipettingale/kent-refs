import { gql } from "@apollo/client";
import client from "./client";

function data(response: any)
{
	if (response.errors) {
		response.errors.forEach((error: any) => {
			throw new Error(error.message);
		})
	}

	return response.data;
}

const mediaItem = gql`
  fragment mediaItem on MediaItem {
    id
    altText
    mediaItemUrl
    title
    mediaDetails {
      height
      width
    }
  }
`;

export const getGlobal = async () => {
  let themeOptions = await getThemeOptions();
  let mainMenu = await getMenu("MAIN MENU");
  let footerMenu = await getMenu("FOOTER MENU");

  return {
    themeOptions,
    mainMenu,
    footerMenu,
  };
};

export const getThemeOptions = async () => {
  let response = await client.query({
    query: gql`
      query GetThemeOptions {
        themeOptions {
          themeOptionsFields {
            logo
            address
            email
            openingHours
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
        menu(id: "${id}", idType: NAME) {
          id
          menuItems {
            nodes {
              id
              order
              path
              label
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

export const getPageBySlug = async (slug: string) => {
  let response = await client.query({
    query: gql`
      query GetPageBySlug($slug: ID! = "${slug}") {
        page(id: $slug, idType: URI) {
          title
          content
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

export const getACFPageBySlug = async (slug: string, fields: string) => {
  let response = await client.query({
    query: gql`
      query GetACFPageBySlug($slug: ID! = "${slug}") {
        page(id: $slug, idType: URI) {
          title
          content
          ${fields}
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

export const getAllNewsPosts = async () => {
  let response = await client.query({
    query: gql`
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });

  return response.data.posts.edges;
};

export const getNewsPosts = async (after = null) => {
  let search = "first: 12";

  if (after) {
    search += `, after: "${after}"`;
  }

  let response = await client.query({
    query: gql`
      {
        posts(${search}) {
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
              }
          }
        }
      }
    `,
  });

  return data(response).posts;
};

export const getNewsPostBySlug = async (slug: string) => {
  let response = await client.query({
    query: gql`
      ${mediaItem}
      query GetPostData($slug: ID = "${slug}") {
        post(id: $slug, idType: URI) {
          id
          title
          link
          featuredImage {
            node {
              ...mediaItem
            }
          }
          content
          seo {
            fullHead
            title
          }
        }
      }
    `,
  });

  return data(response).post;
};
