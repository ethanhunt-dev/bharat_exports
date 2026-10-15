"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Product {
  id: string;
  name: string;
  category: "spices" | "grains" | "textiles" | "dry-fruits" | "pulses";
  categoryLabel: string;
  categoryColor: string;
  hsCode: string;
  description: string;
  imgUrl: string;
  grade: string;
  specs: { label: string; value: string }[];
  packaging: string;
  moq: string;
  isOrganic?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  imgUrl: string;
  author: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "products" | "warehouse" | "shipping" | "quality";
  badge: string;
  meta: string;
  description: string;
  imgUrl: string;
  alt: string;
  spanClass?: string;
  minHeight?: string;
  extraMeta?: string[];
}

export interface Enquiry {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  commodity: string;
  destinationPort?: string;
  quantity?: string;
  notes?: string;
  date: string;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    id: "1121-basmati",
    name: "Basmati Rice (1121 Steam)",
    category: "grains",
    categoryLabel: "Rice & Grains",
    categoryColor: "text-[#123D2B]",
    hsCode: "HS: 1006.30.20",
    description: "Authentic Himalayan-fed long grain rice celebrated for exceptional elongation (up to 22mm cooked) and delicate floral aroma.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXQB_uAwcUxEQ3J4a2im6mDV2f3vNL13-ckns1EIDdVLBkHpCjSC1Zw6pSyb9NUd9m2Qo0on5QO11R0bOjo6vKMCkAEEoUMg5xmNEDpHqMI-gsDegEUNWsOyx9OtFTd282Xs3Xjmco7irfqk5hIwSompc2irpeJbIPdS54KF3-zGEMXqtTQ1HzzQ6gOoHhi09vBx96ATGl6VEnPVaflBvSQvmYUCwCX63ClKHXtWsyytZMzKk0hgb9",
    grade: "Sortex 100% Cleaned",
    specs: [
      { label: "Average Grain Length", value: "8.35 mm min" },
      { label: "Moisture Content", value: "12.5% max" },
      { label: "Broken Grain Ratio", value: "1.0% max" },
      { label: "Purity Index", value: "95% min" },
    ],
    packaging: "25kg / 50kg BOPP or Multi-wall Paper Bags",
    moq: "24 Metric Tons (1 x 20ft FCL)",
  },
  {
    id: "salem-turmeric",
    name: "High-Curcumin Turmeric Fingers",
    category: "spices",
    categoryLabel: "Spices & Botanicals",
    categoryColor: "text-[#C5A15B]",
    hsCode: "HS: 0910.30.20",
    description: "Sun-cured Salem turmeric fingers boasting deep golden pigment and rich natural essential oil reserves for pharmaceutical and culinary extraction.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHXn0f6_lP_tI3U5d2XFqK1l8Q6RkJ9W9bWb2v1P8_kL_oP6s9bZ6W6bM3lV4e8fK1_p7Q8rL3X0c7V8jM2Q5uX6bO7n2s8W5q0E1r7I9",
    grade: "Grade A Export Polished",
    specs: [
      { label: "Curcumin Content", value: "4.8% - 5.2% verified" },
      { label: "Moisture Level", value: "10% max" },
      { label: "Total Ash", value: "7.0% max" },
      { label: "Extraneous Matter", value: "0.5% max" },
    ],
    packaging: "25kg / 50kg Jute Bags with inner Food-grade Liner",
    moq: "18 Metric Tons (1 x 20ft FCL)",
    isOrganic: true,
  },
  {
    id: "tellicherry-pepper",
    name: "Tellicherry Black Pepper (TGSEB)",
    category: "spices",
    categoryLabel: "Spices & Botanicals",
    categoryColor: "text-[#C5A15B]",
    hsCode: "HS: 0904.11.10",
    description: "Tellicherry Garbled Special Extra Bold whole peppercorns harvested from the Malabar coast, characterized by complex citrus-pine pungency.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfLO8J-9TjPcSiEDKLZy74vhjr1NLr2F-6TvXFM1jI93X1EPdVptVQhuyClmkxJVF5ZRhz56Kh38wgxtr9wEAw9Wz-LSrTGRVRI9lVLNSzEWT8uJNm8OAJ_GgkAbHBdgzN1tapv2sSf_w1hhtzHJ3-avEUCm9h9AavOGbx18-HMJ4TVHgLCI4AhciLJyfMIScbbrdHiYMfXqchPkNNt_2gpLEKOAyLWXSzyu4xGnl1_cKHzRYv2Hw",
    grade: "TGSEB (Size 4.75mm+)",
    specs: [
      { label: "Peppercorn Diameter", value: "4.75 mm+" },
      { label: "Bulk Density", value: "570 g/L min" },
      { label: "Piperine Content", value: "5.5% min" },
      { label: "Moisture Level", value: "11% max" },
    ],
    packaging: "25kg Multi-wall Vacuum Sealed Kraft Sacks",
    moq: "10 Metric Tons",
  },
  {
    id: "guntur-chilli",
    name: "Guntur S17 Teja Red Chilli",
    category: "spices",
    categoryLabel: "Spices & Botanicals",
    categoryColor: "text-[#C5A15B]",
    hsCode: "HS: 0904.21.10",
    description: "Renowned fiery Andhra chilli with vibrant natural capsaicin and high ASTA color value. Available stemless or with stem.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRNEbMX2u_m_kK0P8TdRW9YNsCXDuX6ZVSD9H_RGs0qvHZH5ghpa0RnzCc1A6OEh-h_mXOcH3imDXIustc_7M5HUAvU0EBAvtKub3ZVTI7pgnU5gEkel3s8VWWP6CExViUu3qDkx12Rs8oN0hitWJG-km1Ie9GoLNAQGqtCba0A0qU4DCByak85AyyeJb98fF1rVug1n6IOqHAItk6hB6qxou6OQHUCGNgov99_y7Bg9YbJceKvlm",
    grade: "Premium Machine Cleaned",
    specs: [
      { label: "Scoville Heat (SHU)", value: "75,000 - 100,000" },
      { label: "ASTA Color Value", value: "60 - 80 ASTA" },
      { label: "Moisture", value: "10% max" },
      { label: "Capsaicin", value: "0.5% min" },
    ],
    packaging: "25kg Heavy-duty Polypropylene Bags",
    moq: "14 Metric Tons (1 x 40ft HQ)",
  },
  {
    id: "combed-cotton",
    name: "100% Combed Cotton Greige Fabric",
    category: "textiles",
    categoryLabel: "Raw Cotton & Textiles",
    categoryColor: "text-[#1E4433]",
    hsCode: "HS: 5208.11.00",
    description: "Fine-gauge combed cotton fabric woven on air-jet looms for international institutional apparel and hospitality bed-linen conversions.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQetGmb7QzsBa3a53TffjCsYYCMdQxED5VkeD-kvaw3en2nKWI60p6eo7Vsh7g59bD0s7X2b3B14ILdACvfejAUo4tR4Ovqe-io8R2-N2vtxR5XEGj7wY_0eeF6uq_J9OM1CU5TuTOni2H1EkQfS24wJIijhXy9SykXWe_MeQVrpXAF5F87o4Zq1WHLGMJZ9MSEPW5rMaxQFjFfHB2jmjz8D8kWIoXQ_05gE12lyfQEQGr3PT7yd9G",
    grade: "Mill Standard Grade-A",
    specs: [
      { label: "Yarn Count", value: "40s x 40s Weave" },
      { label: "Thread Count", value: "100 x 92 (T-200)" },
      { label: "Fabric Width", value: "63 inch / 160 cm" },
      { label: "Fabric Weight", value: "135 GSM" },
    ],
    packaging: "Export Standard Moisture-Wrapped Rolls on Hard Tubes",
    moq: "5,000 Meters",
  },
  {
    id: "w180-cashews",
    name: "Jumbo King Cashew Kernels (W180)",
    category: "dry-fruits",
    categoryLabel: "Dry Fruits & Nuts",
    categoryColor: "text-[#C5A15B]",
    hsCode: "HS: 0801.32.10",
    description: "The 'King of Cashews' harvested from coastal orchards, nitrogen-flushed to preserve crisp natural crunch and buttery sweetness.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXQB_uAwcUxEQ3J4a2im6mDV2f3vNL13-ckns1EIDdVLBkHpCjSC1Zw6pSyb9NUd9m2Qo0on5QO11R0bOjo6vKMCkAEEoUMg5xmNEDpHqMI-gsDegEUNWsOyx9OtFTd282Xs3Xjmco7irfqk5hIwSompc2irpeJbIPdS54KF3-zGEMXqtTQ1HzzQ6gOoHhi09vBx96ATGl6VEnPVaflBvSQvmYUCwCX63ClKHXtWsyytZMzKk0hgb9",
    grade: "White Whole Jumbo (W180)",
    specs: [
      { label: "Kernel Count", value: "170 - 180 per lb" },
      { label: "Moisture Content", value: "5.0% max" },
      { label: "Broken Kernels", value: "1.0% max" },
      { label: "Aflotoxins", value: "Negative (below 4 ppb)" },
    ],
    packaging: "10kg x 2 Vacuum Tins in Master Carton (20kg net)",
    moq: "5 Metric Tons",
  },
];

