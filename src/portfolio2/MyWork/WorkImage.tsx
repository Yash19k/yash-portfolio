import { CometCard } from "../../components/ui/comet-card";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

// Covers display at most ~571 CSS px wide (desktop) and ~343 px on narrower or shorter
// screens (see .work-image img in MyWork.css). The 700w copy covers 1x desktops and phones
// up to 2x density (343 px x 2 = 686); sharper screens get the 1200w original.
const SIZES = "(max-width: 1200px) 343px, (max-height: 900px) 343px, 571px";

const WorkImage = (props: Props) => {
  const small = props.image.endsWith("-cover.webp") ? props.image.replace(/\.webp$/, "-700.webp") : null;
  return (
    <div className="work-image">
      <CometCard className="w-full">
        <div
          className="work-image-in"
          data-cursor={"disable"}
          style={{ cursor: "none" }}
        >
          <img
            src={props.image}
            srcSet={small ? `${small} 700w, ${props.image} 1200w` : undefined}
            sizes={small ? SIZES : undefined}
            alt={props.alt}
            width={1200}
            height={630}
            loading="lazy"
            decoding="async"
          />
        </div>
      </CometCard>
    </div>
  );
};

export default WorkImage;
