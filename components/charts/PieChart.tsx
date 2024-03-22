'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

import hydroData from '../../data/hydro/hydropwers.json';
import { useFilterContext } from '../filterBars/CheckBox';

export default function PieChart() {
  const { checkedFilters } = useFilterContext();

  const filteredLicenseTypeCount = (data: any[]) => {
    let filteredHydroData = data;

    if (checkedFilters.length > 0) {
      // If both provinces and districts are selected, filter districts within selected provinces
      if (checkedFilters.some(filter => filter.includes("District"))) {
        const selectedProvinces = checkedFilters.filter(filter => !filter.includes("District"));
        filteredHydroData = data.filter(item => selectedProvinces.includes(item.Province));
      } else {
        filteredHydroData = data.filter(item => checkedFilters.includes(item.Province) || checkedFilters.includes(item.District) || checkedFilters.includes(item['License Type']));
      }
    }

    let surveyCount = 0;
    let constructionCount = 0;
    let operationCount = 0;

    // Iterate through the filtered data and count occurrences of each license type
    filteredHydroData.forEach(entry => {
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

  const licenseCounts = filteredLicenseTypeCount(hydroData);

  const data = {
    labels: [`Survey: ${licenseCounts.Survey}`, `Under Construction: ${licenseCounts.Construction}`, `Operation: ${licenseCounts.Operation}`],
    datasets: [
      {
        label: 'Hydropowers :',
        data: [licenseCounts.Survey, licenseCounts.Construction, licenseCounts.Operation],
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
      padding: 10
    }
  };
  const headline = ['According to Filter', 'Total Distribution'];
  return (
    <>
      <div className="text-center rounded font-semibold text-lg p-4 border-b border-gray-400 mt-4 bg-blue-200">
        {" "}
        {checkedFilters.length > 0 ? headline[0] : headline[1]}{" "}
      </div>
      <div className='flex flex-row align-middle justify-center bg-gray-100 h-72 w-full border border-black-1000 overflow-hidden'>
        <Pie data={data} options={options} />
      </div>
    </>
  );
}
