import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const dataValue:number[] = [12,19,3]
export const data = {
  labels: [`Survey ${dataValue[0]}`, `Under Construction: ${dataValue[1]}`, `Operation: ${dataValue[2]}`],
  datasets: [
    {
      label: 'Hydropowers :',
      data: dataValue,
      backgroundColor: [
        'rgba(226, 200, 78, 0.68)',
        'rgba(42, 137, 207, 0.68)',
        'rgba(33, 147, 35, 0.8)',
      ],
      borderColor: [
        'rgba(193, 177, 14, 0.99)',
        'rgba(21, 81, 125, 0.88)',
        'rgba(64, 118, 24, 0.99)',
      ],
      borderWidth: 1,

    },
  ],
};

export default function PieChart(){
    return (
        <div className='pie-chart'>
            <Pie  data={data} />
        </div>
    );
}