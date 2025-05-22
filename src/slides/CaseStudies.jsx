import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function AlarkaCaseStudies() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">Market Comparables & Case Studies</h1>
      <p className="text-center text-muted-foreground text-lg">
        Proven performance from comparable luxury micro resorts
      </p>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-yellow-500" /> Live Oak Lake – Waco, TX
            </h2>
            <img
              src="https://static.wixstatic.com/media/7bd19b_9ed445a064fd4033b91a213cf7d0a50b~mv2.jpg/v1/fill/w_1838,h_1618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/7bd19b_9ed445a064fd4033b91a213cf7d0a50b~mv2.jpg"
              alt="Live Oak Lake Cabin"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            <p>
              Built in 2021 and opened in early 2022, Live Oak Lake is a 7-cabin luxury retreat near Waco, Texas. Developed for $2.3M, it was sold just 18 months later for $7M in October 2023. The project achieved high occupancy and strong ADR through upscale design, digital marketing, and a direct booking strategy. Its rapid appreciation and successful exit to institutional buyers underscores the market's appetite for well-executed micro resorts.
            </p>
            <p className="text-sm text-blue-600 underline">
              <a href="https://wefunder.com/updates/167643-live-oak-lake" target="_blank" rel="noopener noreferrer">
                Case Study 1: Wefunder Update
              </a><br />
              <a href="https://waitlist.experientialhospitality.com/posts/why-we-sold-live-oak-lake-1" target="_blank" rel="noopener noreferrer">
                Case Study 2: Why We Sold Live Oak Lake
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-yellow-500" /> Onera – Fredericksburg, TX
            </h2>
            <img
              src="https://stayonera.com/wp-content/uploads/2025/03/Monarch-26.jpg"
              alt="Onera Fredericksburg Cabin"
              className="w-full h-64 object-cover rounded-2xl shadow-md"
            />
            <p>
              Built in 2021 and opened in November of that year, Onera is a luxury glamping and micro resort that quickly attracted institutional attention. It was acquired by Summit Hotel Properties in October 2022 for a $7M valuation, with a $6.3M payout to founders who retained 10% equity. With just 11 unique lodging units, Onera proved the scalability and exit value of design-driven outdoor hospitality.
            </p>
            <p className="text-sm text-blue-600 underline">
              <a href="https://www.businesswire.com/news/home/20221107005880/en/Glamping-Goes-Institutional-Summit-Hotel-Properties-and-Onera-Escapes-Announce-Partnership-with-First-Ever-Public-REIT-Dedicated-Glamping-Investment" target="_blank" rel="noopener noreferrer">
                Case Study: Summit & Onera Partnership
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
