// import React from 'react';
// import Search from '../modules/home/Search';
// import HomeHeader from '../modules/home/HomeHeader';
// import JsonDataDisplay from '../modules/sugar/Board'



// const SugarPage = () => {
//     return (
//         <div className='flex flex-col bg-gradient-to-r from-[#dbaaa6] via-[#c8c8fa] to-[#c8c8fa]'>
//            <Search></Search>
//            <div className="flex flex-row">
//            <HomeHeader></HomeHeader>
//            <JsonDataDisplay/>
//         </div>
//         </div>

//     );
// };

// export default SugarPage;


import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';
import JsonDataDisplay from '../modules/sugar/Board';
import AddComponent from '../modules/sugar/AddCom'
// import Board from '../modules/sugar/board'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const SugarPage = () => {

    

    return (
        <div className='flex flex-col bg-gradient-to-r from-[#dbaaa6] via-[#c8c8fa] to-[#c8c8fa]'>
           <Search/>
           <div className="flex flex-col">
            <div className="flex flex-row">
            <HomeHeader/>
            <AddComponent/>
            </div>
            <div className="flex flex-row gap">
            <div className='w-[500px]'>
                <Line
                    data ={{
                        labels: ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ 7"],
                        datasets: [
                          {
                            label: 'Đường huyết',
                            data: [5.0, 3.2, 8.4, 9.1, 17.4, 5.6],
                            borderColor: function(context) {
                                var value = context.dataset.data[context.dataIndex];
                                if (value >= 10.0) {
                                    return 'rgba(237,245,5,1)';
                                } else if (value < 4.0) {
                                    return 'rbga(245,5,5,1)'
                                } else {
                                    return 'rgba(41, 245, 5, 1)'
                                }
                            },
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            yAxisID: 'y',
                          },
                          
                        ],
                      }}

                      option = {{responsive: true,
                        plugins: {
                          legend: {
                            // position: 'top' as const,
                          },
                          title: {
                            display: true,
                            text: 'Chart.js Line Chart',
                          },
                        },
                      }}
                 />

            </div>
            <div>
              <JsonDataDisplay/>
            </div>
            </div>
            </div>         
            
        </div>

    );
};

export default SugarPage;