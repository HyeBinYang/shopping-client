const regex = {
  id: /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{8,16}$/g,
  password: /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{8,16}$/g,
  email: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g,
};

export default regex;
