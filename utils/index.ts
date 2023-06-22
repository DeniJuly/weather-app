import { Weather } from '@/types';

export async function fetchWeather(timestamp:number) {
    const lat = process.env.LAT;
    const lon= process.env.LON;
    const dt= timestamp;
    const appid= process.env.API_KEY;
    const units= "metric";
    const lang= "id";

    const url = `${process.env.API_URL}?lat=${lat}&lon=${lon}&dt=${dt}&appid=${appid}&units=${units}&lang=${lang}`;
    const response = await fetch(url, {next: {revalidate: 600}});
    const result = await response.json() as Weather;
    return result;
}