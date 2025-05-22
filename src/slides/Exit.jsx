import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign } from "lucide-react";

export default function AlarkaExitStrategy() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Exit Strategy</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | Two Clear Paths to Monetization
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-yellow-500" /> Refinance & Hold
            </h2>
            <p>
              Upon stabilization in 2026–2027, refinance the construction loan into a long-term mortgage. With an NOI of up to $417K and stabilized DSCR over 2.5, this option creates strong cash flow with potential for long-term asset appreciation and equity pulls.
            </p>

            <h2 className="text-xl font-semibold flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-500" /> Strategic Sale
            </h2>
            <p>
              Market comparables like Live Oak Lake and Onera show strong investor appetite for stabilized luxury cabin resorts. With solid branding, financials, and guest experience, Alarka is positioned for a premium valuation by 2027.
            </p>

            <ul className="list-disc list-inside text-base pt-2 space-y-1">
              <li><strong>Exit Window:</strong> Q1 – Q3 2027</li>
              <li><strong>Refi or Sale Flexibility:</strong> Based on performance and market timing</li>
              <li><strong>Comps:</strong> Live Oak Lake (3x return in 18 months), Onera (sold to REIT)</li>
            </ul>
        </CardContent>
      </Card>
    </div>
  );
}
