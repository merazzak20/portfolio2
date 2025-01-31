import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useRole = () => {
  const axiospublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  console.log(user);
  const { data: role } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const { data } = await axiospublic(`user/role/${user?.email}`);
      return data.role;
    },
  });
  console.log(role);
  return [role];
};

export default useRole;