const INITIAL_BLOGS: BlogPost[] = [
  {
    id: "b1",
    slug: "export-documentation-guide",
    title: "Understanding Incoterms: FOB vs CIF for Indian Port Dispatches",
    category: "INCOTERMS 2020",
    date: "08 OCT 2026",
    readTime: "6 MIN READ",
    summary: "What each term means for risk transfer, marine freight insurance, and buyer liability when shipping from Visakhapatnam Port.",
    imgUrl: "/images/banner_port_cranes.jpg",
    author: "SVMR Trade Compliance Desk",
  },
  {
    id: "b2",
    slug: "spice-moisture-barrier-packaging",
    title: "Packaging Spices for Long Sea Voyages: Moisture Control",
    category: "QUALITY & PACKAGING",
    date: "01 OCT 2026",
    readTime: "5 MIN READ",
    summary: "Engineering hermetic liners, container desiccant poles, and automated nitrogen flushing for zero-caking transoceanic transits.",
    imgUrl: "/images/products_banner_spices.jpg",
    author: "Quality Operations Wing",
  },
  {
    id: "b3",
    slug: "basmati-eu-quotas-compliance",
    title: "Top Export Destinations for Basmati Rice & EU Quotas",
    category: "GLOBAL CORRIDORS",
    date: "24 SEP 2026",
    readTime: "7 MIN READ",
    summary: "Navigating pesticide residue limits, tricyclazole testing thresholds, and duty tariff exemptions across Western European ports.",
    imgUrl: "/images/about_banner_pulses.jpg",
    author: "Agrarian Analytics Desk",
  },
  {
    id: "b4",
    slug: "direct-berth-visakhapatnam",
    title: "Why East Coast Port Gateways Cut Ocean Transit to ASEAN",
    category: "PORT LOGISTICS",
    date: "15 SEP 2026",
    readTime: "4 MIN READ",
    summary: "How deepwater draft berths at Visakhapatnam shave 3 to 5 sailing days compared to Western Indian ports for Bay of Bengal corridors.",
    imgUrl: "/images/banner_ocean_ship.jpg",
    author: "Maritime Logistics Fleet",
  },
];

