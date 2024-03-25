export const get = async () => {
  const data = await fetch("/storia/getdata", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });
  const res = await data.json();
  return res;
};

export const getPercentuale = async() =>{
  const data = await fetch("/storia/getPercentuali", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  });
  const res = await data.json();
  return res;
}