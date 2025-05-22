import { Card, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";

export default function AlarkaClosingSlide() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Let’s Build Something Beautiful</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | A smart investment in design, demand, and destination
      </p>

      <Card>
        <CardContent className="p-6 space-y-4 text-center">
          <p className="text-lg">
            With a strong team, proven financials, and a high-demand location, Alarka Micro Resort is ready to deliver
            outsized returns and unforgettable guest experiences. We invite you to join us in building the next
            standout destination in the Smoky Mountains.
          </p>

          <p className="text-base text-muted-foreground">
            Questions? Let’s talk financing, timeline, or tour the site. We’re ready to move.
          </p>

          <div className="pt-4 text-base font-semibold">
            <p>Contact:</p>
            <p>Trevor Tirrell, Founder</p>
            <p>Email: [Your Email Here]</p>
            <p>Phone: [Your Phone Number Here]</p>
          </div>

          <div className="pt-6">
            <img
              src="https://images.unsplash.com/photo-1603201667140-9d7262a20c91?fit=crop&w=1200&q=80"
              alt="Smoky Mountain Landscape"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
