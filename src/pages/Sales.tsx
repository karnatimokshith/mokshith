import { ShoppingCart, TrendingUp, Users, DollarSign, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sales() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Sales & CRM</h1>
          <p className="text-muted-foreground">Manage customers, leads, and sales pipeline</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Create Quote</Button>
          <Button className="bg-gradient-info text-info-foreground">
            <Plus className="w-4 h-4 mr-2" />
            New Lead
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-success">+42 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            <p className="text-xs text-muted-foreground">In pipeline</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-success">+3.2% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$482,500</div>
            <p className="text-xs text-muted-foreground">86 orders</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sales Pipeline</CardTitle>
          <CardDescription>Track deals through your sales process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { stage: "Lead", count: 24, value: "$125,000", color: "bg-info-light" },
              { stage: "Qualified", count: 18, value: "$280,000", color: "bg-warning-light" },
              { stage: "Proposal", count: 12, value: "$420,000", color: "bg-primary/10" },
              { stage: "Closed", count: 8, value: "$380,000", color: "bg-success-light" },
            ].map((stage) => (
              <div key={stage.stage} className={`${stage.color} rounded-lg p-4`}>
                <h4 className="font-medium text-foreground">{stage.stage}</h4>
                <p className="text-2xl font-bold mt-2">{stage.count}</p>
                <p className="text-sm text-muted-foreground">deals</p>
                <p className="text-sm font-medium mt-2">{stage.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>Latest customer orders and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <ShoppingCart className="w-10 h-10 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Order #ORD-2024-08{i}</p>
                    <p className="text-sm text-muted-foreground">Customer Name {i}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(5000 * i).toLocaleString()}</p>
                  <p className="text-sm text-success">Processing</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}