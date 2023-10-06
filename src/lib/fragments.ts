import { gql } from "@apollo/client";

export const mediaItem = gql`
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

export const altMediaItem = gql`
  fragment altMediaItem on MediaItem {
    altText
  }
`;
