/* import { render, screen } from "@testing-library/react";
import { Context } from "../../contexts/Context";
import GalleryMemes from "./GalleryMemes";

const data = [
  {
    id: "181913649",
    name: "Drake Hotline Bling",
    url: "https://i.imgflip.com/30b1gx.jpg",
    width: 1200,
    height: 1200,
    box_count: 2,
  },
];

const phrase = "This is a phrase";
const phrase2 = "This is another phrase";

describe("Render", () => {
  test("img", () => {
    render(
      <Context.Provider value={{ phrase, phrase2 }}>
        <GalleryMemes memes={data} />
      </Context.Provider>
    );
    const imgElement = screen.getByTestId("card--img");

    expect(imgElement).toHaveAttribute("src", data.url);
  });
});
 */
