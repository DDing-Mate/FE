import banner from "../../../img/banner.png";
function Banner() {
  return (
    <div className="hero min-h-96 bg-red-200 rounded-lg">
      <div className="hero-content  lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">팀플을 찾는 가장 쉬운 방법</h1>
          <p className="py-6 pl-3 text-xl">
            띵메이트와 함께 할 팀원을 찾아보세요
          </p>
        </div>
        <img src={banner} alt="bannerr" className="max-w-sm rounded-lg " />
      </div>
    </div>
  );
}

export default Banner;
