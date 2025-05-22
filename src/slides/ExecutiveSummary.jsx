// src/slides/ExecutiveSummary.jsx
import { Card, CardContent } from "@/components/ui/card";

export default function AlarkaExecutiveSummary() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Executive Summary</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | BLVD Hospitality LLC
      </p>

      <img
        src="/906cb564-b1ce-4b36-b68c-3cfd2da274bf.png"
        alt="Alarka Hero Image"
        className="w-full h-64 object-cover rounded-2xl shadow-md"
      />

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Project Overview</h2>
          <p>
            Alarka Micro Resort is a boutique development of six luxury cabins nestled along 350 feet of Alarka Creek in Bryson City, NC. This nature-rich setting is paired with top-tier design and amenities to target the growing demand for experiential, short-term stays in the Smoky Mountains region.
          </p>

          <h2 className="text-xl font-semibold">Development Details</h2>
          <ul className="list-disc list-inside text-base space-y-1">
            <li><strong>Total Project Cost:</strong> $2.18M</li>
            <li><strong>Loan Request:</strong> $1.85M (85% LTC)</li>
            <li><strong>Equity Contribution:</strong> $326K</li>
            <li><strong>Entity:</strong> BLVD Hospitality LLC</li>
          </ul>

          <h2 className="text-xl font-semibold">Market Advantage</h2>
          <ul className="list-disc list-inside text-base space-y-1">
            <li>350 ft of creek frontage on 13.88 acres near Bryson City</li>
            <li>Proximity to top-tier attractions: GSMNP, NOC, Harrah’s Casino, Blue Ridge Parkway</li>
            <li>Proven demand with comparable projects like Live Oak Lake</li>
            <li>Positioned for premium rates, high occupancy, and repeat guests</li>
          </ul>

          <h2 className="text-xl font-semibold">Timeline & Launch</h2>
          <ul className="list-disc list-inside text-base space-y-1">
            <li>Construction start: August 2025</li>
            <li>Soft launch: April 2026 | Full launch: May 2026</li>
            <li>Exit window: Q1–Q3 2027 (refi or sale)</li>
          </ul>

          <h2 className="text-xl font-semibold">Financial Highlights</h2>
          <ul className="list-disc list-inside text-base space-y-1">
            <li>NOI range: $150K – $455K across conservative to ideal scenarios</li>
            <li>DSCR range: 1.2 – 3.6 during interest-only phase</li>
            <li>Two clear exit options: refi and hold, or strategic sale</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
