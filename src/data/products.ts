export interface Product {
  id: string;
  name: string;
  image: string;
  price: { min: number; max: number; currency: string };
  moq: number;
  supplier: string;
  country: string;
  flag: string;
  category: string;
  rating: number;
  verified: boolean;
}

export const COUNTRIES = [
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳" },
];

export const CATEGORIES = [
  "Electronics",
  "Textiles & Apparel",
  "Agriculture",
  "Industrial Machinery",
  "Raw Materials",
  "Pharmaceuticals",
  "Automotive Parts",
  "Consumer Goods",
];

export const MOCK_PRODUCTS: Product[] = [
  { id: "1", name: "Industrial CNC Milling Machine", image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80", price: { min: 12000, max: 45000, currency: "USD" }, moq: 1, supplier: "Osaka Precision Co.", country: "Japan", flag: "🇯🇵", category: "Industrial Machinery", rating: 4.9, verified: true },
  { id: "2", name: "Organic Arabica Coffee Beans", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&q=80", price: { min: 8, max: 15, currency: "USD" }, moq: 500, supplier: "KenyaFresh Exports", country: "Kenya", flag: "🇰🇪", category: "Agriculture", rating: 4.7, verified: true },
  { id: "3", name: "Premium Cotton Fabric Roll", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&q=80", price: { min: 3, max: 8, currency: "USD" }, moq: 1000, supplier: "São Paulo Textiles", country: "Brazil", flag: "🇧🇷", category: "Textiles & Apparel", rating: 4.8, verified: true },
  { id: "4", name: "Lithium-Ion Battery Pack 48V", image: "https://images.unsplash.com/photo-1619641805634-604e218b268e?w=400&q=80", price: { min: 120, max: 350, currency: "USD" }, moq: 50, supplier: "TechVision GmbH", country: "Germany", flag: "🇩🇪", category: "Electronics", rating: 4.9, verified: true },
  { id: "5", name: "Phosphate Rock (Raw)", image: "https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?w=400&q=80", price: { min: 80, max: 150, currency: "USD" }, moq: 100, supplier: "Atlas Minerals", country: "Morocco", flag: "🇲🇦", category: "Raw Materials", rating: 4.6, verified: true },
  { id: "6", name: "Stainless Steel Automotive Bolts", image: "https://images.unsplash.com/photo-1635348729498-51f6e0e12be9?w=400&q=80", price: { min: 0.05, max: 0.25, currency: "USD" }, moq: 10000, supplier: "IndoMetal Works", country: "Indonesia", flag: "🇮🇩", category: "Automotive Parts", rating: 4.8, verified: true },
  { id: "7", name: "Handwoven Silk Scarves", image: "https://images.unsplash.com/photo-1601924921557-45e8e3668aa2?w=400&q=80", price: { min: 12, max: 45, currency: "USD" }, moq: 200, supplier: "VietSilk Co.", country: "Vietnam", flag: "🇻🇳", category: "Textiles & Apparel", rating: 4.5, verified: false },
  { id: "8", name: "Turmeric Powder (Organic)", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80", price: { min: 4, max: 10, currency: "USD" }, moq: 250, supplier: "SpiceRoute India", country: "India", flag: "🇮🇳", category: "Agriculture", rating: 4.6, verified: true },
  { id: "9", name: "Solar Panel 400W Monocrystalline", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80", price: { min: 150, max: 280, currency: "USD" }, moq: 20, supplier: "TechVision GmbH", country: "Germany", flag: "🇩🇪", category: "Electronics", rating: 5.0, verified: true },
  { id: "10", name: "Avocado Oil Cold-Pressed", image: "https://images.unsplash.com/photo-1590502160462-58b41354f588?w=400&q=80", price: { min: 6, max: 18, currency: "USD" }, moq: 100, supplier: "Agro Mexico SA", country: "Mexico", flag: "🇲🇽", category: "Consumer Goods", rating: 4.4, verified: false },
  { id: "11", name: "Ceramic Tile 60x60cm Polished", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80", price: { min: 5, max: 12, currency: "USD" }, moq: 500, supplier: "AnatoliaCeram", country: "Turkey", flag: "🇹🇷", category: "Raw Materials", rating: 4.7, verified: true },
  { id: "12", name: "Rubber Conveyor Belt Industrial", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80", price: { min: 25, max: 80, currency: "USD" }, moq: 50, supplier: "IndoMetal Works", country: "Indonesia", flag: "🇮🇩", category: "Industrial Machinery", rating: 4.5, verified: true },
];
