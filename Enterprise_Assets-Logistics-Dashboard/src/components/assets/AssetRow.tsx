import { JSX, memo } from "react";
import { Asset } from "../../types/global";

const AssetRow = ({ id, name, type, status, ipAddress }: Asset) => {
  // Define explicit theme classes based on status
  const statusStyles =
    status === "online"
      ? "bg-green-100/80 text-green-800 dark:bg-green-100 dark:text-green-400 border-green-200 dark:border-green-900/50"
      : "bg-rose-100/80 text-rose-800 dark:bg-rose-100 dark:text-rose-400 border-rose-200 dark:border-rose-900/50";

  const dotStyles =
    status === "online"
      ? "bg-green-600 dark:bg-green-400"
      : "bg-rose-600 dark:bg-rose-400";

  return (
    <tr className="hover:bg-input-bg/10 transition-colors border-b border-input-border last:border-0">
      <td className="p-4 text-sm font-medium">{id}</td>
      <td className="p-4 text-sm">{name}</td>
      <td className="p-4 text-sm capitalize">{type}</td>
      <td className="p-4 text-sm">
        {/* Status Badge */}
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide border ${statusStyles}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${dotStyles}`} />
          <span className="uppercase text-[10px] font-bold">{status}</span>
        </span>
      </td>
      <td className="p-4 text-sm font-mono">{ipAddress}</td>
    </tr>
  );
};

export default memo(AssetRow);
