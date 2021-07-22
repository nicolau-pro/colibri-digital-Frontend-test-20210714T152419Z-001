import Chart from 'react-google-charts';

function Average(arr) {
  const sum = arr.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
  const avg = sum / arr.length || 0;
  return avg;
}

function AgeInYears(dateString) {
  const date1 = new Date(dateString);
  const date2 = new Date();
  const differenceInTime = date2.getTime() - date1.getTime();

  return differenceInTime / (1000 * 3600 * 24 * 365);
}

const Graphs = (props) => {
  const data = props.data;

  const industries = [];

  for (const entry of data) {
    const industry = entry.industry;
    if (industry !== 'n/a' && industry !== null && !industries.includes(industry)) industries.push(entry.industry);
  }

  const AverageAgePerIndustry = [['Industry', 'Average age', 'Employees']]
    .concat(
      industries.map((industry) => [
        industry,
        Average(data.filter((entry) => entry.industry === industry).map((entry) => AgeInYears(entry.date_of_birth))),
        data.filter((entry) => entry.industry === industry).length,
      ]),
    )
    .filter((entry) => entry[1] !== 0);

  const AverageSalaryPerIndustry = [['Industry', 'Average salary', 'Employees']].concat(
    industries.map((industry) => [
      industry,
      Average(data.filter((entry) => entry.industry === industry).map((entry) => entry.salary / 1000)),
      data.filter((entry) => entry.industry === industry).length,
    ]),
  );

  const AverageSalaryPerYearsOfExperience = [['Experience (years)', 'Salary']].concat(
    data.filter((entry) => entry.years_of_experience && entry.salary).map((entry) => [entry.years_of_experience, entry.salary]),
  );

  return (
    <div className="graphs">
      <section>
        <Chart
          width={'100%'}
          height={`${AverageAgePerIndustry.length * 40 + 200}px`}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={AverageAgePerIndustry}
          options={{
            isStacked: true,
            colors: ['#693490', '#26abff'],
            backgroundColor: 'transparent',
            title: 'Average age per industry',
          }}
          // For tests
          rootProps={{ 'data-testid': '1' }}
        />
      </section>
      <section>
        <Chart
          width={'100%'}
          height={'800px'}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={AverageSalaryPerYearsOfExperience}
          options={{
            colors: ['#693490'],
            backgroundColor: 'transparent',
            title: 'Average salary per years of experience',
            hAxis: { title: 'Experience (years)', minValue: 0 },
            vAxis: { title: 'Salary', minValue: 0 },
            legend: 'none',
          }}
          rootProps={{ 'data-testid': '3' }}
        />
      </section>
      <section>
        <Chart
          width={'100%'}
          height={`${AverageSalaryPerIndustry.length * 40}px`}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={AverageSalaryPerIndustry}
          options={{
            colors: ['#693490', '#26abff'],
            title: 'Average salary per industry (thousands)',
            backgroundColor: { fill: 'transparent' },
            chartArea: { width: '40%' },
            hAxis: {
              minValue: 0,
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </section>
    </div>
  );
};

export default Graphs;
