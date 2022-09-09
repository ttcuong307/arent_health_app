import { DiaryList } from "../../../config/dummyData/DiaryList"
import { DiaryItem } from "../../molecules/DiaryItem/DiaryItem"
import { DirectButton } from "../DirectButton/DirectButton"

export const MyDiary = () =>{
  return (
    <>
      <div className="w-auto h-auto flex flex-col gap-[24px]">
        <span className="w-[229px] h-[32px] text-[22px] leading-[30px] -mb-[24px]" >MY DIARY</span>
        <div className="w-[960px] h-[480px] flex flex-wrap gap-[12px]">
          {
            DiaryList.map((item,index)=>(
              <DiaryItem key={index} props={item}/>
            ))
          }
        </div>
        <div className="w-[960px] h-auto flex items-center justify-center">
          <DirectButton title="自分の日記をもっと見る" link="" />
        </div>
      </div>
    </>
  )
}