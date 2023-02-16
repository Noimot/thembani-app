import ReactApexChart from "react-apexcharts";
// import { ApexOptions } from "apexcharts";

export default function RadialChart() {
  const balance = 88888 //from the database
  const paid = 10000 //from the database
  const total = balance + paid
  const chartData = {
    series: [(balance/total) * 100],
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          offsetY: -10
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              value: {
                offsetY: 120,
                fontSize: '26px',
                color: '#7D8080',
                formatter: function () {
                  return 'MZN '  + total;
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: [''],
      },
  };

  return (
    <div className="relative">
      <div className="flex gap-[10px] items-center absolute top-[50%] left-[-70px] w-full">
        <span className="text-[10px]">MZN {balance}</span>
        <span className="border-t  border-gray-400 w-[20%]"></span>
      </div>
      <div className="flex gap-[10px] items-center absolute top-[70%] right-[-250px] w-full">
        <span className="border-t  border-gray-400 w-[20%]"></span>
        <span className="text-[10px]">MZN {paid}</span>
      </div>
      <ReactApexChart options={chartData.options} series={chartData.series} type='radialBar' height={400} />

      <div className="flex gap-[100px] justify-center">
        <div className="flex gap-[8px] items-center">
          <div className="h-[18px] w-[18px] rounded-[50%] bg-blue-4"></div>
          <span>Balance</span>
        </div>
        <div className="flex gap-[8px] items-center">
          <div className="h-[18px] w-[18px] rounded-[50%] bg-white"></div>
          <span>Paid</span>
        </div>
      </div>
    </div>
  );
}