const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "Visakhapatnam Port Container Terminal at Dawn",
    subtitle: "BERTH 04 / EAST COAST WATERWAY",
    category: "shipping",
    badge: "TERMINAL 01 · SEA DISPATCH",
    meta: "GATE-IN: 04:30 IST · APM CRANE LOT 14",
    description: "Heavy-lift dual gantry cranes staging 40ft high-cube temperature-controlled reefers for direct voyages to Jebel Ali, Rotterdam, and Newark.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpxJGLbLp5jFDaLPoTWeRdVW0tgSvXrdL5IrgzPqLFCfolQaMQHI8WVHIW7b36PDOy3rBYFdqnX75rb3BeLOpezs3N7bBoNXsWAxO8y4NtKS-np7IwleKE12ayTzIKm7yhpH5XTSn13caIZWp3-NfbOMNMbVSBGQhnfRK_PvpW0pwfenWZ2yMUMbhDrbwiVKe5XvbPRAnyA8VFMs7Rup8ASk-yaeMzFEZm7ppEJZs2H_WGJ9Z3emVP",
    alt: "Visakhapatnam Port Container Terminal at golden dawn with gantry cranes",
  },
  {
    id: "g2",
    title: "Turmeric Curcumin & Pesticide Screen",
    subtitle: "SPECTROMETRY & CHROMATOGRAPHY",
    category: "quality",
    badge: "ISO/IEC 17025 LAB",
    meta: "HPLC Lot Screen: 4.8% Curcumin Verified",
    description: "Batch-by-batch HPLC verification ensuring active curcumin concentration holds strictly between 4.8% and 5.2% without detectable pesticide residues.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq2G0aEfrE2fMr4IHF8kZ4kICoc-CuINFhjlt2jX2BjmxmPwo7flNVyXqDpaRypP5z1wJt5OoV-KMEaFr3t2RwpCxDemdcQ8Rr5lH-q60l5xn9M1VYCyC0HxASYcJ69CJYRVMIBBheuPzlMjrZAin0013KR3cbTXK15pAHYGgwEnHT2rbabZsWX4SgdixrbxUAwZhXVKlvPEwnKwLAXGyYeI_EaUflLVwdN1xqIYBK_Ai-reLN4F1k",
    alt: "Analytical quality testing laboratory for agricultural commodities",
  },
  {
    id: "g3",
    title: "Steam Cleaned Basmati Rice Macro Inspection",
    subtitle: "GRAIN UNIFORMITY ANALYSIS",
    category: "products",
    badge: "LOT SV-894 · SORTEX 100% CLEAN",
    meta: "Average Length 8.35mm · Moisture 12.1%",
    description: "Extreme macro optical evaluation of premium 1121 Steam Basmati Raw grains, confirming needle-sharp tips, zero chalkiness, and high elongation ratio.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKfLO8J-9TjPcSiEDKLZy74vhjr1NLr2F-6TvXFM1jI93X1EPdVptVQhuyClmkxJVF5ZRhz56Kh38wgxtr9wEAw9Wz-LSrTGRVRI9lVLNSzEWT8uJNm8OAJ_GgkAbHBdgzN1tapv2sSf_w1hhtzHJ3-avEUCm9h9AavOGbx18-HMJ4TVHgLCI4AhciLJyfMIScbbrdHiYMfXqchPkNNt_2gpLEKOAyLWXSzyu4xGnl1_cKHzRYv2Hw",
    alt: "Extreme macro photograph of premium 1121 Steam Basmati Rice grains",
  },
  {
    id: "g4",
    title: "Palletized 25kg Kraft Stacks in Humidity Yard",
    subtitle: "CLIMATE STABILIZED INVENTORY",
    category: "warehouse",
    badge: "WAREHOUSE NO. 03",
    meta: "55% Controlled RH · Euro-Pallet Certified",
    description: "Stretch-hood wrapped under 55% controlled relative humidity ready for export container stuffing and zero-moisture condensation during sea transit.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjuJuyW5mGBJgAP5N7qqymtUuK_0QYM_25inTdlzKJ8xuFX1ouCbe30zracMYUq6D4ejncnyCCzOVjqcmpsBf-miPdQdyLFU6nDNxtGYR-tisU04lGEPXrSKLYMhtKDHFomgpysRvb6wL9ELN_0uZVihnuzSs5OW4Q35rtTeWuVsN7I2HbewfmBzE14QStCKnqTKY382U0s_T5ls867B8zz9TvhaAlMYgb3YGCww1AWFYw1bXfncYJ",
    alt: "Export warehouse with pallets of 25kg multi-wall Kraft paper sacks",
  },
  {
    id: "g5",
    title: "Guntur Teja S17 Solar Curing Yards",
    subtitle: "SOLAR CURING PROCESS",
    category: "products",
    badge: "HARVEST YARDS · GUNTUR",
    meta: "Natural Solar Desiccation · 10.5% Equilibrium",
    description: "Traditional solar moisture reduction on food-grade cement terraces achieving 10-11% optimal equilibrium before mechanical sorting.",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRNEbMX2u_m_kK0P8TdRW9YNsCXDuX6ZVSD9H_RGs0qvHZH5ghpa0RnzCc1A6OEh-h_mXOcH3imDXIustc_7M5HUAvU0EBAvtKub3ZVTI7pgnU5gEkel3s8VWWP6CExViUu3qDkx12Rs8oN0hitWJG-km1Ie9GoLNAQGqtCba0A0qU4DCByak85AyyeJb98fF1rVug1n6IOqHAItk6hB6qxou6OQHUCGNgov99_y7Bg9YbJceKvlm",
    alt: "Paved rural drying yards in Andhra Pradesh covered in Guntur Teja red dried chillies",
  },
];

