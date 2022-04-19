import CardMeme from "../CardMeme/CardMeme";
import "./GalleryMemes.scss";

const GalleryMemes = ({ memes }) => {
  return (
    <section className="c-gallery">
      {memes.map((meme) => (
        <CardMeme key={meme.id} meme={meme} />
      ))}
    </section>
  );
};

export default GalleryMemes;
