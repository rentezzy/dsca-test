import styles from "./ui.module.css";
import { Carousel as CarouselLib } from "react-responsive-carousel";
import arrow from "../assets/switch.svg";
export const Carousel = ({ children }: { children: React.ReactNode[] }) => {
  const child = children as React.ReactChild[];
  return (
    <CarouselLib
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
      renderArrowPrev={(onClickHandler) => (
        <Arrow onClickHandler={onClickHandler} direction="left" />
      )}
      renderArrowNext={(onClickHandler) => (
        <Arrow onClickHandler={onClickHandler} direction="right" />
      )}
      renderIndicator={(onClickHandler, isSelected, index) => {
        if (isSelected) {
          return (
            <div
              className={`${styles.carousel__info} ${styles.carousel__info_selected}`}
            />
          );
        }
        return (
          <div
            className={styles.carousel__info}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            key={index}
            role="button"
            tabIndex={0}
          />
        );
      }}
    >
      {...child}
    </CarouselLib>
  );
};

const Arrow = ({
  onClickHandler,
  direction,
}: {
  onClickHandler: () => void;
  direction: "left" | "right";
}) => {
  return (
    <div
      onClick={onClickHandler}
      className={`${styles.carousel__control} ${
        direction === "left" ? styles.carousel__control_rotated : ""
      } `}
    >
      <img src={arrow} alt="" className="noselect" />
    </div>
  );
};
