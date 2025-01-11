export default defineEventHandler(async (event) => {
  const user = await getUserFromSession(event);

  console.log("Server" + user);

  if (user) event.context.user = user;
});
