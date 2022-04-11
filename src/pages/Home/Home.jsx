import { Container } from "@mui/material";
import React, { useMemo } from "react";
import MovieTheater from "../../components/MovieTheater/MovieTheater";
import CenterModeFilm from "../../components/RSlick/CenterModeFilm";
import ListPromotionAndNews from "../../components/ListPromotionAndNews/ListPromotionAndNews";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import { useTranslation } from "react-i18next";
import useStyle from "./styles.js";
import { dataNew } from "../../data/newsData";
import Body from "../../components/ListPromotionAndNews/Body";
const Home = () => {
  const { movieList } = useStyle();
  const { t, i18n } = useTranslation();
  const data = useMemo(() => {
    return dataNew;
  }, []);
  return (
    <div>
      <HomeCarousel />
      <Container className={movieList}>
        <CenterModeFilm />
        <MovieTheater />
        <ListPromotionAndNews
          title={t("NEWS")}
          start={1}
          end={4}
          dataNew={data}
        >
          <Body dataNew={data} start={1} end={4} />
        </ListPromotionAndNews>
        <ListPromotionAndNews
          title={t("PROMOTION")}
          start={4}
          end={7}
          dataNew={data}
        >
          <Body dataNew={data} start={4} end={7} />
        </ListPromotionAndNews>
      </Container>
    </div>
  );
};

export default Home;
