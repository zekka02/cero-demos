// Yatrix Nepal — seed catalog data (on-device, no backend)
// Images use Unsplash source URLs (free, no key). Prices in NPR.

const CATEGORIES = [
  { id: "hotels",   label: "Hotels",   icon: "🏨", blurb: "Stays for every budget" },
  { id: "vehicles", label: "Vehicles", icon: "🚗", blurb: "Cars, bikes & jeeps" },
  { id: "guides",   label: "Guides",   icon: "🧭", blurb: "Licensed local guides" },
  { id: "treks",    label: "Treks",    icon: "🏔️", blurb: "Trails & routes" },
  { id: "packages", label: "Packages", icon: "🎒", blurb: "All-in-one tours" },
];

const DATA = {
  hotels: [
    { id: "h1", name: "Temple Tree Resort & Spa", location: "Pokhara", price: 8500, rating: 4.7, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", desc: "Lakeside resort near Phewa Lake with spa, pool and mountain views." },
    { id: "h2", name: "Hotel Yak & Yeti", location: "Kathmandu", price: 12000, rating: 4.6, img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600", desc: "Historic 5-star hotel in the heart of Kathmandu with gardens and casino." },
    { id: "h3", name: "Mountain Lodge", location: "Nagarkot", price: 4500, rating: 4.4, img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600", desc: "Sunrise-view lodge famed for Himalayan panoramas at dawn." },
    { id: "h4", name: "Tiger Tops Lodge", location: "Chitwan", price: 9800, rating: 4.5, img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600", desc: "Jungle lodge on the edge of Chitwan National Park, safari included." },
    { id: "h5", name: "Hotel Mystic Mountain", location: "Nagarkot", price: 6200, rating: 4.3, img: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600", desc: "Infinity pool overlooking terraced hills and snow peaks." },
    { id: "h6", name: "Kasthamandap Boutique", location: "Bhaktapur", price: 5400, rating: 4.5, img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600", desc: "Heritage Newari-style stay steps from Bhaktapur Durbar Square." },
  ],
  vehicles: [
    { id: "v1", name: "Toyota Hiace Van (12 seat)", location: "Kathmandu", price: 7000, rating: 4.6, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600", desc: "Comfortable group van with driver. Price per day incl. fuel within valley." },
    { id: "v2", name: "Royal Enfield 350", location: "Pokhara", price: 1800, rating: 4.8, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600", desc: "Classic touring bike, perfect for the Pokhara–Mustang ride. Per day." },
    { id: "v3", name: "Mahindra Scorpio Jeep", location: "Kathmandu", price: 9000, rating: 4.5, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600", desc: "4WD jeep with driver for rough mountain roads. Per day incl. fuel." },
    { id: "v4", name: "Hyundai i20 (self-drive)", location: "Kathmandu", price: 4500, rating: 4.2, img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=600", desc: "Economical hatchback for city travel. Self-drive, per day." },
    { id: "v5", name: "Scooter (Honda Dio)", location: "Pokhara", price: 900, rating: 4.7, img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600", desc: "Easy lakeside scooter rental. Helmet included. Per day." },
  ],
  guides: [
    { id: "g1", name: "Pemba Sherpa", location: "Everest Region", price: 3500, rating: 4.9, img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600", desc: "Licensed high-altitude guide, 40+ EBC treks. English & Nepali. Per day." },
    { id: "g2", name: "Anjali Gurung", location: "Annapurna", price: 3000, rating: 4.8, img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=600", desc: "Cultural & trekking guide specialising in the Annapurna circuit. Per day." },
    { id: "g3", name: "Ramesh Tamang", location: "Kathmandu Valley", price: 2500, rating: 4.6, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600", desc: "Heritage city guide for Durbar Squares, temples & street food tours. Per day." },
    { id: "g4", name: "Dawa Lama", location: "Langtang", price: 2800, rating: 4.7, img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=600", desc: "Langtang valley specialist, fluent in English, Nepali & Hindi. Per day." },
  ],
  treks: [
    { id: "t1", name: "Everest Base Camp Trek", location: "Solukhumbu", price: 0, rating: 4.9, img: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600", desc: "12–14 day classic trek to 5,364m. Difficulty: Hard. Best: Mar–May, Sep–Nov." },
    { id: "t2", name: "Annapurna Base Camp", location: "Kaski", price: 0, rating: 4.8, img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600", desc: "7–10 day trek into the Annapurna sanctuary, 4,130m. Difficulty: Moderate." },
    { id: "t3", name: "Poon Hill Trek", location: "Ghorepani", price: 0, rating: 4.6, img: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?w=600", desc: "4–5 day short trek, famous sunrise over Annapurna & Dhaulagiri. Easy." },
    { id: "t4", name: "Langtang Valley Trek", location: "Rasuwa", price: 0, rating: 4.5, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600", desc: "7 day trek through Tamang villages & glaciers, 3,870m. Moderate." },
    { id: "t5", name: "Mardi Himal Trek", location: "Kaski", price: 0, rating: 4.7, img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600", desc: "5 day off-the-beaten ridge trek to 4,500m base camp. Moderate." },
  ],
  packages: [
    { id: "p1", name: "Golden Triangle: KTM–Pokhara–Chitwan", location: "Nepal", price: 45000, rating: 4.7, img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600", desc: "7 nights: city heritage, lakes & jungle safari. Hotels, transport & guide included." },
    { id: "p2", name: "Honeymoon in Pokhara", location: "Pokhara", price: 32000, rating: 4.8, img: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=600", desc: "4 nights lakeside, boating, paragliding & candlelight dinner for two." },
    { id: "p3", name: "Everest Scenic Flight + Tour", location: "Kathmandu", price: 28000, rating: 4.6, img: "https://images.unsplash.com/photo-1544735716-87a5e3a0a8f7?w=600", desc: "3 nights with a mountain flight past Everest & valley sightseeing." },
    { id: "p4", name: "Annapurna Trek Package", location: "Pokhara", price: 55000, rating: 4.9, img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600", desc: "10 day fully-supported ABC trek: guide, porter, permits, teahouses." },
  ],
};

const DESTINATIONS = [
  { name: "Pokhara", img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600" },
  { name: "Kathmandu", img: "https://images.unsplash.com/photo-1558799401-1c1ab6cc3e3a?w=600" },
  { name: "Everest", img: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=600" },
  { name: "Chitwan", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" },
];
