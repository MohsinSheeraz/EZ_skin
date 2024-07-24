import { useEffect, useState } from "react";

const InventoryPage: React.FC = () => {
  const [inventory, setInventory] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchInventory() {
      try {
        const response = await fetch("/api/inventory?steamId=YOUR_STEAM_ID");
        const data = await response.json();
        setInventory(data);
      } catch (err) {
        setError("Failed to fetch inventory");
      }
    }

    fetchInventory();
  }, []);

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  if (!inventory.length) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="mt-5 mx-auto p-3 h-[50vh] overflow-y-scroll">
      <div className="flex flex-wrap gap-4">
        {inventory.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-lg text-center bg-[#2C2C2E]"
          >
            <div className="flex justify-center items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover "
              />
            </div>
            <p className="mt-2 text-xs tracking-tighter leading-5 text-white">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;
