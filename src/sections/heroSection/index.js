import { useState } from "react";
import { Timer } from "../../components";

import "./style.css";
import HeroImg from "../../assets/images/bear-1.png";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
const Index = ({ days, hours, minutes, seconds, difference }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(0);

  const { Handle } = Slider;

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    if (value > 0) {
      setValue(value);
    }

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  return (
    <section className="text-white hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-8 col-lg-8 col-xl-8 mt-4">
            <h1>Welcome to the Secret Bear Society</h1>
            {difference > 0 ? (
              <Timer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
              />
            ) : (
              <div className="slider ml-0 ml-md-2 mx-auto">
                <div className="slider-text d-flex justify-content-between align-items-center mb-1 ">
                  <p>Total Bears Minted</p>
                  <p>0/0</p>
                </div>
                <Slider min={0} max={20} defaultValue={1} handle={handle} />
                <p className="slider-bottom-text text-center mt-2">
                  Mint 1 Secret Bear (0.000 Ether)
                </p>
                <button className="mint-now mx-auto mx-md-0">Mint Now</button>
              </div>
            )}
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4">
            <div className="hero-image-box">
              <img src={HeroImg} alt="heroImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
