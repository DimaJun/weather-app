import { ipInfoToken } from "./constants";

async function getLocationByIp() {
  let url = `https://ipinfo.io/json?token=${ipInfoToken}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }
    const data = await response.json();
    const city = data.city;
    return city;
  } catch (e) {
    console.error("Fetch error: ", e);
    return null;
  }
}

export default getLocationByIp;