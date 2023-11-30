interface Props {
  className?: String;
  children: any;
}

export default function Card({ className, children }: Props) {
  return (
    <div
      className={`bg-white rounded drop-shadow-md overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
