import React from 'react';
import Card from './Card';

function DashboardCards() {
  return (
    <div className="row">
      <div className="col-sm-6">
        <Card title="Sales" value="2,382" change="-3.65%" />
        <Card title="Visitors" value="14,212" change="+5.25%" />
      </div>
      <div className="col-sm-6">
        <Card title="Earnings" value="$21,300" change="+6.65%" />
        <Card title="Orders" value="64" change="-2.25%" />
      </div>
    </div>
  );
}

export default DashboardCards;
