'use client';

import { OptionalEquipmentPage } from '@/components/pages/OptionalEquipmentPage';

export default function OptionalEquipment() {
  const extras = [
    { name: "Ground Tent (Includes 1 x Mattress)", price: "N$ 120 per day" },
    { name: "Mattress", price: "N$ 20 per day" },
    { name: "Big Tent (140cm x 240cm)", price: "Available Upon Request" },
    { name: "Family Tent (200cm x 240cm)", price: "Available Upon Request" },
    { name: "GPS", price: "N$ 100 per day" },
    { name: "Sat Phone", price: "N$ 170 per day" },
    { name: "Baby Seat", price: "N$ 100 per day" },
    { name: "Baby Booster", price: "N$ 90 per day" },
    { name: "Chemical Toilet", price: "N$ 80 per day" },
    { name: "Water Canister", price: "N$ 30 per day" },
    { name: "Shovel", price: "N$ 100 per trip" },
    { name: "Ground Sheet", price: "N$ 30 per day" },
    { name: "Gazebo", price: "N$ 100 per day" },
    { name: "Plastic Coolbox", price: "N$ 40 per day" },
    { name: "Wash Basin", price: "N$ 30 per day" },
    { name: "Gas Light", price: "N$ 80 per day" },
    { name: "Potjie", price: "N$ 45 per day" },
    { name: "Bush Shower", price: "N$ 600 per trip" },
    { name: "Sandtracks", price: "N$ 650 per trip" },
    { name: "Kitchen Wash Box", price: "N$ 650 per trip" },
    { name: "Sleeping Gear Package", price: "N$ 30 per person per day" },
    { name: "Personal Amenities Package", price: "N$ 20 per person per day" },
    { name: "Internet (Built-in Car WiFi)", price: "N$ 300 per trip" }
  ];

  return <OptionalEquipmentPage extras={extras} />;
}
