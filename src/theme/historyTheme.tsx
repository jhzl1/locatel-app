import tailwind from "tailwind-rn";

export const styles = {
  historyItemContainer: tailwind(
    "my-2 rounded-xl bg-gray-100 p-2 flex-row justify-between"
  ),
  amount: tailwind("font-bold text-green-800 text-2xl"),
  fontBold: tailwind("font-bold text-black uppercase"),
};
