import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { Box } from "@mui/material";

export default function Carroussel(props: any) {
  const data = [
    {
      icon: "https://via.placeholder.com/250",
      title: "Title One",
      price: "$0.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie ultricies luctus. Proin id massa hendrerit, placerat augue at, tincidunt felis. Ut vestibulum volutpat lacus sed finibus. Donec tempus vel mi quis interdum. Cras dapibus metus at sapien feugiat, at facilisis diam euismod.",
      href: "https://google.com",
    },
    {
      icon: "https://via.placeholder.com/250",
      title: "Title Two",
      price: "$0.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie ultricies luctus. Proin id massa hendrerit, placerat augue at, tincidunt felis. Ut vestibulum volutpat lacus sed finibus. Donec tempus vel mi quis interdum. Cras dapibus metus at sapien feugiat, at facilisis diam euismod.",
      href: "https://google.com",
    },
    {
      icon: "https://via.placeholder.com/250",
      title: "Title Three",
      price: "$0.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie ultricies luctus. Proin id massa hendrerit, placerat augue at, tincidunt felis. Ut vestibulum volutpat lacus sed finibus. Donec tempus vel mi quis interdum. Cras dapibus metus at sapien feugiat, at facilisis diam euismod.",
      href: "https://google.com",
    },
  ];

  const table = props.cards.map((element: any, index: number) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState<number>(4);
  const [showArrows, setShowArrows] = useState<boolean>(true);
  const [goToSlide, setGoToSlide] = useState<number>(0);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);
  console.log(goToSlide, "goToSlide", offsetRadius);

  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
