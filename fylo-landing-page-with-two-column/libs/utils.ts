export const checkEmail = (email: string) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
};
