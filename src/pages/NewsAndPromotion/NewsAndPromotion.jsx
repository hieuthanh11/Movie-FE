import React, { useMemo } from "react";
import { dataNew } from "../../data/newsData";
import { useTranslation } from "react-i18next";
import ListPromotionAndNews from "../../components/ListPromotionAndNews/ListPromotionAndNews";
import Body from "../../components/ListPromotionAndNews/Body";

const NewAndPromotion = () => {
  const { t, i18n } = useTranslation();
  const data = useMemo(() => {
    return dataNew;
  }, []);
  return (
    <div>
      <ListPromotionAndNews
        title={t("NEWS & PROMOTION")}
        start={0}
        end={data.length}
        dataNew={data}
      >
        <Body dataNew={data} start={0} end={data.length} />
      </ListPromotionAndNews>
    </div>
  );
};

export default NewAndPromotion;
