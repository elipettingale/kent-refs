export interface PageType {
    title: string;
    content: string;
    seo: {
      title: string;
      fullHead: string;
    };
  }
  
  export interface MediaItemType {
    id: string;
    altText: string;
    mediaItemUrl: string;
    title: string;
    mediaDetails: {
      height: number;
      width: number;
    };
  }
  
  export interface PostType {
    id: string;
    title: string;
    link: string;
    featuredImage: {
      node: MediaItemType;
    };
    content: string;
    seo: {
      title: string;
      fullHead: string;
    };
  }
  
  export interface PaginatedPostType {
    id: string;
    title: string;
    slug: string;
    link: string;
  }
  
  export interface PaginatedPostsType {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    edges: [
      {
        node: PaginatedPostType;
      }
    ];
  }
  
  export interface MenuType {
    id: string;
    menuItems: {
      nodes: [
        {
          id: string;
          path: string;
          label: string;
        }
      ];
    };
  }
  