import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList
} from "recharts";

const timeline = [
  { label: "Pre-Construction Begins", date: "May 2025" },
  { label: "Construction Start", date: "August 2025" },
  { label: "Vertical Build Staggered (Cabins 1–6)", date: "Sept 2025 – Feb 2026" },
  { label: "Interior Finish & Landscaping", date: "Jan – March 2026" },
  { label: "Soft Launch", date: "April 2026" },
  { label: "Full Launch", date: "May 2026" },
  { label: "Stabilization Period", date: "Q2 2026 – Q1 2027" },
  { label: "Refi or Sale Window", date: "Q1 – Q3 2027" }
];

const ganttData = [
  { phase: "Pre-Construction", start: 1, duration: 3 },
  { phase: "Construction", start: 4, duration: 6 },
  { phase: "Interior & Landscaping", start: 9, duration: 3 },
  { phase: "Soft Launch", start: 12, duration: 1 },
  { phase: "Full Launch", start: 13, duration: 1 },
  { phase: "Stabilization", start: 14, duration: 9 },
  { phase: "Exit Window", start: 23, duration: 9 }
];

export default function AlarkaTimelineSlide() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Development Timeline</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | Key Milestones to Launch and Exit
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <p>
            A strategic 12-month construction timeline staggered across six cabins ensures efficient resource allocation and progress tracking. A 24-month interest-only loan term provides buffer and flexibility.
          </p>

          <ul className="list-disc list-inside space-y-2 text-base">
            {timeline.map((item, index) => (
              <li key={index}>
                <strong>{item.label}:</strong> {item.date}
              </li>
            ))}
          </ul>

          <div className="pt-6">
            <h2 className="text-xl font-semibold pb-2">Visual Timeline (Gantt Chart)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                layout="vertical"
                data={ganttData}
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="phase" />
                <Tooltip />
                <Bar dataKey="duration" stackId="a" fill="#facc15">
                  <LabelList dataKey="duration" position="right" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
