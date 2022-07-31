import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div
      id="project"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-4 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        👩🏻‍💻 我的项目经历
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto lg:grid grid-cols-2">
        {[
          // 在此处修改或新增项目经历卡片
          // 如需新增卡片，复制下方整个被{}包围的对象，修改字符串内容；每个对象用逗号分隔。
          {
            img: "project1.jpg",
            title: "仿饿了么外卖系统app",
            time: "2022年3月 - 2022年5月",
            descriptions: [
              "掌握组件化、模块化和工程化的开发模式。产出基于模拟 json 后端数据，实现前后端分离开发的外卖app。",
              "多路由开发的单页面应用，采用ajax方法中的axios向服务器发送请求，实现前后端数据交互。",
            ],
            tags: [
              "Javascript",
              "vue",
              "html5",
              "css",
              "less",
              "webpack",
              "MongoDB",
              "postman",
            ],
          },
          {
            img: "project2.jpg",
            title: "在线无服务器简历小网站",
            time: "2021年6月 - 2021年7月",
            descriptions: [
              "开发一个属于自己个人的简历网站。",
              "在4everland通过静态网站托管部署个人网站，实现无服务器在线访问。",
              "云对象存储在线读取和写入数据，方便快捷。",
            ],
            tags: [
              "Javascript",
              "React",
              "4everland",
              "html5",
              "MongoDB",
              "Mongoose",
            ],
          },
        ].map((item, index) => {
          return (
            <ProjectCard
              key={index}
              img={item.img}
              title={item.title}
              time={item.time}
              descriptions={item.descriptions}
              tags={item.tags}
            />
          );
        })}
      </div>
    </div>
  );
}
