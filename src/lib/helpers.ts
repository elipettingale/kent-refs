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

export function renderContent(content: string | null) {
  if (content === null) {
    return;
  }

  return parse(content);
}
