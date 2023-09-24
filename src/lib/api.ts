import { gql } from "@apollo/client";
import client from "./client";

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

	return response.data.pages.edges;
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

	return response.data.page;
};
