import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <div
      id="education"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        👩🏻‍🎓 我的教育经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        {[
          // 在此处修改或新增教育经历卡片
          // 如需新增卡片，复制下方整个被{}包围的对象，修改字符串内容；每个对象用逗号分隔。
          {
            img: "education.jpg",
            title: "三江学院",
            time: "2016年6月 - 2020年6月",
            descriptions: [
              "我是三江学院毕业的网路工程专业的学生，具有专业的编程知识。",
              "我热情随和，活波开朗，具有积极精神和团队精神，有较强的动手本事。",
              "对事物有敏锐的洞察力，多次的社会实践经历及在学生会工作期间锻炼了我与人沟通合作的本事以及独立本事，做事认真负责。",
            ],
          },
        ].map((item, index) => {
          return (
            <EducationCard
              key={index}
              img={item.img}
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
