//import CustomBarChart from "../CustomBarChart/CustomBarChart";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const bookList = [
  {
    name: 'The Catcher in the Rye',
    pages: 224,
  },
  {
    name: 'To Kill a Mockingbird',
    pages: 336,
  },
  {
    name: '1984',
    pages: 328,
  },
  {
    name: 'Pride and Prejudice',
    pages: 432,
  },
  {
    name: 'The Great Gatsby',
    pages: 180,
  },
  {
    name: 'The Hobbit',
    pages: 310,
  },



  // Add more months as needed
];

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <path
      d={`M${x},${y + height} L${x + width},${y + height} L${x + width / 2},${y} Z`}
      fill={fill}
      stroke="none"
    />
  );
};

const ReadPage = () => {

   
    return (
        <div>

<div>
      {/* <CustomBarChart data={data} /> */}
    </div>

    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-xl">
        <BarChart
          width={500}
          height={400}
          data={bookList}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
            {bookList.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
    
  
        </div>
    );
};

export default ReadPage;