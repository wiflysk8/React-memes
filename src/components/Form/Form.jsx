import React from "react";
import { Context } from "../../contexts/Context";
import { useContext } from "react";
import "./Form.scss";

const Form = () => {
  const { setPhrase, setPhrase2, setTopStyle, setBottomStyle } = useContext(Context);

  const onChange = (e) => {
    setPhrase(e.target.value);
  };

  return (
    <>
      <form>
        <input type="text" placeholder="Top Phrase" onInput={onChange} />
        <input type="text" placeholder="Top Style" onInput={(e) => setTopStyle(e.target.value)} />
        <input type="text" placeholder="Bottom Phrase" onInput={(e) => setPhrase2(e.target.value)} />
        <input type="text" placeholder="Bottom Style" onInput={(e) => setBottomStyle(e.target.value)} />
      </form>
    </>
  );
};

export default Form;
