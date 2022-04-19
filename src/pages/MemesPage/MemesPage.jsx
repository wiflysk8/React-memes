import { useEffect, useState } from "react";
import axios from "axios";
import GalleryMemes from "../../components/GalleryMemes/GalleryMemes";
import Form from "../../components/Form/Form";
import { Context } from "../../contexts/Context";

const MemesPage = () => {
  const [memes, setMemes] = useState([]);
  const [phrase, setPhrase] = useState("");
  const [phrase2, setPhrase2] = useState("");
  const [topStyle, setTopStyle] = useState("");
  const [bottomStyle, setBottomStyle] = useState("");

  const getMemes = async () => {
    const res = await axios.get("https://api.imgflip.com/get_memes");
    setMemes(res.data.data.memes);
  };

  useEffect(() => {
    getMemes();
  }, []);
  return (
    <>
      <h1>MEME PAGE</h1>
      <Context.Provider value={{ setPhrase, setPhrase2, phrase, phrase2, topStyle, bottomStyle, setTopStyle, setBottomStyle }}>
        <Form />
        <GalleryMemes memes={memes} />
      </Context.Provider>
    </>
  );
};

export default MemesPage;
