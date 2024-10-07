import React from 'react';
import DashboardCards from './DashboardCards';
import LineChart from './LineChart';
import PieChart from './PieChart';
import BarChart from './BarChart';

function MainContent() {
  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>
        <DashboardCards />
        <div className="row">
          <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
              <LineChart />
            </div>
          </div>
          <div className="col-xl-6 col-xxl-7">
            <BarChart />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-xxl-3 d-flex">
            <PieChart />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
