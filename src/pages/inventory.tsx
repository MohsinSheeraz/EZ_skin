import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the types
interface InventoryItem {
  icon_url: string;
  market_hash_name: string;
}

interface InventoryResponse {
  items: InventoryItem[];
}

const InventoryPage: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const steamID64 = params.get("steamID64");
    const appId = params.get("appId") || "252490"; // Default appId if not provided
    const contextId = params.get("contextId") || "2"; // Default contextId if not provided

    if (steamID64) {
      const fetchInventory = async () => {
        try {
          const response = await axios.get<InventoryResponse>(
            "https://test123-six-kappa.vercel.app/api/inventory",
            {
              params: { steamID64, appId, contextId },
            },
          );
          setInventory(response.data.items);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchInventory();
    } else {
      setError("Missing parameters.");
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="h-auto overflow-y-auto">
      <h1 className="text-center font-bold text-2xl text-white">Inventory</h1>
      <ul className="flex gap-x-5 p-3">
        {inventory.map((item, index) => (
          <li key={index}>
            <div className="bg-[#2C2C2E] p-2 rounded-md">
              <img
                src={item.icon_url}
                alt={item.market_hash_name}
                className="w-32 h-32"
              />
              <p className="text-sm text-center font-medium text-white">
                {item.market_hash_name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryPage;
