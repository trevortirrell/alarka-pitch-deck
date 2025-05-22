import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function AlarkaTeamSlide() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Project Team</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | Built by a hands-on team of experts
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-500" /> Key Team Members
            </h2>
            <ul className="space-y-4 text-base">
              <li>
                <strong>Trevor Tirrell – Founder & Project Manager</strong><br />
                Hands-on experience in HVAC, framing, roofing, electrical, and plumbing. Converted a cargo van into a $150K luxury camper. Former software engineering manager now fully focused on project execution.
              </li>
              <li>
                <strong>Shannon Lackey – General Contractor, WNC Mountain Builders</strong><br />
                25+ years in high-end residential construction. Specializes in small luxury cabins. Known for craftsmanship and integrity. NC License #104715.
              </li>
              <li>
                <strong>Scott Queen – Builder & Lead Carpenter</strong><br />
                Over 40 years of experience building custom homes and fine furniture. Master in trim, tile, cabinetry, and finish work.
              </li>
              <li>
                <strong>Tim Goodwin – Architect & Property Manager, Watershed Cabins</strong><br />
                Founder of Watershed Cabins. 20+ years in design and hospitality. Designed and operated dozens of Smoky Mountain vacation rentals.
              </li>
            </ul>
        </CardContent>
      </Card>
    </div>
  );
}
