import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import Comparison1After from "~/assets/img/comparison/comparison-1-after.png";
import Comparison1Before from "~/assets/img/comparison/comparison-1-before.png";

const ComparisonSlider = () => {
  return (
    <ReactCompareSlider
      className="mx-auto mt-6 h-[290px] max-w-[1000px] sm:h-[340px] md:h-[380px] lg:h-[460px]"
      itemOne={
        <ReactCompareSliderImage
          className="!object-[0_10%]"
          src={Comparison1Before.src}
          alt="Image one"
        />
      }
      itemTwo={
        <ReactCompareSliderImage src={Comparison1After.src} alt="Image two" />
      }
    />
  );
};

export default ComparisonSlider;
