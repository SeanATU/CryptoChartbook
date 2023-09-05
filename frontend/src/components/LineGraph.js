import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './chart.css';

const LineGraph = ({ labels, values }) => {
    return (
  
          <Line
            data={{
              labels: labels,
              datasets: [
                {
                  data: values,
                  label: 'Your Dataset Label', 
                  backgroundColor: 'red', 
                  borderColor: 'black',
                  borderWidth: .1,
                  fill: true,
                  radius: 0,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false, 
                },
              },
            }}
          />
        );
      };
      
      
      export default LineGraph;