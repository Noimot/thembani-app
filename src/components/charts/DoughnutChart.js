import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function DoughnutChart() {

  const data = {
    datasets: [
      {
        label: "MZN",
        data: [88888, 10000], //Real data to be used
        backgroundColor: ["rgba(54, 162, 235)", "rgba(255, 255, 255)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 255, 255, 1)"],
        borderWidth: 1
      }
    ],
    labels: ["Balance", "Paid"],
  };

  const options = {

  }
  const textCenter = {
    id: "total",
    beforeDatasetsDraw(chart, args, pluginsOptions){
      const {ctx} = chart;
      ctx.save();
      ctx.font = 'bolder 46px'
      ctx.fillStyle = '#7D8080'
      ctx.textAlign = 'center'
      ctx.textBaseLine = 'middle'
      ctx.fillText('MZN 98 888', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }
  return (
    <div className="h-[300px] w-[300px] ">
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  )
}