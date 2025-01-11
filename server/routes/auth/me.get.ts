export default defineEventHandler(async (event) => {
  const userWithPassword = event.context.user;

  console.log({ userWithPassword });

  if (!userWithPassword) {
    return {
      user: null,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...userWithoutPassword } = userWithPassword;

  return {
    user: userWithoutPassword,
  };
});
