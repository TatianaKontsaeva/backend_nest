import axios from "axios";

// const host = "http://localhost:3000";

export const registration = async ({ email, password, name, surname }) => {
  try {
    const response = await axios.post(
      `/auth/signup`,

      {
        email: email,
        password: password,
        name: name,
        surname: surname,
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
