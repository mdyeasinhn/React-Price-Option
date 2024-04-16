import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarkData =[
        { "student": "Alice", "math": 85, "physics": 78, "chemistry": 90 },
        { "student": "Bob", "math": 75, "physics": 82, "chemistry": 85 },
        { "student": "Charlie", "math": 90, "physics": 88, "chemistry": 92 },
        { "student": "David", "math": 80, "physics": 75, "chemistry": 78 },
        { "student": "Emma", "math": 95, "physics": 92, "chemistry": 96 },
        { "student": "Frank", "math": 70, "physics": 68, "chemistry": 72 },
        { "student": "Grace", "math": 88, "physics": 85, "chemistry": 90 },
        { "student": "Hannah", "math": 82, "physics": 80, "chemistry": 84 },
        { "student": "Ian", "math": 78, "physics": 72, "chemistry": 76 },
        { "student": "Julia", "math": 92, "physics": 90, "chemistry": 94 }
      ]
      
      

    return (
        <div>
            <LChart width={1000} height={500} data={subjectMarkData}>
                <XAxis dataKey={name}></XAxis>
                <YAxis ></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey="physics" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;