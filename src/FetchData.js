import React from "react";
import db from "./Config";

const FetchData = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  // console.log(data);

  React.useEffect(() => {
    const getPostsFromFirebase = [];
    const subscriber = db.collection("user").onSnapshot((snp) => {
      snp.forEach((doc) => {
        getPostsFromFirebase.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setData(getPostsFromFirebase);
      setLoading(false);
    });
    return () => subscriber();
  }, [data, loading]);

  if (loading) {
    return <h1>LOADING DATA. PLEASE WAIT</h1>;
  }
  return (
    <h1>
      {data.length > 0 &&
        data.map((item, index) => (
          <div key={index}>
            <h6>
              {index + 1} ) {item.name}
              <span style={{ margin: "0 10rem" }}>{item.email}</span>
              {item.password}
            </h6>
          </div>
        ))}
    </h1>
  );
};

export default FetchData;
