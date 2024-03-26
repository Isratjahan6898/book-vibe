
// import { XYPlot, HorizontalBarSeries, XAxis, YAxis } from 'recharts';
// //import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// const CustomBarChart = ({ data }) => {

//     const colors = ['#4682B4', '#FF6347', '#008000', '#FFD700'];
//     return (
//         <div>
//                <XYPlot
//       xType="ordinal"
//       margin={{ left: 100 }}
//       width={600}
//       height={400}
//       stackBy="y"
//     >
//       <XAxis />
//       <YAxis />
//       <HorizontalBarSeries
//         data={data.map((item, index) => ({ y: item.bookName, x: item.totalPages, color: colors[index] }))}
//       />
//     </XYPlot>
            
//         </div>
//     );
// };

// export default CustomBarChart;

// CustomBarChart.js

// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const CustomBarChart = ({ data }) => {
//   return (
//     <BarChart width={600} height={400} data={data}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="bookName" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="totalPages" fill="#8884d8" />
//     </BarChart>
//   );
// };

// export default CustomBarChart;
