import { VehicleSection } from "@/components/layout/VehicleSection";
import { OptionalExtras } from "@/components/layout/OptionalExtras";
import { FAQ } from "@/components/layout/FAQ";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/layout/Hero";
import { ScrollProgressLine } from "@/components/layout/ScrollProgressLine";

const insuranceOptions = [
  {
    name: "Standard",
    dailyRate: "N$ 0",
    deposit: "N$ 45,000",
    glassCover: "Excluded",
    tyresCover: "Excluded"
  },
  {
    name: "Option 1",
    dailyRate: "N$ 180",
    deposit: "N$ 20,000",
    glassCover: "Excluded",
    tyresCover: "Excluded"
  },
  {
    name: "Option 2",
    dailyRate: "N$ 275",
    deposit: "N$ 2,500",
    glassCover: "Excluded",
    tyresCover: "Excluded"
  },
  {
    name: "Option 3",
    dailyRate: "N$ 400",
    deposit: "N$ 0",
    glassCover: "Included",
    tyresCover: "Excluded"
  },
  {
    name: "Option 4",
    dailyRate: "N$ 480",
    deposit: "N$ 0",
    glassCover: "Included",
    tyresCover: "Included"
  }
];

// Single Cab Camping rental periods
const singleCabCampingPeriods = [
  {
    duration: "Daily Rental Fee 15 Days+",
    decToMar: "1380",
    aprToNov: "1513",
    julToOct: "1588"
  },
  {
    duration: "Daily Rental Fee 8-14 Days",
    decToMar: "1538",
    aprToNov: "1563",
    julToOct: "1638"
  },
  {
    duration: "Daily Rental Fee 1-7 Days",
    decToMar: "1592",
    aprToNov: "1625",
    julToOct: "1738"
  }
];

// Double Cab Camping rental periods
const doubleCabCampingPeriods = [
  {
    duration: "Daily Rental Fee 15 Days+",
    decToMar: "2054",
    aprToNov: "2279",
    julToOct: "2872"
  },
  {
    duration: "Daily Rental Fee 8-14 Days",
    decToMar: "2173",
    aprToNov: "2412",
    julToOct: "3108"
  },
  {
    duration: "Daily Rental Fee 1-7 Days",
    decToMar: "2307",
    aprToNov: "2558",
    julToOct: "3174"
  }
];

// Land Cruiser Camping rental periods
const landCruiserCampingPeriods = [
  {
    duration: "Daily Rental Fee 15 Days+",
    decToMar: "3638",
    aprToNov: "4142",
    julToOct: "4752"
  },
  {
    duration: "Daily Rental Fee 8-14 Days",
    decToMar: "3732",
    aprToNov: "4232",
    julToOct: "4881"
  },
  {
    duration: "Daily Rental Fee 1-7 Days",
    decToMar: "3841",
    aprToNov: "4355",
    julToOct: "4991"
  }
];

// Single Cab rental periods
const singleCabPeriods = [
  { 
    duration: "Daily Rental Fee 15 Days+",
    decToMar: "1380",
    aprToNov: "1405",
    julToOct: "1480"
  },
  {
    duration: "Daily Rental Fee 8-14 Days",
    decToMar: "1430",
    aprToNov: "1458",
    julToOct: "1535"
  },
  {
    duration: "Daily Rental Fee 1-7 Days",
    decToMar: "1480",
    aprToNov: "1480",
    julToOct: "1580"
  }
];

// Double Cab rental periods
const doubleCabPeriods = [
  {
    duration: "Daily Rental Fee 15 Days+",
    decToMar: "1880",
    aprToNov: "2013",
    julToOct: "2388"
  },
  {
    duration: "Daily Rental Fee 8-14 Days",
    decToMar: "1947",
    aprToNov: "2146",
    julToOct: "2573"
  },
  {
    duration: "Daily Rental Fee 1-7 Days",
    decToMar: "2079",
    aprToNov: "2279",
    julToOct: "2793"
  }
];

// Land Cruiser rental periods
const landCruiserPeriods = [
  {
    duration: "Daily Rental Fee 15 Days+",
    decToMar: "3238",
    aprToNov: "3838",
    julToOct: "4138"
  },
  {
    duration: "Daily Rental Fee 8-14 Days",
    decToMar: "3338",
    aprToNov: "3938",
    julToOct: "4338"
  },
  {
    duration: "Daily Rental Fee 1-7 Days",
    decToMar: "3438",
    aprToNov: "4038",
    julToOct: "4438"
  }
];

// SUV rental periods
const suvPeriods = [
  {
    duration: "Daily Rental Fee 15 Days+",
    decToMar: "1650",
    aprToNov: "1711",
    julToOct: "2046"
  },
  {
    duration: "Daily Rental Fee 8-14 Days",
    decToMar: "1732",
    aprToNov: "1832",
    julToOct: "2167"
  },
  {
    duration: "Daily Rental Fee 1-7 Days",
    decToMar: "1771",
    aprToNov: "1953",
    julToOct: "2288"
  }
];

