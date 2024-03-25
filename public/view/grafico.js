
const colors = [
  "#8e5ea2",
  "#3cba9f",
  "#e8c3b9",
  "#c45850",
  "#f4c542",
  "#007bff",
  "#6c757d",
  "#28a745",
];

export const viewData = async (get, element,stringa) => {
  const data = await get();
  const days = Object.keys(data.result);
  const partiti = Object.keys(data.result[days[0]]);
  let valori = [];
  days.forEach((day, index) => {
    const temp = [];
    partiti.forEach((partito) => {
      temp.push(data.result[day][partito]);
    });
    valori.push({ data: day, value: temp });
  });
  new Chart(document.getElementById(element), {
    type: "bar",
    data: {
      labels: partiti,
      datasets: valori.map((valore, index) => ({
        label: stringa + valore.data,
        backgroundColor: colors[index],
        data: valore.value,
      })),
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: "",
      },scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "marameo"
          }
        }]
      }
    },
  });
};
