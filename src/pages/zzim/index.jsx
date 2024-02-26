import { useQuery } from "@tanstack/react-query";
import Header from "../../components/Header";
import zzim from "../../img/zzim.png";
import { getZZim } from "../../api";
import { useCookies } from "react-cookie";
import Postcard from "../home/components/Postcard";
import withAuth from "../../hocs/withAuth";
function ZZim() {
  const [cookies] = useCookies();
  const { data, isLoading } = useQuery({
    queryFn: () => getZZim(cookies.token),
    queryKey: ["zzims"],
  });
  console.log(data);
  return (
    <>
      <Header />
      <div className="flex items-center mt-24">
        <img src={zzim} alt="Contact" className="w-6 h-6 cursor-pointer mx-2" />
        <h1>찜한 글</h1>
      </div>
      <div className="flex flex-wrap">
        {data?.data.data.map((post) => (
          <div
            key={post.postId}
            className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <Postcard data={post} />
          </div>
        ))}
      </div>
    </>
  );
}

export default withAuth(ZZim);
