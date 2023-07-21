import { requestAuth } from "./authorization";

const authentication = async (data) =>
  await requestAuth({ url: `login`, data, method: "post" });

export { authentication };
