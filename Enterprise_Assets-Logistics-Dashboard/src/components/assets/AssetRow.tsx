import { JSX, memo } from "react";
import { Asset } from "../../types/global";

const AssetRow = ({
  id,
  name,
  type,
  status,
  ipAddress,
}: Asset): JSX.Element => {
  return (
    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
      <td>{id}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td
        className={status === "online" ? "text-emerald-500" : "text-rose-500"}
      >
        {status}
      </td>
      <td>{ipAddress}</td>
    </tr>
  );
};

export default memo(AssetRow);
