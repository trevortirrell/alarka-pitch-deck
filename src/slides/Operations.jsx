import { Card, CardContent } from "@/components/ui/card";
import { Rocket } from "lucide-react";

export default function AlarkaOperationsSlide() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Operational Plan & Booking Strategy</h1>
      <p className="text-center text-muted-foreground text-lg">
        Streamlined systems and smart automation to drive performance and guest satisfaction
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <ul className="list-disc list-inside text-base space-y-2">
            <li>
              <strong>Direct Booking:</strong> Powered by Hostaway, a leading all-in-one vacation rental software. Hostaway enables a custom website, CRM, marketing automation, and full OTA sync—allowing for reduced platform fees and long-term brand equity.
            </li>
            <li>
              <strong>OTA Channels:</strong> Listings on Airbnb, VRBO, and Booking.com provide visibility to global audiences while Hostaway centralizes messaging, calendars, and bookings.
            </li>
            <li>
              <strong>Pricing Optimization:</strong> Dynamic pricing through Hostaway integrates with PriceLabs to auto-adjust nightly rates based on demand, seasonality, competitor trends, and lead time.
            </li>
            <li>
              <strong>Guest Experience:</strong> Fully self-managed check-in with gated keypad access and smart locks. Integrated smart systems (thermostats, lighting, blinds) allow real-time control and monitoring. Guests receive proactive communication before, during, and after their stay.
            </li>
            <li>
              <strong>Marketing Strategy:</strong> Social-first approach (Instagram, Facebook), combined with strategic influencer stays and Google Ads.
            </li>
            <li>
              <strong>User-Generated Content (UGC):</strong> The overall design of Alarka encourages guests to share their experiences via photos and videos—boosting organic reach and credibility through authentic, peer-driven promotion.
            </li>
          </ul>

          <div className="pt-6">
            <img
              src="https://images.ctfassets.net/szez98lehkfm/2V2EDaW47dUQZma8gKAG1T/5140a7bb5f063e5aa9a7a6c267a4e3b2/hostaway-dashboard.png"
              alt="Hostaway Dashboard"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
