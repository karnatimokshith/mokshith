import { Package, AlertTriangle, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Inventory() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Inventory Management</h1>
          <p className="text-muted-foreground">Track stock levels, suppliers, and purchase orders</p>
        </div>
        <Button className="bg-gradient-success text-success-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,456</div>
            <p className="text-xs text-muted-foreground">Across 5 warehouses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">24</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">7</div>
            <p className="text-xs text-muted-foreground">Need reordering</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">From suppliers</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Product Inventory</CardTitle>
              <CardDescription>Complete list of all products in stock</CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { sku: "SKU-1234", name: "Laptop Pro 15", stock: 45, status: "optimal", price: 1299 },
              { sku: "SKU-1235", name: "Wireless Mouse", stock: 12, status: "low", price: 29 },
              { sku: "SKU-1236", name: "USB-C Cable", stock: 0, status: "out", price: 19 },
              { sku: "SKU-1237", name: "Keyboard Mechanical", stock: 78, status: "optimal", price: 149 },
              { sku: "SKU-1238", name: "Monitor 27\"", stock: 8, status: "low", price: 399 },
            ].map((product) => (
              <div key={product.sku} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Package className="w-10 h-10 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sku}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-medium">{product.stock} units</p>
                    <p className="text-sm text-muted-foreground">${product.price}</p>
                  </div>
                  <Badge variant={
                    product.status === "optimal" ? "default" :
                    product.status === "low" ? "secondary" : "destructive"
                  } className={
                    product.status === "optimal" ? "bg-success text-success-foreground" :
                    product.status === "low" ? "bg-warning text-warning-foreground" : ""
                  }>
                    {product.status === "out" && <AlertTriangle className="w-3 h-3 mr-1" />}
                    {product.status === "optimal" ? "In Stock" :
                     product.status === "low" ? "Low Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}