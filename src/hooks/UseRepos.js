import { useEffect, useState } from "react";

// exp://kof_utc-anonymous-8081.exp.direct
//

const useRepos = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    // Replace the IP address part with your own IP address!
    setLoading(true);

    const response = await fetch("http://100.127.3.78:5001/api/repositories");
    const json = await response.json();

    console.log(json);
    setLoading(false);

    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};
export default useRepos;
