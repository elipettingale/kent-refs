import { Suspense, lazy } from "react";
import { gql } from "@apollo/client";
import { media, thumbnail, link } from "./fragments";
import Card from "@/components/common/Card";
import CardBlock from "@/components/blocks/Card";
import Banner from "@/components/blocks/Banner";
import Contact from "@/components/blocks/Contact";
import Contacts from "@/components/blocks/Contacts";
import FullBanner from "@/components/blocks/FullBanner";
import Gallery from "@/components/blocks/Gallery";
import GravityForm from "@/components/blocks/GravityForm";
import LatestNewsAndEvents from "@/components/blocks/LatestNewsAndEvents";
import LatestTweets from "@/components/blocks/LatestTweets";
import LinkButton from "@/components/blocks/LinkButton";
import Steps from "@/components/blocks/Steps";

const parse = require("html-react-parser");

export function BEM(styles: any, root: string, modifiers: object) {
  let className = styles[root] ?? "";

  Object.entries(modifiers).forEach(([modifier, shouldApply]) => {
    if (!shouldApply) return;
    className += " " + styles[`${root}--${modifier}`];
  });

  return className;
}

export function clone(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export function renderMultiContent(content: string | null) {
  if (content === null) {
    return;
  }

  let sections = content.split("core/nextpage");

  return (
    <>
      {sections.map((section, index) => {
        if (index === 0) {
          return (
            <Card key={index} className="copy p-8">
              {renderContent(section)}
            </Card>
          );
        }

        return (
          <Card key={index} className="copy p-8 mt-8">
            {renderContent(section)}
          </Card>
        );
      })}
    </>
  );
}

export function renderContent(content: string | null) {
  if (content === null) {
    return;
  }

  return parse(content, {
    replace: (domNode: any) => {
      let component = domNode.attribs?.component;

      if (!component) {
        return;
      }

      const components: any = {
        'Banner': Banner,
        'Card': CardBlock,
        'Contact': Contact,
        'Contacts': Contacts,
        'FullBanner': FullBanner,
        'Gallery': Gallery,
        'GravityForm': GravityForm,
        'LatestNewsAndEvents': LatestNewsAndEvents,
        'LatestTweets': LatestTweets,
        'LinkButton': LinkButton,
        'Steps': Steps
      }

      console.log('XX123', component);

      let props = JSON.parse(domNode.children[0].data);
      const Block: any = components[component];

      return (
        <Suspense fallback={null}>
          <Block {...props}></Block>
        </Suspense>
      );
    },
  });
}

export function renderHTML(content: string) {
  return parse(content);
}

export function flatListToHierarchical(data: any[]) {
  const tree: any[] = [];
  const childrenOf: any = {};

  data.forEach((item: any) => {
    const newItem = { ...item };
    const { ["id"]: id, ["parentId"]: parentId = 0 } = newItem;

    childrenOf[id] = childrenOf[id] || [];
    newItem["children"] = childrenOf[id];
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem);
  });

  return tree;
}

export function importFragments(query: string) {
  const fragments = (query.match(/\.\.\.(.*)/g) ?? []) as string[];

  if (fragments.length === 0) {
    return "";
  }

  return gql`
    ${fragments.includes("...media") ? media : ""}
    ${fragments.includes("...thumbnail") ? thumbnail : ""}
    ${fragments.includes("...link") ? link : ""}
  `;
}

export function date(date: any) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function metadata(seo: any) {
  return {
    title: seo.title,
    description: seo.metaDesc,
    openGraph: {
      title: seo.opengraphTitle,
      description: seo.opengraphDescription
    }
  };
}
