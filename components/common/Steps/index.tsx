import styles from "./index.module.css";

interface Props {
  steps: {
    title: String;
    description: String;
  }[];
  className?: String;
}

export default function Steps({ steps, className, ...rest }: Props) {
  return (
    <div className={`${styles.Wrapper} ${className}`} {...rest}>
      <div className="bg-slate-600 rounded flex">
        {steps.map((step, index) => (
          <div className={styles.Step}>
            <div>0{index + 1}</div>
            <div>
              <p className="text-slate-200 font-roboto font-bold text-xl mb-2">
                {step.title}
              </p>
              <p className="text-blue uppercase text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
