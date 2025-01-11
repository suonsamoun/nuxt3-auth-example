export default defineNuxtPlugin(async () => {
  console.log("Auth plugin");

  const { me } = useAuth();

  await me();
});
