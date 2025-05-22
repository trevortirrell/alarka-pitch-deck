import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const financials = [
  { scenario: "Conservative", adr: 250, occupancy: 0.5, revenue: 273750, expenses: 123188, noi: 150563 },
  { scenario: "Expected", adr: 325, occupancy: 0.66, revenue: 470745, expenses: 188298, noi: 282447 },
  { scenario: "Ideal", adr: 400, occupancy: 0.8, revenue: 642400, expenses: 224840, noi: 417560 }
];

export default function Financials() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Financial Projections</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | Revenue, Expenses, and Net Operating Income (NOI)
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <p>
            Our financial model includes three scenarios to stress-test revenue and returns. Even under conservative assumptions, the project demonstrates lender-friendly DSCR and positive cash flow. Dynamic pricing and high occupancy potential drive upside.
          </p>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={financials} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="scenario" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#60a5fa" name="Revenue" />
              <Bar dataKey="expenses" fill="#f87171" name="Expenses" />
              <Bar dataKey="noi" fill="#34d399" name="NOI" />
            </BarChart>
          </ResponsiveContainer>

          <ul className="list-disc list-inside text-base pt-4 space-y-1">
            <li><strong>DSCR (Interest-Only):</strong> 1.2 – 3.6 across scenarios</li>
            <li><strong>Occupancy Range:</strong> 50% – 80%</li>
            <li><strong>ADR Range:</strong> $250 – $400</li>
            <li><strong>NOI Range:</strong> $150K – $417K</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
