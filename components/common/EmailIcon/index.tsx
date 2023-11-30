interface Props {
  fill?: string;
  size?: number;
}

export default function EmailIcon({
  fill = "[currentColor]",
  size = 15,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`inline-block mr-2 fill-${fill}`}
    >
      <path d="M22 5v4l-10 4L2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1ZM2 11.154V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7.846l-10 4Z" />
    </svg>
  );
}