const campingVehicles = [
  {
    name: "4x4 Single Cab with Camping Equipment for 2 PAX",
    dailyRate: "From N$ 1,600 / Day",
    description: "Perfect for couples or solo travelers, this compact yet fully equipped vehicle offers everything you need for your Namibian adventure.",
    specifications: [
      "2 Doors",
      "Diesel",
      "1-2 Pax",
      "Manual"
    ],
    features: [
      "2.4L Diesel Engine",
      "4x4 with Low Range",
      "Long Range Fuel Tank",
      "Dual Battery System",
      "All-Terrain Tires",
      "Air Conditioning",
      "Power Steering",
      "Radio/USB"
    ],
    rentalIncludes: [
      "2 x Airport Transfers",
      "Unlimited Km's",
      "Contract Fee (N$150)",
      "Weekend & Public Holiday Surcharge (N$300)"
    ],
    image: "/images/singlehilux.png",
    insuranceOptions,
    rentalPeriods: singleCabCampingPeriods
  },
  {
    name: "Toyota Hilux Double Cab 4x4",
    description: "Fully equipped with camping gear and rooftop tent, perfect for family adventures.",
    image: "/images/4x4hilux.png",
    dailyRate: "From N$ 1,800 / Day",
    specifications: [
      "4 Doors",
      "Diesel",
      "2-4 Pax",
      "Automatic"
    ],
    features: [
      "2.8L Diesel Engine",
      "Automatic Transmission",
      "4x4 with Low Range",
      "Rooftop Tent (Sleeps 2)",
      "Ground Tent (Sleeps 2)",
      "Full Camping Equipment",
      "Dual Battery System",
      "Long Range Fuel Tank",
      "All-Terrain Tires",
    ],
    rentalIncludes: [
      "2 x Airport Transfers",
      "Unlimited Km's",
      "Contract Fee (N$150)",
      "Weekend & Public Holiday Surcharge (N$300)"
    ],
    insuranceOptions,
    rentalPeriods: doubleCabCampingPeriods
  },
  {
    name: "Toyota Land Cruiser 79 Double Cab",
    description: "The ultimate overland vehicle, equipped with all necessary camping gear.",
    image: "/images/4x4land.png",
    dailyRate: "From N$ 2,200 / Day",
    specifications: [
      "4 Doors",
      "Diesel",
      "2-4 Pax",
      "Manual"
    ],
    features: [
      "4.5L V8 Diesel Engine",
      "Manual Transmission",
      "4x4 with Low Range",
      "Rooftop Tent (Sleeps 2)",
      "Ground Tent (Sleeps 2)",
      "Full Camping Equipment",
      "Dual Battery System",
      "140L Fuel Tank",
      "BF Goodrich All-Terrain Tires",
    ],
    rentalIncludes: [
      "2 x Airport Transfers",
      "Unlimited Km's",
      "Contract Fee (N$150)",
      "Weekend & Public Holiday Surcharge (N$300)"
    ],
    insuranceOptions,
    rentalPeriods: landCruiserCampingPeriods
  },
];

