import React, { useState } from "react";
import styles from "./Range.module.css";

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
  onChange,
}) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className={styles.slider}
        style={{
          background: `linear-gradient(to right, #42c4ff ${percentage}%, #ddd ${percentage}%)`,
        }}
      />
      {

        /**
         * 
         * 
        <div className={styles.value}>{value}</div>
         */
      }
    </div>
  );
};

export default RangeSlider;
