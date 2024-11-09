import React from 'react';
import { Card, Title, AreaChart, DonutChart, BarChart, Metric, Text } from '@tremor/react';
import { useStats } from '../contexts/StatsContext';
import { Stats } from '../types';

export default function AdminDashboard() {
  const { stats } = useStats();

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card decoration="top" decorationColor="green">
          <Title>Total Users</Title>
          <Metric>{stats.totalUsers}</Metric>
          <Text>Active: {stats.activeUsers}</Text>
        </Card>
        <Card decoration="top" decorationColor="blue">
          <Title>Total Jobs</Title>
          <Metric>{stats.totalJobs}</Metric>
        </Card>
        <Card decoration="top" decorationColor="amber">
          <Title>Applications</Title>
          <Metric>{stats.totalApplications}</Metric>
        </Card>
        <Card decoration="top" decorationColor="indigo">
          <Title>Success Rate</Title>
          <Metric>
            {Math.round((stats.applicationsByStatus.accepted / stats.totalApplications) * 100)}%
          </Metric>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <Title>User Growth</Title>
          <AreaChart
            className="h-72 mt-4"
            data={stats.userGrowth}
            index="date"
            categories={["count"]}
            colors={["green"]}
          />
        </Card>

        <Card>
          <Title>Applications by Status</Title>
          <DonutChart
            className="h-72 mt-4"
            data={Object.entries(stats.applicationsByStatus).map(([status, count]) => ({
              name: status,
              value: count
            }))}
            category="value"
            index="name"
            colors={["green", "amber", "red"]}
          />
        </Card>
      </div>

      <Card>
        <Title>Jobs by Category</Title>
        <BarChart
          className="h-72 mt-4"
          data={Object.entries(stats.jobsByCategory).map(([category, count]) => ({
            name: category,
            count: count
          }))}
          index="name"
          categories={["count"]}
          colors={["green"]}
        />
      </Card>
    </div>
  );
}