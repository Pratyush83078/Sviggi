import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8768269&lng=76.62110799999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.9",
          "Referer": "https://www.swiggy.com/",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Swiggy responded with status ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("❌ Swiggy fetch failed:", error.message);
    res.status(500).json({ error: "Failed to fetch restaurant data" });
  }
});

app.listen(3000, () => console.log("✅ Backend running on http://localhost:3000"));

