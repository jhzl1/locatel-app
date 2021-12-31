import tailwind from "tailwind-rn";

export const styles = {
  globalMargin: tailwind("p-5"),
  title: tailwind("font-bold text-2xl text-green-800"),
  balanceContainer: tailwind("my-5 p-5"),
  balanceTitle: tailwind("text-white font-bold mb-2"),
  totalBalance: tailwind("font-bold text-white text-3xl ml-2"),
  balanceContainerAmount: tailwind("flex flex-row items-center"),
  loguotButtom: tailwind(
    "bg-gray-700 flex-row justify-center items-center p-2 rounded-xl"
  ),
};
