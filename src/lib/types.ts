export interface PageType {
  title: string;
  content: string;
  seo: {
    title: string;
    fullHead: string;
  };
  pageFields: {
    container: string;
  };
}

export interface MediaType {
  id: string;
  altText: string;
  sourceUrl: string;
  title: string;
  mediaDetails: {
    height: number;
    width: number;
  };
}

export interface ImageType {
  id: number;
  alt: string;
  url: string;
  title: string;
  height: number;
  width: number;
  sizes: {
    large: string;
    thumbnail: string;
  };
}

export interface PostType {
  id: string;
  title: string;
  link: string;
  featuredImage: {
    node: MediaType;
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
  excerpt: string;
  featuredImage: {
    node: MediaType;
  };
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

export interface ThemeOptionsType {
  contact: {
    phone: string;
    email: string;
  };
  social: {
    facebookUrl: string;
    twitterUrl: string;
    instagramUrl: string;
  };
  defaults: {
    bannerImage: MediaType;
  };
  footer: {
    text: string;
    gallery: MediaType[];
  };
}

export interface LinkType {
  url: Url;
  title: string;
  target: "" | "_blank";
}
