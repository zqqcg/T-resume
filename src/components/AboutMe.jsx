import { LazyLoadImage } from "react-lazy-load-image-component";

export default function AboutMe() {
  return (
    <div className="container items-center justify-between mx-auto px-4 leading-normal">
      <div className="block text-center md:pt-30 pt-60 lg:mb-60">
        <div className="avatar">
          <LazyLoadImage
            className="w-52 h-52 rounded-full mx-auto"
            effect={"blur"}
            src={"profile-photo.jpg"}
            alt={"my profile photo"}
          />
        </div>
        <h2 className="font-black uppercase pt-8 pb-8 text-3xl text-yellow-500">
          👋 大家好呀！
        </h2>
        <p className="font-rubik font-semibold text-xl text-center text-gray-800 m-2">
          我是卓企全
        </p>
        {[
          // 在此处修改或新增内容，每行内容用逗号分隔：
          "我是三江学院计算机科学系毕业生。",
          "我的爱好是将想法转换成代码。",
          "我也喜欢运动跳舞。💕",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="w-full md:w-2/3 mr-auto ml-auto text-gray-500 text-base"
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
