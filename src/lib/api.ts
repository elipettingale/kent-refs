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
            foo
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

export const getPageBySlug = async (slug: string, acfFields: string = '') => {
  let response = await client.query({
    query: gql`
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

export const getAllPosts = async (postType: string) => {
  let response = await client.query({
    query: gql`
      {
        ${postType}(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  });

  return response.data[postType].edges;
};

export const getPosts = async (postType: string, after = null) => {
  let search = "first: 12";

  if (after) {
    search += `, after: "${after}"`;
  }

  let response = await client.query({
    query: gql`
      {
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
              }
          }
        }
      }
    `,
  });

  return data(response).posts;
};

export const getPostBySlug = async (postType: string, slug: string, acfFields: string = '') => {
  let response = await client.query({
    query: gql`
      ${mediaItem}
      query GetPostData($slug: ID = "${slug}") {
        ${postType}(id: $slug, idType: URI) {
          id
          title
          link
          featuredImage {
            node {
              ...mediaItem
            }
          }
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
