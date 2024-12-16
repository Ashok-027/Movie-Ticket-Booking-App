import React from "react";
import './style.css';
 
const RewardsTable = ({ purchases }) => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Purchases</th>
            <th>Rewards Earned</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((item, index) => (
            <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.rewards}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default RewardsTable;
 