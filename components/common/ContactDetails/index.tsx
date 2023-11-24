interface Props {
  name: string;
  jobs: {
    title: string;
    email: string;
    phone: string;
  }[];
}

export default function ContactDetails({ name, jobs }: Props) {
  return (
    <div>
      <div className="text-2xl mb-2">{name}</div>
      {jobs.map(({ title, email, phone }, index) => (
        <div key={index} className="mb-2">
          <div className="text-md font-roboto text-blue">{title}</div>
          <div className="text-sm">
            {email && (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  className="inline-block mr-2 fill-grey-800"
                >
                  <path d="M22 5v4l-10 4L2 9V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1ZM2 11.154V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7.846l-10 4Z" />
                </svg>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            )}
            {phone && (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block mr-2 fill-grey-800"
                >
                  <path d="m16.556 12.906-.455.453s-1.083 1.076-4.038-1.862-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61.09 1.587.808 5 4.812 8.982 4.247 4.222 8.232 4.39 9.861 4.238.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.438-1.787-.309-2.417.317Z" />
                </svg>
                <a href={`tel:${email}`}>{phone}</a>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
