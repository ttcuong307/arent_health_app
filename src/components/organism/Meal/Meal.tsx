import { MealList } from "../../../config/dummyData/MealList"
import MealItem from "../../molecules/MealItem/MealItem";
import { DirectButton } from "../DirectButton/DirectButton";

export const Meal = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[28px]">
        <div className="w-[960px] h-[464px] flex flex-wrap gap-[8px]">
          {MealList.map((item, index) => (
            <MealItem key={index} props={item} />
          ))}
        </div>
        <DirectButton title="記録をもっとみる" link="" />
      </div>
    </>
  );
}