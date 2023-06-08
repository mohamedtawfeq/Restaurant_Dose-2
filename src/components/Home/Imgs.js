import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../css/Imgs.css";

import img1 from "./imag Slider/1.jpg";
import img2 from "./imag Slider/222.jpg";
import img3 from "./imag Slider/3.jpg";
import img4 from "./imag Slider/4.jpg";
import img5 from "./imag Slider/22.png";
import img6 from "./imag Slider/1 copy.jpg";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Imgs() {
  return (
    <ImageList
      className="Imges"
      sx={{ width: "50%", height: 300 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: img1,
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: img3,
    title: "Burger",
  },
  {
    img: img4,
    title: "Camera",
  },
  {
    img: img5,
    title: "Coffee",
    cols: 2,
  },
  {
    img: img2,
    title: "Hats",
    cols: 2,
  },
  {
    img: img2,
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: img1,
    title: "Basketball",
  },
  {
    img: img3,
    title: "Fern",
  },
  {
    img: img5,
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: img6,
    title: "Tomato basil",
  },
  {
    img: img1,
    title: "Sea star",
  },
  {
    img: img3,
    title: "Bike",
    cols: 2,
  },
];
