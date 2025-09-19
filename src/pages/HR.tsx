import { Users, Calendar, DollarSign, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HR() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">HR & Payroll</h1>
          <p className="text-muted-foreground">Manage employees, attendance, and payroll processing</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Process Payroll</Button>
          <Button className="bg-gradient-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">Active workforce</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">On Leave Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">6.5% of workforce</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">12</div>
            <p className="text-xs text-muted-foreground">Require approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$385,200</div>
            <p className="text-xs text-muted-foreground">Due in 5 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Hires</CardTitle>
            <CardDescription>New employees joined in the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah Johnson", role: "Senior Developer", dept: "Engineering", date: "Dec 1, 2024" },
                { name: "Michael Chen", role: "Product Manager", dept: "Product", date: "Nov 28, 2024" },
                { name: "Emily Davis", role: "Marketing Specialist", dept: "Marketing", date: "Nov 15, 2024" },
              ].map((employee, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-sm text-muted-foreground">{employee.role} • {employee.dept}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{employee.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leave Requests</CardTitle>
            <CardDescription>Pending approval for time off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Smith", type: "Vacation", days: 5, dates: "Dec 20-24" },
                { name: "Lisa Wang", type: "Sick Leave", days: 2, dates: "Dec 15-16" },
                { name: "Robert Brown", type: "Personal", days: 1, dates: "Dec 18" },
                { name: "Amy Wilson", type: "Vacation", days: 3, dates: "Dec 27-29" },
              ].map((request, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{request.name}</p>
                    <p className="text-sm text-muted-foreground">{request.type} • {request.days} days</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{request.dates}</span>
                    <Button size="sm" variant="outline">Review</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Department Overview</CardTitle>
          <CardDescription>Employee distribution across departments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { dept: "Engineering", count: 42, budget: "$142,000" },
              { dept: "Sales", count: 28, budget: "$98,000" },
              { dept: "Marketing", count: 18, budget: "$65,000" },
              { dept: "Operations", count: 36, budget: "$80,200" },
            ].map((dept) => (
              <div key={dept.dept} className="text-center p-4 bg-muted rounded-lg">
                <Users className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="font-medium">{dept.dept}</p>
                <p className="text-2xl font-bold mt-1">{dept.count}</p>
                <p className="text-xs text-muted-foreground">employees</p>
                <p className="text-sm font-medium mt-2">{dept.budget}</p>
                <p className="text-xs text-muted-foreground">monthly</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}