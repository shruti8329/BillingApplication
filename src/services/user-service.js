import { myAxios } from "./helper";

export const SignUp = (user) => {
  return myAxios
    .post("/GoMart/users/loggedin", user)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
