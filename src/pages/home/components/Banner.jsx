import banner from "../../../img/banner.png";
function Banner() {
  return (
    <div className="hero  bg-red-200 rounded-lg max-lg:h-44">
      <div className="hero-content">
        <div className="max-lg:text-left max-lg:ml-0">
          <h1 className="text-5xl font-extrabold max-lg:text-2xl ">
            팀플을 찾는 가장 쉬운 방법
          </h1>
          <p className="text-xl py-2 font-semibold max-lg:text-lg">
            띵메이트와 함께 할 팀원을 찾아보세요
          </p>
        </div>
        <img
          src={banner}
          alt="bannerr"
          className="max-w-sm rounded-lg max-lg:hidden "
        />
      </div>
    </div>
  );
}

export default Banner;
