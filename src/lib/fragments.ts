import { gql } from "@apollo/client";

export const media = gql`
  fragment media on MediaItem {
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

export const link = gql`
  fragment link on AcfLink {
    url
    title
    target
  }
`;
