import React from "react";
import axios from "axios";

const FetchData = async () => {
  let data;
  try {
    data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from the server.');
  }

  if (!data) {
    return <div>No Data Found !!</div>;
  }

  return (
    <div>
      <ol>
        {data &&
          Array.isArray(data?.data) &&
          data?.data?.map((ele) => <li key={ele?.id}>{ele?.title}</li>)}
      </ol>
    </div>
  );
};

export default FetchData;
