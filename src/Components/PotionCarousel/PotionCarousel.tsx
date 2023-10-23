import React, { useRef } from "react";
import Potion1 from "../../assets/PotionAssets/potion1.png";
import Potion2 from "../../assets/PotionAssets/potion2.png";
import Potion3 from "../../assets/PotionAssets/potion3.png";
import Potion4 from "../../assets/PotionAssets/potion4.png";
import Potion5 from "../../assets/PotionAssets/potion5.png";
import Potion6 from "../../assets/PotionAssets/potion6.png";
import ArrowNext from "../../assets/PotionAssets/arrowNext.png";
import ArrowBack from "../../assets/PotionAssets/arrowBack.png";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "./PotionCarousel.css";
import { Box, Button, Stack } from "@mui/material";

const dataImg = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

function PotionCarousel() {
  const swiperRef = useRef<any>();
  const bigScreenCheck = useMediaQuery("(max-width:1725px)");

  return (
    <>
      <Stack direction="row">
        <Button onClick={() => swiperRef.current?.slidePrev()}>
          <img src={`${ArrowBack}`} alt="" style={{ width: 15 }} />
        </Button>
        <Swiper
          spaceBetween={12}
          slidesPerView={6}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          style={{ paddingInline: 30 }}
        >
          <Box sx={{ p: 3 }}>
            {dataImg.map((item) =>
              bigScreenCheck ? (
                <>
                  <SwiperSlide style={{ paddingBlock: 5 }}>
                    <img src={`${Potion1}`} alt="" style={{ width: 55 }} />
                  </SwiperSlide>{" "}
                </>
              ) : (
                <>
                  <SwiperSlide style={{ paddingBlock: -2 }}>
                    <img src={`${Potion1}`} alt="" style={{ width: 75 }} />
                  </SwiperSlide>{" "}
                </>
              )
            )}
          </Box>
        </Swiper>

        <Button onClick={() => swiperRef.current?.slideNext()} size="small">
          <img src={`${ArrowNext}`} alt="" style={{ width: 15 }} />
        </Button>
      </Stack>
    </>
  );
}

export default PotionCarousel;
