import './Result.css';

export default function Result({ annualData }) {

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.length > 0 && annualData.map((data, index) => (
          <tr key={index}>
            <td>{data.year}</td>
            <td>${data.annualInvestment}</td>
            <td>${data.interestEarnedInYear}</td>
            <td>${data.investmentValue}</td>
            <td>${data.investmentValue}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}