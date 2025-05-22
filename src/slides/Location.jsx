// src/slides/Location.jsx
import { Card, CardContent } from "@/components/ui/card";

const attractions = [
  {
    name: "Great Smoky Mountains National Park",
    description: "America's most visited national park, offering hiking, wildlife, scenic drives, and historical sites.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Great_Smoky_Mountains_National_Park_%285343646423%29.jpg"
  },
  {
    name: "Nantahala Outdoor Center",
    description: "A premier hub for whitewater rafting, kayaking, ziplining, and riverside dining in the Smokies.",
    image: "https://noc.com/wp-content/uploads/2020/12/NOC_Riverside_Family_Rafting-scaled.jpg"
  },
  {
    name: "Harrah’s Cherokee Casino",
    description: "Major entertainment and gaming destination with a casino, events, and upscale dining.",
    image: "https://www.caesars.com/content/dam/cec/harrahs/harrahs-cherokee/hero/Hero_HarrahsCherokee.jpg"
  },
  {
    name: "Blue Ridge Parkway",
    description: "World-famous scenic byway known for breathtaking views, especially in the fall.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C7E5DD7-1DD8-B71B-0B45D7E26E5ABAA5.jpg"
  },
  {
    name: "Smoky Mountain Railroad",
    description: "Heritage rail excursions offering stunning vistas through Western North Carolina.",
    image: "https://www.gsmr.com/sites/default/files/2022-02/GSMR%20Train%20Depot.jpg"
  },
  {
    name: "Cherokee",
    description: "Cultural destination featuring museums, trails, and as a gateway to GSMNP.",
    image: "https://www.visitcherokeenc.com/uploads/images/homepage/Experience-Cherokee.jpg"
  }
];

export default function AlarkaLocationSlide() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Location Overview</h1>
      <p className="text-center text-muted-foreground text-lg">
        Alarka Micro Resort | Bryson City, NC
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <p>
            The Alarka Micro Resort site is a unique combination of serenity and proximity. Tucked along 350 feet of private creek frontage, yet just 12 minutes from downtown Bryson City, the location offers both seclusion and access. Guests will be able to unwind in a luxury nature setting while still enjoying coffee shops, breweries, and train rides just minutes away.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attractions.map((attraction, index) => (
              <div key={index} className="space-y-2">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover rounded-2xl shadow-md"
                />
                <h3 className="text-lg font-semibold">{attraction.name}</h3>
                <p className="text-sm text-muted-foreground">{attraction.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
