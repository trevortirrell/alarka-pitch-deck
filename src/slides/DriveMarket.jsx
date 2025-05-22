import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const driveMarkets = [
  {
    city: "Atlanta, GA",
    distance: "153 miles",
    driveTime: "2 hr 45 min",
    population: "6.1M",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Atlanta_Skyline_from_Buckhead.jpg",
    highlight: "Atlanta is a major urban hub and travel origin point for both weekend getaways and remote workers seeking a nature escape."
  },
  {
    city: "Charlotte, NC",
    distance: "160 miles",
    driveTime: "3 hr",
    population: "2.8M",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Charlotte_skyline_from_South_End.jpg",
    highlight: "Charlotte residents are active travelers to Western NC for hiking, fishing, and mountain getaways."
  },
  {
    city: "Asheville, NC",
    distance: "65 miles",
    driveTime: "1 hr 10 min",
    population: "465K",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Asheville_Skyline_2007.jpg",
    highlight: "A booming arts and culinary scene, Asheville drives regional tourism and makes for a strong local partnership market."
  },
  {
    city: "Knoxville, TN",
    distance: "71 miles",
    driveTime: "1 hr 30 min",
    population: "870K",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Knoxville_TN_view.jpg",
    highlight: "As a university city and short drive away, Knoxville brings steady traffic and high-season demand."
  },
  {
    city: "Greenville, SC",
    distance: "110 miles",
    driveTime: "2 hr",
    population: "920K",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Downtown_Greenville_SC_Skyline.jpg",
    highlight: "An affluent and outdoorsy demographic contributes to frequent short-stay trips."
  }
];

export default function AlarkaDriveMarketSlide() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Drive Market Access</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | Regional Reach Within 3 Hours
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <p>
            With several metro areas within a 2–3 hour drive, Alarka benefits from a powerful regional drive-to market. These cities contribute year-round demand for nature retreats, adventure travel, and remote-work escapes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {driveMarkets.map((market, index) => (
              <div key={index} className="space-y-2">
                <img
                  src={market.image}
                  alt={market.city}
                  className="w-full h-48 object-cover rounded-2xl shadow-md"
                />
                <h3 className="text-lg font-semibold">{market.city}</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Distance:</strong> {market.distance} | <strong>Drive Time:</strong> {market.driveTime}<br />
                  <strong>Population:</strong> {market.population}
                </p>
                <p className="text-sm text-muted-foreground">{market.highlight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
