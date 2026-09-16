//users.ts for usernames and passwords storage

export const users = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  lockedOut: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  invalidPassword: {
    username: 'standard_user',
    password: 'wrong_password',
  },
};

export const errorMessages = {
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
};