const luxuryVehicles = [
  {
    name: "Single Cab Hilux/Isuzu 2 People",
    dailyRate: "From N$ 1,380 / Day",
    description: "Designed for individual travelers or couples, this 4x4 provides extra privacy and added economy.",
    specifications: [
      "2 Doors",
      "Diesel",
      "1-2 Pax",
      "Automatic"
    ],
    features: [
      "2.0/2.4 Litre Turbo Diesel engine",
      "Airbags",
      "Canopy",
      "80-litre fuel tank",
      "Tools",
      "Air-conditioning",
      "Bluetooth"
    ],
    rentalIncludes: [
      "2 x Airport Transfers",
      "Unlimited Km's",
      "Contract Fee (N$150)",
      "Weekend & Public Holiday Surcharge (N$300)"
    ],
    image: "/images/a.png",
    insuranceOptions,
    rentalPeriods: singleCabPeriods
  },
  {
    name: "Double Cab Hilux/Isuzu 4-5 People",
    dailyRate: "From N$ 1,880 / Day",
    description: "The Toyota Hilux 2.4 is known for its durability and comfort, perfect for Namibia's 4x4 landscape. This vehicle provides ample space and a luxurious driving experience.",
    specifications: [
      "4 Doors",
      "Diesel",
      "1 - 5 Pax",
      "Automatic"
    ],
    features: [
      "2.4 Litre Turbo Diesel engine",
      "4x4 high/low range and rear diff-lock",
      "Front air-bags",
      "Canopy with dust kit",
      "All-terrain tyres",
      "80-litre fuel tank",
      "Dual battery system",
      "Air-conditioning, power steering"
    ],
    rentalIncludes: [
      "2 x Airport Transfers",
      "Unlimited Km's",
      "Contract Fee (N$150)",
      "Weekend & Public Holiday Surcharge (N$300)"
    ],
    image: "/images/b.png",
    insuranceOptions,
    rentalPeriods: doubleCabPeriods
  },
  {
    name: "Land Cruiser 7 People",
    dailyRate: "From N$ 3,238 / Day",
    description: "The Land Cruiser is the powerhouse of our luxury fleet, offering increased ground clearance and a pop-up roof, ideal for wildlife viewing and photographic tours.",
    specifications: [
      "3 Doors",
      "Petrol",
      "4 - 7 Pax",
      "Manual Transmission"
    ],
    features: [
      "4.0 V6 Petrol engine",
      "4x4 high/low range, rear diff-lock",
      "Front air-bags",
      "Under-carriage protector",
      "All-terrain tyres",
      "180-litre fuel tank",
      "Dual battery system",
      "Air-conditioning, power steering"
    ],
    rentalIncludes: [
      "2 x Airport Transfers",
      "Unlimited Km's",
      "Contract Fee (N$150)",
      "Weekend & Public Holiday Surcharge (N$300)"
    ],
    image: "/images/c.png",
    insuranceOptions,
    rentalPeriods: landCruiserPeriods
  },
  {
    name: "SUV",
    dailyRate: "From N$ 1,650 / Day",
    description: "A popular choice for lodge-hopping, this SUV provides top-notch safety features and maximum comfort for discerning travelers.",
    specifications: [
      "4 Doors",
      "Diesel",
      "1 - 5 Pax",
      "Automatic"
    ],
    features: [
      "2.0/2.4 Litre Turbo Diesel engine",
      "4x4 high/low range, rear diff-lock",
      "Front air-bags",
      "Leather seats",
      "All-terrain tyres",
      "80-litre fuel tank",
      "Dual battery system",
      "Air-conditioning, power steering"
    ],
    rentalIncludes: [
      "2 x Airport Transfers",
      "Unlimited Km's",
      "Contract Fee (N$150)",
      "Weekend & Public Holiday Surcharge (N$300)"
    ],
    image: "/images/fortuner.jpeg",
    insuranceOptions,
    rentalPeriods: suvPeriods
  }
];

const faqs = [
  {
    question: "What's included in the daily rental fee?",
    answer: "Our daily rental fee includes 2 airport transfers, unlimited kilometers, contract fee (N$150), and weekend & public holiday surcharge (N$300). All vehicles come with comprehensive insurance, though additional coverage options are available."
  },
  {
    question: "Can I add additional camping gear to my rental?",
    answer: "Yes, we offer a wide range of optional camping equipment for hire, including ground tents, mattresses, GPS units, satellite phones, and camping amenities. You can customize your rental package with any additional gear you need for your journey."
  },
  {
    question: "How does the insurance cover work?",
    answer: "We offer multiple insurance options ranging from standard coverage (no daily fee, N$45,000 deposit) to comprehensive coverage (N$480 per day, no deposit, includes glass and tyre coverage). You can choose the option that best suits your needs and budget."
  },
  {
    question: "Is there an option for airport transfer?",
    answer: "Yes, two airport transfers are included in your rental fee. We'll pick you up upon arrival and drop you off for your departure, ensuring a smooth start and end to your Namibian adventure."
  },
  {
    question: "What happens if the vehicle breaks down?",
    answer: "All our vehicles undergo regular maintenance and are equipped with tools for basic repairs. In case of a breakdown, we provide 24/7 roadside assistance. We also include spare tires and essential tools with every rental."
  },
  {
    question: "Do I need a special driver's license?",
    answer: "A valid driver's license from your home country is required. For 4x4 vehicles, previous experience with off-road driving is recommended but not mandatory. We provide basic 4x4 handling instructions before your departure."
  },
  {
    question: "What is your fuel policy?",
    answer: "Vehicles are provided with a full tank of fuel and should be returned with a full tank. All our vehicles have long-range fuel tanks (80+ liters) suitable for long-distance travel in Namibia."
  },
  {
    question: "Can I cross borders with the rental vehicle?",
    answer: "Border crossings must be arranged in advance and require additional documentation. We allow travel to selected neighboring countries with prior approval and appropriate insurance coverage."
  }
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <ScrollProgressLine />
      
      <section id="hero" className="pt-0">
        <Hero />
      </section>

      <section id="camping-vehicles">
        <VehicleSection
          title="Premium 4x4 Vehicles with Camping Equipment"
          subtitle="Fully Equipped Luxury 4x4 Vehicles with camping gear and rooftop tents, perfect for family adventures."
          vehicles={campingVehicles}
        />
      </section>

      <section id="luxury-vehicles">
        <VehicleSection
          title="Luxury 4x4 Vehicles"
          subtitle="Our Premium Luxury 4x4 Vehicles, combining luxury & comfort with exceptional off-road capabilities."
          vehicles={luxuryVehicles}
        />
      </section>

      <section id="optional-extras">
        <OptionalExtras />
      </section>

      <section id="faq">
        <FAQ faqs={faqs} />
      </section>

      <Footer />
    </main>
  );
}
