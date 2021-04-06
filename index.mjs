import axios from "axios";
import bytes from "bytes";

const res = await axios.get("https://mozilla.org/");
const contentLength = Number(res.headers["content-length"]);
const payloadSize = bytes(contentLength, { unitSeparator: " " });

console.log(`HTTP:${res.status} ${res.statusText} (${payloadSize})`);
