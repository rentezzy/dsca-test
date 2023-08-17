import { useState } from "react";
export const usePricesForm = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("");
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(7);
  const [width, setWidth] = useState(2.5);
  const [length, setLength] = useState(3);
  const handlerStringCreator = (setter: (v: string) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => setter(e.target.value);
  };
  const handlerNumberCreator = (setter: (v: number) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => setter(+e.target.value);
  };
  const onSubmit = () => {
    console.log("====Форма відправлена====");
    console.log("Звідки:", from);
    console.log("Куди:", to);
    console.log("Тип вантажу:", type);
    console.log("Вага вантажу:", weight);
    console.log(`Габарити:${height} x ${width} x ${length}`);
  };
  return {
    from: {
      value: from,
      onChange: handlerStringCreator(setFrom),
      name: "from",
    },
    to: { value: to, onChange: handlerStringCreator(setTo), name: "from" },
    type: {
      value: type,
      onChange: handlerStringCreator(setType),
      name: "type",
    },
    weight: {
      value: weight,
      onChange: handlerNumberCreator(setWeight),
      name: "weight",
    },
    height: {
      value: height,
      onChange: handlerNumberCreator(setHeight),
      name: "height",
    },
    width: {
      value: width,
      onChange: handlerNumberCreator(setWidth),
      name: "width",
    },
    length: {
      value: length,
      onChange: handlerNumberCreator(setLength),
      name: "length",
    },
    submit: onSubmit,
  };
};
