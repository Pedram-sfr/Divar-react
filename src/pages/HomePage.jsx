import { useQuery } from "@tanstack/react-query";
import Main from "components/templates/Main";
import SideBar from "components/templates/SideBar";
import Loader from "components/modules/Loader";
import { getAllPost } from "services/user";
import { getCategory } from "services/admin";
import { useEffect } from "react";

const style = {
  display: "flex",
};

function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery({
    queryKey: ["post-list"],
    queryFn: getAllPost,
  });
  const { data: cat, isLoading: catLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });
  useEffect(() => {
    document.title = "دیوار"
 }, []);
  return (
    <>
      {postLoading || catLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <SideBar cat={cat}/>
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
