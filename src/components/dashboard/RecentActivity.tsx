import { FileText, Package, Users, DollarSign, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "invoice",
    message: "Invoice #INV-2024-001 created",
    user: "John Smith",
    time: "2 minutes ago",
    icon: FileText,
    color: "bg-primary",
  },
  {
    id: 2,
    type: "order",
    message: "New order #ORD-2024-089 received",
    user: "System",
    time: "15 minutes ago",
    icon: ShoppingCart,
    color: "bg-success",
  },
  {
    id: 3,
    type: "employee",
    message: "Sarah Johnson joined the team",
    user: "HR Department",
    time: "1 hour ago",
    icon: Users,
    color: "bg-info",
  },
  {
    id: 4,
    type: "inventory",
    message: "Low stock alert for Product SKU-1234",
    user: "System",
    time: "2 hours ago",
    icon: Package,
    color: "bg-warning",
  },
  {
    id: 5,
    type: "payment",
    message: "Payment received from ABC Corp",
    user: "Finance",
    time: "3 hours ago",
    icon: DollarSign,
    color: "bg-success",
  },
];

export function RecentActivity() {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0", activity.color)}>
              <activity.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground">{activity.message}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{activity.user}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-sm text-primary hover:text-primary-hover transition-colors duration-fast">
        View all activity →
      </button>
    </div>
  );
}