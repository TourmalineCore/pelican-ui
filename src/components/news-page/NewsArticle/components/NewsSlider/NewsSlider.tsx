
import { useEffect, useRef } from "react";
import { GliderMethods } from "react-glider/dist/types";
import Glider from 'react-glider';
import { NewsArticleProps } from "@/src/common/types";
import { NewsSliderCard } from "./components/NewsSliderCard/NewsSliderCard";
import { IconArrow } from "./components/IconArrow/IconArrow";
import 'glider-js/glider.min.css';

export function NewsSlider({
  news,
}: {
  news: Pick<NewsArticleProps, 'id' | 'description' | 'title' | 'slug'>[]
}) {
  const gliderRef = useRef <GliderMethods>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    prevButtonRef.current!.disabled = true;
  }, []);

  return (
    <div
      className="news-slider"
      data-testid="news-slider"
    >
      <div className="news-slider__wrapper">
        <h2 className="container news-slider__title">Читайте также:</h2>
        <Glider
          ref={gliderRef}
          className="container"
          slidesToShow="auto"
          itemWidth={289}
          duration={1}
          exactWidth
          onSlideVisible={handleScroll}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                itemWidth: 402,
              },
            },
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 576,
              },
            },
          ]}
        >
          {news.map((newsItem) => (
            <NewsSliderCard
              key={newsItem.id}
              slug={newsItem.slug}
              title={newsItem.title}
              description={newsItem.description}
            />
          ))}
        </Glider>
        <div className="news-slider__navigation">
          <button
            ref={prevButtonRef}
            type="button"
            className="news-slider__button button news-slider__button--prev"
            onClick={scrollToPrevItem}
            aria-label="Пролистнуть новости влево"
          >
            <IconArrow />
          </button>
          <button
            ref={nextButtonRef}
            type="button"
            className="news-slider__button button"
            onClick={scrollToNextItem}
            aria-label="Пролистнуть новости вправо"
          >
            <IconArrow />
          </button>
        </div>
      </div>
    </div>
  );

  function handleScroll(e: CustomEvent) {
    const currentSlide = e.detail.slide;

    if (prevButtonRef.current) {
      prevButtonRef.current.disabled = currentSlide === 0;
    }

    if (nextButtonRef.current) {
      nextButtonRef.current.disabled = currentSlide === news.length - 1;
    }
  }

  function scrollToNextItem() {
    if (gliderRef.current) {
      gliderRef.current.scrollItem(`next`);
    }
  }

  function scrollToPrevItem() {
    if (gliderRef.current) {
      gliderRef.current.scrollItem(`prev`);
    }
  }
}
