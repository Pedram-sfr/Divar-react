import styles from "./SideBar.module.css";

function SideBar({cat}) {
  
  return (
    <div className={styles.sidebar}>
      <h4>دسته‌ها</h4>
      <ul>
        {cat?.data.map((cat) => (
          <li key={cat._id}>
            <img src={`${cat.icon}.svg`} />
            <p>{cat.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
