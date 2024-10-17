import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory } from "services/admin";
import Loader from "../modules/Loader";

import styles from "./CategoryList.module.css";
import api from "src/configs/api";
import { useState } from "react";

function CategoryList() {
  const querClient = useQueryClient();
  const [del, setDel] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
  });
  const deleteHandler = async (id) => {
    try {
      const res = await api.delete(`category/${id}`);
      if (res){
        setDel(true)
        querClient.invalidateQueries("get-categories")
      };
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.list}>
      {del && <p className={styles.success}>دسته بندی با موفقیت حذف شد</p>}
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((i) => (
          <div key={i._id}>
            <img src={`${i.icon}.svg`} alt={i.slug} />
            <h5>{i.name}</h5>
            <p>
              slug: <span>{i.slug}</span>
            </p>
            <button onClick={() => deleteHandler(i._id)}>حذف</button>
          </div>
        ))
      )}
    </div>
  );
}

export default CategoryList;
