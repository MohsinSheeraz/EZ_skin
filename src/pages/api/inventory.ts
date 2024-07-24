import SteamUserInventory from "@xfaider/node-steam-inventory";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Hard-coded Steam ID for testing
  const steamId = "76561198149002159";
  const { appId = 730, contextId = 2 } = req.query;

  const options = {};
  const steamInventory = new SteamUserInventory(options);

  try {
    const formattedArray = await steamInventory.loadAndFormat({
      steamId,
      appId: Array.isArray(appId)
        ? parseInt(appId[0], 10)
        : parseInt(appId as string, 10),
      contextId: Array.isArray(contextId)
        ? parseInt(contextId[0], 10)
        : parseInt(contextId as string, 10),
    });
    res.status(200).json(formattedArray);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
