import { Card, CardContent } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const fundData = [
  { name: "Hard Construction Costs", value: 1260000 },
  { name: "Landscape Architecture", value: 100000 },
  { name: "Architecture & Engineering", value: 10000 },
  { name: "Permits & Fees", value: 7000 },
  { name: "Interior Design", value: 10000 },
  { name: "Marketing & Branding", value: 50000 },
  { name: "Contingency (10%)", value: 218000 },
  { name: "Acquisition Fee (5%)", value: 109000 },
  { name: "Project Mgmt Fee (5%)", value: 109000 },
];

const COLORS = [
  "#facc15", "#fde68a", "#c084fc", "#60a5fa", "#4ade80",
  "#f472b6", "#34d399", "#fb923c", "#818cf8"
];

export default function AlarkaUseOfFunds() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Use of Funds</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | Thoughtful Allocation for Maximum Impact
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <p>
            Every dollar in the $2.18M project budget is carefully allocated to balance premium design, operational efficiency, and strategic growth. Developer fees (acquisition and management) are in line with industry norms and aligned with execution success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <ul className="list-disc list-inside text-base space-y-1">
                {fundData.map((item, index) => (
                  <li key={index}><strong>{item.name}:</strong> ${item.value.toLocaleString()}</li>
                ))}
              </ul>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fundData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {fundData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
