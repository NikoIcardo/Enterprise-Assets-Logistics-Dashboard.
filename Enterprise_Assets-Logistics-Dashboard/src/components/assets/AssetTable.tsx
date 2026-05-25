import { JSX } from "react";
import AssetRow from "./AssetRow";
import { Asset } from "../../types/global";

const AssetTable = (assets: Asset[]): JSX.Element => {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <td>Asset ID</td>
        <td>Asset Name</td>
        <td>Asset Type</td>
        <td>Asset Status</td>
        <td>Asset IP Address</td>
      </thead>
      {assets.map((asset: Asset) => (
        <AssetRow key={asset.id} {...asset} />
      ))}
    </table>
  );
};

export default AssetTable;
