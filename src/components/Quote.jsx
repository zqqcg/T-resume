export default function Quote() {
  return (
    <div className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-36 mb-24">
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        🤔 我最喜欢的书摘
      </h2>
      <div className="md:w-8/12 w-10/12 mx-auto">
        <div className=" bg-gray-100 rounded-xl md:p-0 shadow-lg mb-6">
          <p className="pt-12 pb-6 text-xl px-2">
            {/* 在此处替换文本内容 */}
            "轰轰烈烈这四个字，一听就是团伙作案。"
          </p>
          <p className="pb-12 text-xl px-2">—— 《云边有个小卖部》</p>
        </div>
      </div>
    </div>
  );
}
