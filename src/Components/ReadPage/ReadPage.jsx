// //import CustomBarChart from "../CustomBarChart/CustomBarChart";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'The Catcher in the Rye',pages: 224,
  },
  {
    name: 'To Kill a Mockingbird',pages: 336,
  },
  {
    name: '1984',pages: 328,
  },
  {
    name: 'Pride and Prejudice',pages: 432,
  },
  {
    name: 'The Great Gatsby',pages: 180,
  },
  {
    name: 'The Hobbit',pages: 310,
  },



  
];


const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
   Z`
);

const TriangleBar = (props) => {
  const {
    fill, x, y, width, height,
  } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};



const ReadPage = () => {

   
    return (
        <div>
                  <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} />
    </BarChart>
       </div>

    );
};




export default ReadPage;