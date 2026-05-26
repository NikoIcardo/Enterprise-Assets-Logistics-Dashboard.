import { JSX, useEffect, useState, useMemo } from "react";
import { Asset, DashboardState } from "../types/global";
import { testAssets } from "../test-data/testData";
import AssetTable from "../components/assets/AssetTable";

const DashboardView = (): JSX.Element => {
  const [dashboardState, setDashboardState] = useState<DashboardState>({
    assets: [],
    isLoading: true,
    error: null,
  });
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const abortController: AbortController = new AbortController();

    const fetchAssets = async () => {
      try {
        // simulate network lag
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!abortController.signal.aborted) {
          setDashboardState({
            assets: testAssets,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        setDashboardState((prev: DashboardState) => ({ ...prev, error }));
      }
    };

    fetchAssets();

    return () => {
      abortController.abort();
    };
  }, []);

  const filteredAssets = useMemo(() => {
    return searchQuery !== ""
      ? dashboardState.assets.filter((asset: Asset) =>
          asset.name.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : dashboardState.assets;
  }, [dashboardState, searchQuery]);

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-4">
      <div className="flex flex-col gap-1.5 max-w-sm">
        <label>Search for Assets</label>
        <input
          id="asset-search"
          type="text"
          placeholder="Search by Asset Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 bg-input-bg text-input-text border-input-border focus:ring-input-focus"
        />
      </div>
      {dashboardState.isLoading ? (
        <h1 className="text-green-500">Loading Assets...</h1>
      ) : (
        <AssetTable assets={filteredAssets} />
      )}
    </div>
  );
};

export default DashboardView;
