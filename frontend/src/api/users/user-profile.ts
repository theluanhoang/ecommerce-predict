import { useQuery } from "@tanstack/react-query";
import instance from "../instance";
import { USER_KEYS } from "./keys";
import { User } from "../../models/user";

export interface UserProfileResponse extends User {}

const URL = "/users/me";

export const useUserProfile = () => {
  return useQuery({
    queryKey: [USER_KEYS.userProfile],
    queryFn: async () => {
      const response = await instance.get<UserProfileResponse>(URL);

      return response.data;
    },
    retry: false,
  });
};
