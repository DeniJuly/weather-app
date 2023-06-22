import "moment/locale/id";

import { fetchWeather } from "@/utils";
import moment from "moment";
import Image from "next/image";
import React from "react";

moment.locale("id");
const CardToday = async () => {
  const unixTimestamp = moment().unix();
  const result = await fetchWeather(unixTimestamp);
  let weather = result?.data[0];
  return (
    <div className="shadow-card border border-gray-200 bg-white dark:bg-black-80 dark:border-black-90 rounded-2xl px-8 py-7 flex gap-3 mx-auto w-full max-w-[500px]">
      <div className="flex-1 flex-col">
        <h2 className="text-5xl md:text-7xl font-bold text-black-70 dark:text-white">
          {weather.temp}°C
        </h2>
        <p className="text-gray-500 font-medium text-base md:text-lg dark:text-gray-400">
          {weather.weather[0].description} |{" "}
          {moment().format("DD MMMM YYYY HH:ss")}
        </p>
      </div>
      <Image
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        width={100}
        height={100}
        alt="weather"
        className="flex-shrink-0"
      />
    </div>
  );
};

export default CardToday;
