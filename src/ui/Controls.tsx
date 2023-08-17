import { useEffect, useId, useRef } from "react";
import styles from "./ui.module.css";

export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button className={`${styles.button} noselect`} onClick={onClick}>
      {children}
    </button>
  );
};

export const Input = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}: {
  value: string | number | readonly string[] | undefined;
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const id = useId();

  return (
    <div className={styles.input}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
export const Range = ({
  value,
  label,
  name,
  onChange,
  from,
  to,
}: {
  value: number;
  label?: string;
  name: string;
  from: number;
  to: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const id = useId();
  const refSpan = useRef<HTMLSpanElement>(null);
  const refInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!refSpan.current || !refInput.current) return;
    refSpan.current.style.left =
      (value / to) * (refInput.current.offsetWidth - 13) - 10 + "px";
    return () => {};
  }, [value, refSpan, to]);
  return (
    <div className={styles.range}>
      {label && <label htmlFor={id}>{label}</label>}
      <span ref={refSpan} className={styles.range__bullet}>
        {value}
      </span>
      <input
        className={styles.rangeInput}
        ref={refInput}
        id={id}
        type="range"
        value={value}
        name={name}
        onChange={onChange}
        min={from}
        max={to}
        step={0.1}
      />
      <div className={styles.range__info}>
        <span>{from}</span>
        <span>{to}</span>
      </div>
    </div>
  );
};
