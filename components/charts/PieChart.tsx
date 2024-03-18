import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const dataValue:number[] = [12,19,3];

import hydroData from '../../data/hydro/hydropwers.json';

const countLicenseTypes = (data: any[]) => {
  let surveyCount = 0;
  let constructionCount = 0;
  let operationCount = 0;

  // Iterate through the data and count occurrences of each license type
  data.forEach(entry => {
    const licenseType = entry["License Type"];
    if (licenseType === "Survey") {
      surveyCount++;
    } else if (licenseType === "Generation") {
      constructionCount++;
    } else if (licenseType === "Operation") {
      operationCount++;
    }
  });

  return {
    Survey: surveyCount,
    Construction: constructionCount,
    Operation: operationCount
  };
};

const licenseCounts = countLicenseTypes(hydroData);
console.log("Liscense Count : ",licenseCounts);


export const data = {
  labels: [`Survey:${licenseCounts.Survey}`, `Under Construction: ${licenseCounts.Construction}`, `Operation: ${licenseCounts.Operation}`],
  datasets: [
    {
      label: 'Hydropowers :',
      data: [licenseCounts.Survey,licenseCounts.Construction,licenseCounts.Operation],
      backgroundColor: [
        'rgba(206, 198, 42, 0.8)',
        'rgba(11, 110, 214, 0.8)',
        'rgba(28, 168, 41, 0.8)',
      ],
      borderColor: [
        'rgba(131, 125, 33, 0.8)',
        'rgba(27, 78, 131, 0.8)',
        'rgba(12, 84, 19, 0.8)',
      ],
      borderWidth: 1,

    },
  ],
};
const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 14
        },
      }
    }
  },
  layout: {
     padding : 20
  }
};

export default function PieChart(){
    return (
        <div className=' flex flex-row align-middle justify-center text- h-96 w-full border border-black-1000'>
            <Pie data={data} options={options}/>
        </div>
    );
}