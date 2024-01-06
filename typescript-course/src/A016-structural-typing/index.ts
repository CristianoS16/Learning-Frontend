type verifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: verifyUserFn = (user, sentValue) => {
  return (
    user.username == sentValue.username && user.password == sentValue.password
  );
};

const dbUser = { username: 'TestName', password: '123456' };
const sentUser = { username: 'TestName', password: '123456' };
const loggedIn = verifyUser(dbUser, sentUser);

console.log(loggedIn);