const INITIAL_ENQUIRIES: Enquiry[] = [
  {
    id: "enq-101",
    fullName: "Ahmed Al-Maktoum",
    email: "procurement@gulfcommodities.ae",
    phone: "+971 4 392 8110",
    company: "Gulf Wholesale Trading LLC (Dubai)",
    commodity: "1121 Basmati Rice Steam",
    destinationPort: "Port of Jebel Ali, UAE",
    quantity: "120 Metric Tons (5x 20ft FCL)",
    notes: "Requires SGS inspection certificate and CIF pricing.",
    date: "14 OCT 2026, 11:20 AM",
  },
  {
    id: "enq-102",
    fullName: "Klaus Van Der Bilt",
    email: "k.bilt@eurospices.nl",
    phone: "+31 10 440 2911",
    company: "EuroSpice Import B.V. (Rotterdam)",
    commodity: "Salem Curcumin Turmeric Fingers",
    destinationPort: "Port of Rotterdam, Netherlands",
    quantity: "36 Metric Tons (2x 20ft FCL)",
    notes: "Need HPLC curcumin batch certificates with EU pesticide residue limits.",
    date: "13 OCT 2026, 04:45 PM",
  },
];

interface DataContextType {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, "id">) => void;
  updateBlog: (id: string, blog: Partial<BlogPost>) => void;
  deleteBlog: (id: string) => void;

  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, "id">) => void;
  deleteGalleryItem: (id: string) => void;

  enquiries: Enquiry[];
  addEnquiry: (enquiry: Omit<Enquiry, "id" | "date">) => void;
  deleteEnquiry: (id: string) => void;

  resetToDefaults: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [blogs, setBlogs] = useState<BlogPost[]>(INITIAL_BLOGS);
  const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(INITIAL_ENQUIRIES);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedProducts = localStorage.getItem("svmr_products");
      if (storedProducts) setProducts(JSON.parse(storedProducts));

      const storedBlogs = localStorage.getItem("svmr_blogs");
      if (storedBlogs) setBlogs(JSON.parse(storedBlogs));

      const storedGallery = localStorage.getItem("svmr_gallery");
      if (storedGallery) setGallery(JSON.parse(storedGallery));

      const storedEnquiries = localStorage.getItem("svmr_enquiries");
      if (storedEnquiries) setEnquiries(JSON.parse(storedEnquiries));
    } catch (e) {
      console.error("Failed to load stored data", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (!isLoaded || typeof window === "undefined") return;
    try {
      localStorage.setItem("svmr_products", JSON.stringify(products));
      localStorage.setItem("svmr_blogs", JSON.stringify(blogs));
      localStorage.setItem("svmr_gallery", JSON.stringify(gallery));
      localStorage.setItem("svmr_enquiries", JSON.stringify(enquiries));
    } catch (e) {
      console.error("Failed to persist data", e);
    }
  }, [products, blogs, gallery, enquiries, isLoaded]);

  // Products CRUD
  const addProduct = (item: Omit<Product, "id">) => {
    const newId = `prod-${Date.now()}`;
    const newProduct: Product = { ...item, id: newId };
    setProducts((prev) => [newProduct, ...prev]);
  };

  const updateProduct = (id: string, updated: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Blogs CRUD
  const addBlog = (item: Omit<BlogPost, "id">) => {
    const newId = `blog-${Date.now()}`;
    const newBlog: BlogPost = { ...item, id: newId };
    setBlogs((prev) => [newBlog, ...prev]);
  };

  const updateBlog = (id: string, updated: Partial<BlogPost>) => {
    setBlogs((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updated } : b))
    );
  };

  const deleteBlog = (id: string) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  // Gallery CRUD
  const addGalleryItem = (item: Omit<GalleryItem, "id">) => {
    const newId = `gal-${Date.now()}`;
    const newItem: GalleryItem = { ...item, id: newId };
    setGallery((prev) => [newItem, ...prev]);
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  // Enquiries CRUD
  const addEnquiry = (item: Omit<Enquiry, "id" | "date">) => {
    const newId = `enq-${Date.now()}`;
    const dateStr = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const newEnquiry: Enquiry = { ...item, id: newId, date: dateStr };
    setEnquiries((prev) => [newEnquiry, ...prev]);
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries((prev) => prev.filter((e) => e.id !== id));
  };

  // Reset to seed defaults
  const resetToDefaults = () => {
    setProducts(INITIAL_PRODUCTS);
    setBlogs(INITIAL_BLOGS);
    setGallery(INITIAL_GALLERY);
    setEnquiries(INITIAL_ENQUIRIES);
    if (typeof window !== "undefined") {
      localStorage.removeItem("svmr_products");
      localStorage.removeItem("svmr_blogs");
      localStorage.removeItem("svmr_gallery");
      localStorage.removeItem("svmr_enquiries");
    }
  };

  return (
    <DataContext.Provider
      value={{
        products,
        addProduct,
        updateProduct,
        deleteProduct,
        blogs,
        addBlog,
        updateBlog,
        deleteBlog,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        enquiries,
        addEnquiry,
        deleteEnquiry,
        resetToDefaults,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
