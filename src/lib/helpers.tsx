import { Suspense, lazy } from "react";
import { gql } from "@apollo/client";
import { media, thumbnail, link } from "./fragments";
import Card from "@/components/common/Card";

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

      let props = JSON.parse(domNode.children[0].data);
      const Block = lazy(() => import(`@/components/blocks/${component}`));

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
