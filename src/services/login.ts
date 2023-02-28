export async function login(): Promise<{
  headers: {
    Authorization: string;
  };
}> {
  return new Promise(function (resolve) {
    resolve({
      headers: {
        Authorization: "Bearer TODO",
      },
    });
  });
}
