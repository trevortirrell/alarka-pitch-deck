import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function AlarkaRiskMitigationSlide() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Risk Mitigation Strategy</h1>
      <p className="text-center text-muted-foreground text-lg">
        Proactive planning to minimize exposure and protect lender interests
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <ul className="list-disc list-inside text-base space-y-2">
            <li><strong>Construction Delays:</strong> Phased timeline, contractor accountability, and a 24-month interest-only loan allow for weather and permitting buffer.</li>
            <li><strong>Cost Overruns:</strong> 10% contingency and tight cost tracking, with weekly budget reviews by the project manager and GC.</li>
            <li><strong>Occupancy Risk:</strong> Conservative scenario modeled at $250 ADR and 50% occupancy still exceeds DSCR thresholds.</li>
            <li><strong>Operational Risk:</strong> Backed by Watershed Cabins’ proven systems and tech-enabled remote management for reliability and scale.</li>
            <li><strong>Market Volatility:</strong> Year-round Smoky Mountain demand, proximity to national parks, casino, and cultural draws create stable guest base.</li>
          </ul>

          <div className="pt-6">
            <img
              src="https://images.unsplash.com/photo-1612457842408-3c97a3a95a89?fit=crop&w=1200&q=80"
              alt="Risk Planning"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
