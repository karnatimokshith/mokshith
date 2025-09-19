import { DollarSign, Package, Users, ShoppingCart, TrendingUp, AlertTriangle } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { InventoryStatus } from "@/components/dashboard/InventoryStatus";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard0</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your business today.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Revenue"
          value={1235000}
          prefix="$"
          change={12.5}
          changeLabel="vs last month"
          icon={DollarSign}
          iconColor="bg-gradient-primary"
        />
        <MetricCard
          title="Active Orders"
          value={86}
          change={-5.2}
          changeLabel="vs last week"
          icon={ShoppingCart}
          iconColor="bg-gradient-success"
        />
        <MetricCard
          title="Inventory Value"
          value={458200}
          prefix="$"
          change={8.1}
          changeLabel="vs last month"
          icon={Package}
          iconColor="bg-gradient-info"
        />
        <MetricCard
          title="Employees"
          value={124}
          change={2.4}
          changeLabel="new this month"
          icon={Users}
          iconColor="bg-warning"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        
        {/* Quick Actions - Takes 1 column */}
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InventoryStatus />
        <RecentActivity />
      </div>

      {/* Alert Banner */}
      <div className="bg-warning-light border border-warning/20 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
        <div className="flex-1">
          <h4 className="font-medium text-foreground">System Maintenance Scheduled</h4>
          <p className="text-sm text-muted-foreground mt-1">
            The system will undergo maintenance on Sunday, Dec 24th from 2:00 AM to 4:00 AM EST. 
            Please save your work before this time.
          </p>
        </div>
      </div>
    </div>
  );
}
