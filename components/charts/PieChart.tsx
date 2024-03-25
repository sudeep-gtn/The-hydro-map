'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

import hydroData from '../../data/hydro/hydropwers.json';
import { useFilterContext } from '../filterBars/CheckBox';

export default function PieChart() {
  const { checkedFilters } = useFilterContext();

  const filteredLicenseTypeCount = (data: any[]) => {
    let filteredHydroData = data;
    if (checkedFilters.length > 0) {
      filteredHydroData = hydroData.filter((item: any) => {
        if (checkedFilters.includes("lessThan20")) {
          // Filter items with capacity less than 20
          return item["Capacity (MW)"] < 20;
        } else if (checkedFilters.includes("20to50")) {
          // Filter items with capacity between 20 and 50
          return item["Capacity (MW)"] >= 20 && item["Capacity (MW)"] <= 50;
        } else if (checkedFilters.includes("50to100")) {
          // Filter items with capacity between 50 and 100
          return item["Capacity (MW)"] > 50 && item["Capacity (MW)"] <= 100;
        } else if (checkedFilters.includes("above100")) {
          // Filter items with capacity above 100
          return item["Capacity (MW)"] > 100;
        } else {
          // Return true for items if no capacity range is selected
          return checkedFilters.includes(item.Province) || checkedFilters.includes(item.District) || checkedFilters.includes(item['License Type']);
        }
      });
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
      <div className="text-center rounded font-semibold text-lg p-4 border-b border-gray-400 mt-2 bg-blue-200">
        {" "}
        {checkedFilters.length > 0 ? headline[0] : headline[1]}{" "}
      </div>
      <div className='flex flex-row align-middle justify-center bg-gray-100 h-64 w-full border border-black-1000 overflow-hidden'>
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}
