import { Plus, FileText, Package, Users, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    label: "New Invoice",
    icon: FileText,
    color: "bg-gradient-primary",
  },
  {
    label: "Add Product",
    icon: Package,
    color: "bg-gradient-success",
  },
  {
    label: "New Employee",
    icon: Users,
    color: "bg-gradient-info",
  },
  {
    label: "Create Order",
    icon: Receipt,
    color: "bg-warning",
  },
];

export function QuickActions() {
  return (
    <div className="bg-card rounded-lg p-6 shadow-card">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant="outline"
            className="h-auto flex flex-col items-center gap-2 p-4 hover:bg-muted transition-all duration-base"
          >
            <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}