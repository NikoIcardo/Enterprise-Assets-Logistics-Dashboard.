import { JSX } from "react";
import AssetRow from "./AssetRow";
import { Asset } from "../../types/global";

interface AssetTableProps {
  assets: Asset[];
}

const AssetTable = ({ assets }: AssetTableProps): JSX.Element => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-input-border bg-page-bg shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-input-border bg-input-bg/30 text-sm font-semibold tracking-wide">
            <th className="p-4">Asset ID</th>
            <th className="p-4">Asset Name</th>
            <th className="p-4">Asset Type</th>
            <th className="p-4">Asset Status</th>
            <th className="p-4">Asset IP Address</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-input-border">
          {assets.map((asset: Asset) => (
            <AssetRow key={asset.id} {...asset} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AssetTable;
