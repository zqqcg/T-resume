import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        💼 我的工作经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        {[
          // 在此处修改或新增工作经历卡片
          // 如需新增卡片，复制下方整个被{}包围的对象，修改字符串内容；每个对象用逗号分隔。
          {
            img: "experience1.jpg",
            role: "网站编辑 - 编辑组",
            title: "昆山百诺科技信息有限公司",
            time: "2020年4月 - 2021年11月",
            descriptions: [
              "负责各种小游戏的挖掘采集.创意内容编辑.测试上传和日常更新。",
              "独立挖掘游戏中的趣味点，进行创意编辑和趣味性攻略撰写，能够吸引更多玩家点击。",
            ],
          },
          {
            img: "experience2.jpeg",
            role: "网站编辑 - 游戏组",
            title: "昆山鑫游信息科技有限公司",
            time: "2021年12月 - 2022年3月",
            descriptions: [
              "调研了游戏编辑岗位的优势和具体业务需求，用前台编辑网站对游戏进行了测试和维护。",
              "每日查看游戏数据，对数据进行分析，通过数据分析了解游戏的热度以及后续调整。",
            ],
          },
        ].map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              img={item.img}
              role={item.role}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
