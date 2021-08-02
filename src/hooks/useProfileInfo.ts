/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import api from "../services/apiGitHub";

interface IUser {
  avatar_url: string;
  name: string;
}

export default function useProfileInfo() {
  const [data, setData] = useState<IUser>({ avatar_url: "", name: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      // Getting my GitHub Profile
      const response = await api.get("/users/kaique64");

      setData({
        avatar_url: response.data.avatar_url,
        name: response.data.name,
      });
      setLoading(false);
    })();
  }, []);

  return { data, loading };
}
