import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useHttpPost = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate()

  const postData = async (values) => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if(data.success === false) {
        setLoading(false);
        setError(data);
        return
      }
      setLoading(false);
      setError(null);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { postData, loading, error };
};

export default useHttpPost;
