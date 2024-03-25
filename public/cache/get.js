export const get = async () => {
  const data = await fetch("/getdata", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });
  const res = await data.json();
  return res;
};
