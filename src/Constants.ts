/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  tag?: string;
  category: string;
  makingOf: string[];
  flavors: string[];
}

export const CATEGORY_METADATA: Record<string, { title: string, description: string, banner: string }> = {
  "sweets": {
    title: "Signature Sweets",
    description: "Our legendary collection of traditional Indian sweets, prepared with time-honored recipes passed down through generations.",
    banner: "https://i.postimg.cc/Y0YXY430/hero-image-1-banner-bg.png"
  },
  "milk-sweets": {
    title: "Milk Sweets",
    description: "Creamy, rich, and soul-satisfying. Our milk-based delicacies are made from pure concentrated milk and organic sweeteners.",
    banner: "https://i.postimg.cc/x8MsMkRq/hero-image-2-banner-bg.png"
  },
  "dryfruit-sweets": {
    title: "Dryfruit Sweets",
    description: "Premium cashews, almonds, and pistachios combined with natural dates and figs for a healthy yet decadent treat.",
    banner: "https://i.postimg.cc/Y2WDJVwN/hero-image-3-banner-bg.png"
  },
  "ghee-sweets": {
    title: "Pure Ghee Sweets",
    description: "The golden touch of desi ghee makes these sweets exceptionally aromatic and melt-in-your-mouth soft.",
    banner: "https://i.postimg.cc/HLnB3v20/hero-image-4-banner-bg.png"
  },
  "gift-boxes": {
    title: "Exquisite Gift Boxes",
    description: "Perfectly curated assortments for your loved ones, packed in elegant boxes that reflect the premium quality within.",
    banner: "https://i.postimg.cc/tgJ2Dv5k/hero-image-5-banner-bg-(1).png"
  },
  "bengali-sweets": {
    title: "Authentic Bengali Sweets",
    description: "Soft, spongy, and light. Experience the magic of Bengal with our fresh Chenna-based masterpieces.",
    banner: "https://i.postimg.cc/Y0YXY430/hero-image-1-banner-bg.png"
  },
  "chikki-sweets": {
    title: "Traditional Chikki",
    description: "Crunchy nut brittles made with pure jaggery, offering a nostalgic and protein-packed snacking experience.",
    banner: "https://i.postimg.cc/x8MsMkRq/hero-image-2-banner-bg.png"
  },
  "petha-sweets": {
    title: "Royal Petha",
    description: "The famous winter melon candy, prepared with traditional methods for a unique translucent texture and cooling taste.",
    banner: "https://i.postimg.cc/Y2WDJVwN/hero-image-3-banner-bg.png"
  },
  "bites-sweets": {
    title: "Bite-Sized Delights",
    description: "The perfect small indulgence. Mini versions of our champions, great for quick cravings and parties.",
    banner: "https://i.postimg.cc/HLnB3v20/hero-image-4-banner-bg.png"
  },
  "ramzan": {
    title: "Ramzan Special",
    description: "Celebrate the spirit of togetherness with our specially curated festive treats and dates-based sweets.",
    banner: "https://i.postimg.cc/tgJ2Dv5k/hero-image-5-banner-bg-(1).png"
  },
  "diwali": {
    title: "Diwali Celebration",
    description: "Light up your festivities with our brightest selection of sweets and savory hampers.",
    banner: "https://i.postimg.cc/Y0YXY430/hero-image-1-banner-bg.png"
  },
  "birthday": {
    title: "Birthday Sweets",
    description: "Make every birthday special with our customized sweet platters and premium gift boxes.",
    banner: "https://i.postimg.cc/x8MsMkRq/hero-image-2-banner-bg.png"
  },
  "savouries": {
    title: "Crunchy Savouries",
    description: "Authentic Erode snacks made with pure groundnut oil and hand-mixed spices for that perfect afternoon tea-time crunch.",
    banner: "https://i.postimg.cc/HLnB3v20/hero-image-4-banner-bg.png"
  }
};

