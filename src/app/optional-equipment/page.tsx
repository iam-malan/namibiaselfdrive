'use client';

import { OptionalEquipmentPage } from '@/components/pages/OptionalEquipmentPage';

export default function OptionalEquipment() {
  const extras = [
    // Camping & Storage
    { 
      name: "40/55 ltr Fridge",
      price: "N$ 110 per day",
      category: "Camping & Storage"
    },
    { 
      name: "Ground Tent (Includes 1 x Mattress)",
      price: "N$ 120 per day",
      category: "Camping & Storage"
    },
    { 
      name: "Mattress",
      price: "N$ 20 per day",
      category: "Camping & Storage"
    },
    { 
      name: "Big Tent (140cm x 240cm)",
      price: "Available Upon Request",
      category: "Camping & Storage"
    },
    { 
      name: "Family Tent (200cm x 240cm)",
      price: "Available Upon Request",
      category: "Camping & Storage"
    },
    { 
      name: "Gazebo",
      price: "N$ 100 per day",
      category: "Camping & Storage"
    },
    { 
      name: "Ground Sheet",
      price: "N$ 30 per day",
      category: "Camping & Storage"
    },

    // Navigation & Communication
    { 
      name: "GPS",
      price: "N$ 100 per day",
      category: "Navigation & Communication"
    },
    { 
      name: "Satellite Phone",
      price: "N$ 170 per day",
      category: "Navigation & Communication"
    },
    {
      name: "Internet (Built-in Car WiFi with unlimited data)",
      price: "N$ 300 per trip",
      category: "Navigation & Communication"
    },

    // Safety & Convenience
    { 
      name: "Baby Seat",
      price: "N$ 100 per day",
      category: "Safety & Convenience"
    },
    { 
      name: "Baby Booster",
      price: "N$ 90 per day",
      category: "Safety & Convenience"
    },
    { 
      name: "Chemical Toilet",
      price: "N$ 80 per day",
      category: "Safety & Convenience"
    },
    { 
      name: "Water Canister",
      price: "N$ 30 per day",
      category: "Safety & Convenience"
    },
    { 
      name: "Shovel",
      price: "N$ 100 per trip",
      category: "Safety & Convenience"
    },
    { 
      name: "Sandtracks",
      price: "N$ 650 per trip",
      category: "Safety & Convenience"
    },

    // Kitchen & Cooking
    { 
      name: "Plastic Coolbox",
      price: "N$ 40 per day",
      category: "Kitchen & Cooking"
    },
    { 
      name: "Wash Basin",
      price: "N$ 30 per day",
      category: "Kitchen & Cooking"
    },
    { 
      name: "Gas Light",
      price: "N$ 80 per day",
      category: "Kitchen & Cooking"
    },
    { 
      name: "Potjie",
      price: "N$ 45 per day",
      category: "Kitchen & Cooking"
    },
    { 
      name: "Bush Shower",
      price: "N$ 600 per trip",
      category: "Kitchen & Cooking"
    },

    // Complete Packages
    {
      name: "Kitchen Wash Box",
      price: "N$ 650 per trip",
      description: "Includes: Dishwashing Liquid, Wash Cloth, Dry Cloth, Wash Basin, Blitz/Lighter, Bag Of Charcoal",
      category: "Complete Packages"
    },
    {
      name: "Sleeping Gear Package",
      price: "N$ 30 per person per day",
      description: "Includes: Sleeping Bag, Sheet, Pillow, Pillow Case, Blanket (In Winter)",
      category: "Complete Packages"
    },
    {
      name: "Personal Amenities Package",
      price: "N$ 20 per person per day",
      description: "Includes: Towel, Wash Cloth, Body Wash",
      category: "Complete Packages"
    }
  ];

  return <OptionalEquipmentPage extras={extras} />;
}
