export type Product = { id: string; name: string; category: string; size: string; origin: string; price: number; stock: number; image: string; featured?: boolean; description: string };

export const products: Product[] = [
  { id:"acai", name:"Açai with guaraná", category:"Açai", size:"3.2 kg tub", origin:"Brazil", price:145, stock:38, image:"/products/acai.webp", featured:true, description:"Creamy Brazilian açai sorbet with guaraná, ready for bowls and smoothies." },
  { id:"mangopulp", name:"Mango fruit pulp", category:"Fruit pulps", size:"1.25 kg bottle", origin:"UAE", price:46, stock:86, image:"/products/mangopulp.webp", featured:true, description:"Natural mango pulp for smoothies, lassi, iced teas and desserts." },
  { id:"pistcrunch", name:"Crunchy pistachio cream 30%", category:"Sweet creams", size:"1 kg tub", origin:"Italy", price:79, stock:23, image:"/products/pistcrunch.webp", featured:true, description:"Italian pistachio cream with a satisfying crunch." },
  { id:"vanilla", name:"Vanilla syrup", category:"Syrups", size:"1 L bottle", origin:"UAE", price:39, stock:124, image:"/products/vanilla.webp", featured:true, description:"Balanced vanilla syrup for lattes, iced coffee and desserts." },
  { id:"caramel", name:"Caramel syrup", category:"Syrups", size:"1 L bottle", origin:"UAE", price:39, stock:8, image:"/products/caramel.webp", featured:true, description:"Rich caramel for coffee, shakes and desserts." },
  { id:"oat", name:"MilkLab oat milk", category:"Plant milk", size:"1 L carton", origin:"Australia", price:19, stock:92, image:"/products/oat.webp", featured:true, description:"Barista oat milk with a rich texture and reliable microfoam." },
  { id:"mojito", name:"Mojito syrup", category:"Syrups", size:"1 L bottle", origin:"UAE", price:39, stock:64, image:"/products/mojito.webp", description:"Mint and lime syrup for fresh zero-proof mojitos." },
  { id:"passionpulp", name:"Passion fruit pulp", category:"Fruit pulps", size:"1.25 kg bottle", origin:"UAE", price:48, stock:35, image:"/products/passionpulp.webp", description:"Tropical fruit pulp with seeds for drinks and desserts." },
  { id:"pist30", name:"Pistachio cream 30%", category:"Sweet creams", size:"1 kg tub", origin:"Italy", price:76, stock:17, image:"/products/pist30.webp", description:"Smooth Italian pistachio cream for pastry and drinks." },
  { id:"almond", name:"MilkLab almond milk", category:"Plant milk", size:"1 L carton", origin:"Australia", price:19, stock:58, image:"/products/almond.webp", description:"Almond barista milk designed for stretch and texture." },
  { id:"chocpowder", name:"Italian chocolate powder", category:"Chocolate", size:"1 kg bag", origin:"Italy", price:62, stock:29, image:"/products/chocpowder.webp", description:"Deep Italian cocoa for hot chocolate, shakes and baking." },
  { id:"granola", name:"Artisan granola", category:"Breakfast", size:"500 g pouch", origin:"UAE", price:32, stock:41, image:"/products/granola.webp", description:"Crunchy gluten-free oats, almonds, coconut and pink salt." },
];

export const categories = [
  { name:"Syrups", image:"/products/vanilla.webp", count:12 },
  { name:"Fruit pulps", image:"/products/mangopulp.webp", count:4 },
  { name:"Sweet creams", image:"/products/pist30.webp", count:5 },
  { name:"Açai", image:"/products/acai.webp", count:3 },
  { name:"Plant milk", image:"/products/oat.webp", count:4 },
  { name:"Chocolate", image:"/products/chocpowder.webp", count:3 },
];

export const orders = [
  { id:"MT-24091", customer:"Sofia Bennett", channel:"Online", total:286, status:"Paid", date:"02 Nov, 10:42" },
  { id:"MT-24090", customer:"The Daily Grind", channel:"Trade", total:1840, status:"Processing", date:"02 Nov, 09:18" },
  { id:"MT-24089", customer:"Omar Al Mansoori", channel:"Online", total:164, status:"Shipped", date:"01 Nov, 17:36" },
  { id:"MT-24088", customer:"Juniper Kitchen", channel:"Trade", total:3260, status:"Paid", date:"01 Nov, 14:02" },
  { id:"MT-24087", customer:"Nadia Rahman", channel:"Online", total:97, status:"Refunded", date:"01 Nov, 11:24" },
];