export const PRODUCTS: Product[] = [
  {
    id: "butter-murukku",
    name: "Pure Butter Murukku",
    price: "₹ 440/kg",
    description: "Incredibly light and melt-in-the-mouth crunchy rings made with premium butter and rice flour.",
    image: "https://images.unsplash.com/photo-1626132647523-26f6ce3a034d?auto=format&fit=crop&q=80&w=800",
    tag: "Staff Pick",
    category: "savouries",
    makingOf: [
      "Fine rice flour is blended with a generous amount of pure white butter.",
      "A touch of roasted gram flour is added for depth of flavor.",
      "The dough is seasoned with cumin and sesame seeds.",
      "Expertly pressed and fried until perfectly golden and brittle."
    ],
    flavors: ["White Butter", "Toasted Cumin", "Nutty Rice", "Sesame Spark"]
  },
  {
    id: "masala-peanuts",
    name: "Spicy Masala Peanuts",
    price: "₹ 360/kg",
    description: "Bold and crunchy roasted peanuts coated in a fiery blend of South Indian spices and curry leaves.",
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&q=80&w=800",
    category: "savouries",
    makingOf: [
      "Premium whole peanuts are dry-roasted until they release their natural oils.",
      "A spice blend of red chili, turmeric, and black pepper is prepared.",
      "Fresh curry leaves are flash-fried to add a distinct aroma.",
      "The peanuts are tossed in the spice mix while warm for perfect coating."
    ],
    flavors: ["Roasted Peanut", "Curry Leaf", "Red Chili", "Black Pepper"]
  },
  {
    id: "ribbon-pakoda",
    name: "Golden Ribbon Pakoda",
    price: "₹ 390/kg",
    description: "Paper-thin, crispy gram flour ribbons seasoned with pepper and cumin. The lightest snack for your tea-time cravings.",
    image: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=800",
    category: "savouries",
    makingOf: [
      "A delicate blend of gram flour and rice flour is sifted three times for smoothness.",
      "Powdered cumin and black pepper are added for a subtle, sophisticated heat.",
      "The batter is kept at a precise consistency to ensure the ribbons are flat and uniform.",
      "Quick-fried for just 45 seconds to keep the golden color and airy texture."
    ],
    flavors: ["Besan Nuttyness", "Cumin Earthy", "Pepper Spark", "Light Crunch"]
  },
  {
    id: "bhakarwadi",
    name: "Crispy Bhakarwadi",
    price: "₹ 400/kg",
    description: "A legendary Maharashtrian snack with a sweet, spicy, and tangy coconut-based stuffing rolled into crispy dough spirals.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800",
    tag: "Popular",
    category: "savouries",
    makingOf: [
      "A crispy outer layer of gram flour and all-purpose flour is rolled out thin.",
      "A complex stuffing of roasted poppy seeds, coconut, and a secret spice blend is spread evenly.",
      "The dough is rolled into tight logs, sliced into bite-sized spirals, and deep-fried until golden brown.",
      "Each batch is monitored to ensure the perfect crunch without being oily."
    ],
    flavors: ["Dry Coconut", "Poppy Seeds", "Tamarind Tang", "Roasted Cumin"]
  },
  {
    id: "cashew-pakoda",
    name: "Cashew Pakoda",
    price: "₹ 950/kg",
    description: "Premium large cashews coated in a spicy, aromatic gram flour batter and double-fried for maximum crunch.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
    tag: "Premium",
    category: "savouries",
    makingOf: [
      "Grade-A whole cashews are sorted and lightly toasted.",
      "A thick batter of besan, rice flour, and hand-pounded red chili is prepared.",
      "The cashews are hand-mixed into the batter with curry leaves and fennel seeds.",
      "Fritters are dropped one-by-one into hot oil to ensure they don't stick and remain individual crunchy treats."
    ],
    flavors: ["Buttery Cashew", "Crispy Besan", "Curry Leaf Aroma", "Fennel Spike"]
  },
  {
    id: "cornflakes-mixture",
    name: "Golden Cornflakes Mixture",
    price: "₹ 410/kg",
    description: "A modern classic. Crispy cornflakes tossed with roasted cashews, dhal, and a sweet-spicy seasoning.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17051?auto=format&fit=crop&q=80&w=800",
    category: "savouries",
    makingOf: [
      "High-quality cornflakes are flash-fried for ultimate crispiness.",
      "Roasted cashews and split gram dal are added for crunch and protein.",
      "A unique blend of powdered sugar and chili is used for the 'Khatta-Meetha' profile.",
      "Mixed thoroughly to ensure every flake is seasoned to perfection."
    ],
    flavors: ["Khatta Meetha", "Fried Corn", "Golden Cashew", "Mild Chili"]
  },
  {
    id: "kesar-peda",
    name: "Kesar Peda",
    price: "₹ 850/kg",
    description: "Rich milk fudge infused with premium Kashmiri saffron and garnished with crushed pistachios.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKBfGBpO4hBSr5nAt-9paZ63sBvgaVsgqdlRbsIof_0e-t4TaerV6lNg_KrU-8Dq9Nn9x_v2KEypP_-e6xEY0c4ps5uBRA_RzUsLmsEPXbhXJSOmSotNOE0Vq_Xv9Lpt1rJ_GPj2E6yUMAGpmXzKlJttcIdiE8I9L3a1LMVRBT5vQipNXuU2-4ESsLVHbzNPsI9fIclyl5xUgHtD4OPaUMjPLLSro9aDJRNHX25D7mbnDGTp_ldqoLIgUGT-UtoRfQUWznNaIa51zI",
    tag: "Best Seller",
    category: "milk-sweets",
    makingOf: [
      "Pure full-cream milk is slow-boiled for hours until it reduces to a solid 'Khoya'.",
      "Hand-picked Kesar (Saffron) strands from Kashmir are soaked in warm milk to release their golden hue.",
      "The Khoya is combined with fine organic sugar and the saffron infusion, then hand-kneaded.",
      "Each piece is individually pressed into a wooden mold and topped with freshly slivered pistachios."
    ],
    flavors: ["Kashmiri Saffron", "Slow-Roasted Milk", "Cardamom Bloom", "Green Pistachio"]
  },
  {
    id: "classic-rasgulla",
    name: "Classic Rasgulla",
    price: "₹ 600/kg",
    description: "Soft, spongy cottage cheese dumplings soaked in a delicate rose-scented sugar syrup.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDadXF1HdQM9lkA10-IgGV0RvIK-w3a_HNigDkIp-zwy98Gq6qmTgK0j9qSH9NRWOP2GRffCCfRPlEGvbsIuewihIZN3ngDRB9vAIFM07BYRCgV6atgoS0f_P0hMEUgD16b8XrdAp8tL34w4ByyOdha2EUXbdg9770rYwNKhmf4GpbW1rAeQpQqm6RFNWLp_LiajBRPJA07eif93a0-HDJx90-5uwqL4f7P291-S1N6kpSsoSiCzr7CzVCEWtjRyjzR4sksQyZ6WD0",
    category: "bengali-sweets",
    makingOf: [
      "Fresh cow milk is curdled to extract 'Chenna' (cottage cheese).",
      "The Chenna is kneaded vigorously by hand until it achieves a silk-like smoothness.",
      "Small dough balls are shaped and dropped into a boiling vat of clarified sugar syrup.",
      "The dumplings are slow-cooked until they double in size, absorbing the light rose-water infusion."
    ],
    flavors: ["Persian Rose Water", "Light Syrup", "Creamy Chenna", "Milk Solids"]
  },
  {
    id: "silver-katli",
    name: "Silver Katli",
    price: "₹ 1200/kg",
    description: "Premium cashew fudge delicately adorned with edible silver leaf for a truly royal treat.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTDpy22DcrWSa0ickYwWLpd2VXHr4PF1O_ISR5A-9wGndBxQ82JpU-MDPV1zzCyQDvQTOmMksuqKSazWxDGJ8SxpNGzOYo0nRybyTNMqIRj1lIDe1-bhXUNEw6c0wtClUh2XHF01xitGPUrMwBFtPFSesLVLKpjmN-e8kPvwYdcmt7kY0gOpD9s7PahvPZtf_4R_T8d7VQg3I4CvgSqArJ02jNx4o_WA4LhgC5_hR5qsYhZj1-xdUagPzmS4ZTeCRIbdeVxGGgxHJT",
    tag: "Signature",
    category: "dryfruit-sweets",
    makingOf: [
      "A-grade whole cashews are finely ground into a smooth, non-oily flour.",
      "A delicate sugar string consistency is prepared at precise temperatures.",
      "The cashew flour and syrup are blended and cooled until a thin paste forms.",
      "The fudge is rolled out thin and hand-adorned with authentic edible silver leaf (Vark)."
    ],
    flavors: ["Grade-A Cashews", "Sweet Cream", "Silver Mineral", "Vanilla Bean"]
  }
];
