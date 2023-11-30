interface Props {
  orientation?: "vertical" | "horizontal";
  color?: string;
}

export default function LinesIcon({
  orientation = "vertical",
  color = "[currentColor]",
}: Props) {
  if (orientation === "vertical") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
        height={50}
        viewBox="0 0 268 715"
        className={`inline fill-${color}`}
      >
        <path
          d="M909.087 1276.03h35.368v280.031h-35.368z"
          transform="matrix(1 0 0 2.14151 -732.237 -2671.78)"
        />
        <path
          d="M909.087 1276.03h35.368v280.031h-35.368z"
          transform="translate(-857.814 -1215.844)"
        />
        <path
          d="M909.087 1276.03h35.368v280.031h-35.368z"
          transform="matrix(1 0 0 1.57225 -794.13 -1945.62)"
        />
      </svg>
    );
  }

  if (orientation === "horizontal") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
        width={50}
        viewBox="0 0 605 176"
        className={`inline fill-${color}`}
      >
        <g transform="translate(-61.078 -21.516)">
          <clipPath id="a">
            <path d="M61.078 21.516h604.038v175.701H61.078z" />
          </clipPath>
          <g clipPath="url(#a)">
            <path
              d="M909.087 1276.03h35.368v280.031h-35.368z"
              transform="matrix(0 -1 2.14151 0 -2670.322 996.857)"
            />
            <path
              d="M909.087 1276.03h35.368v280.031h-35.368z"
              transform="matrix(0 -1 1.57225 0 -1944.152 1058.757)"
            />
          </g>
        </g>
      </svg>
    );
  }

  return "Invalid Orientation";
}
