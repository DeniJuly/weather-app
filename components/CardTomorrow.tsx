import { fetchWeather } from "@/utils";
import moment from "moment-timezone";
import Image from "next/image";
import React from "react";

interface CardTomorrowProps {
  day: number;
}
const CardTomorrow = async ({ day }: CardTomorrowProps) => {
  const unixTimestamp = moment().tz("Asia/Jakarta").add(day, "d").unix();
  const result = await fetchWeather(unixTimestamp);
  let weather = result?.data[0];
  return (
    <div className="shadow-card border border-gray-200 bg-white dark:bg-black-80 dark:border-black-90 w-full rounded-2xl px-8 py-5 gap-3 text-center flex flex-col items-center">
      <Image
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        width={100}
        height={100}
        alt="weather"
      />
      <div className="flex-1 flex-col">
        <h3 className="text-5xl font-bold text-black-70 dark:text-white">
          {weather.temp}°C
        </h3>
        <p className="text-gray-500 font-medium text-base dark:text-gray-400">
          {weather.weather[0].description} |{" "}
          {moment().add(day, "d").format("dddd, DD MMMM YYYY")}
        </p>
      </div>
    </div>
  );
};

export default CardTomorrow;
