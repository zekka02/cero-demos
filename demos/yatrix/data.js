// Yatrix Nepal seed catalog data (on-device, no backend)
// Images are bundled locally in images/ so they always load. Prices in NPR.

const CATEGORIES = [
  { id: "hotels",   label: "Hotels",   icon: "🏨", blurb: "Stays for every budget" },
  { id: "vehicles", label: "Vehicles", icon: "🚗", blurb: "Cars, bikes and jeeps" },
  { id: "guides",   label: "Guides",   icon: "🧭", blurb: "Licensed local guides" },
  { id: "treks",    label: "Treks",    icon: "🏔️", blurb: "Trails and routes" },
  { id: "packages", label: "Packages", icon: "🎒", blurb: "All in one tours" },
];

const DATA = {
  hotels: [
    { id: "h1", name: "Temple Tree Resort & Spa", location: "Pokhara", price: 8500, rating: 4.7, img: "images/h1.jpg", desc: "Lakeside resort near Phewa Lake with spa, pool and mountain views." },
    { id: "h2", name: "Hotel Yak & Yeti", location: "Kathmandu", price: 12000, rating: 4.6, img: "images/h2.jpg", desc: "Historic 5 star hotel in the heart of Kathmandu with gardens and casino." },
    { id: "h3", name: "Mountain Lodge", location: "Nagarkot", price: 4500, rating: 4.4, img: "images/h3.jpg", desc: "Sunrise view lodge famed for Himalayan panoramas at dawn." },
    { id: "h4", name: "Tiger Tops Lodge", location: "Chitwan", price: 9800, rating: 4.5, img: "images/h4.jpg", desc: "Jungle lodge on the edge of Chitwan National Park, safari included." },
    { id: "h5", name: "Hotel Mystic Mountain", location: "Nagarkot", price: 6200, rating: 4.3, img: "images/h5.jpg", desc: "Infinity pool overlooking terraced hills and snow peaks." },
    { id: "h6", name: "Kasthamandap Boutique", location: "Bhaktapur", price: 5400, rating: 4.5, img: "images/h6.jpg", desc: "Heritage Newari style stay steps from Bhaktapur Durbar Square." },
  ],
  vehicles: [
    { id: "v1", name: "Toyota Hiace Van (12 seat)", location: "Kathmandu", price: 7000, rating: 4.6, img: "images/v1.jpg", desc: "Comfortable group van with driver. Price per day incl. fuel within valley." },
    { id: "v2", name: "Royal Enfield 350", location: "Pokhara", price: 1800, rating: 4.8, img: "images/v2.jpg", desc: "Classic touring bike, perfect for the Pokhara to Mustang ride. Per day." },
    { id: "v3", name: "Mahindra Scorpio Jeep", location: "Kathmandu", price: 9000, rating: 4.5, img: "images/v3.jpg", desc: "4WD jeep with driver for rough mountain roads. Per day incl. fuel." },
    { id: "v4", name: "Hyundai i20 (self drive)", location: "Kathmandu", price: 4500, rating: 4.2, img: "images/v4.jpg", desc: "Economical hatchback for city travel. Self drive, per day." },
    { id: "v5", name: "Scooter (Honda Dio)", location: "Pokhara", price: 900, rating: 4.7, img: "images/v5.jpg", desc: "Easy lakeside scooter rental. Helmet included. Per day." },
  ],
  guides: [
    { id: "g1", name: "Pemba Sherpa", location: "Everest Region", price: 3500, rating: 4.9, img: "images/g1.jpg", desc: "Licensed high altitude guide, 40 plus EBC treks. English and Nepali. Per day." },
    { id: "g2", name: "Anjali Gurung", location: "Annapurna", price: 3000, rating: 4.8, img: "images/g2.jpg", desc: "Cultural and trekking guide specialising in the Annapurna circuit. Per day." },
    { id: "g3", name: "Ramesh Tamang", location: "Kathmandu Valley", price: 2500, rating: 4.6, img: "images/g3.jpg", desc: "Heritage city guide for Durbar Squares, temples and street food tours. Per day." },
    { id: "g4", name: "Dawa Lama", location: "Langtang", price: 2800, rating: 4.7, img: "images/g4.jpg", desc: "Langtang valley specialist, fluent in English, Nepali and Hindi. Per day." },
  ],
  treks: [
    { id: "t1", name: "Everest Base Camp Trek", location: "Solukhumbu", price: 0, rating: 4.9, img: "images/t1.jpg", desc: "12 to 14 day classic trek to 5,364m. Difficulty: Hard. Best: Mar to May, Sep to Nov." },
    { id: "t2", name: "Annapurna Base Camp", location: "Kaski", price: 0, rating: 4.8, img: "images/t2.jpg", desc: "7 to 10 day trek into the Annapurna sanctuary, 4,130m. Difficulty: Moderate." },
    { id: "t3", name: "Poon Hill Trek", location: "Ghorepani", price: 0, rating: 4.6, img: "images/t3.jpg", desc: "4 to 5 day short trek, famous sunrise over Annapurna and Dhaulagiri. Easy." },
    { id: "t4", name: "Langtang Valley Trek", location: "Rasuwa", price: 0, rating: 4.5, img: "images/t4.jpg", desc: "7 day trek through Tamang villages and glaciers, 3,870m. Moderate." },
    { id: "t5", name: "Mardi Himal Trek", location: "Kaski", price: 0, rating: 4.7, img: "images/t5.jpg", desc: "5 day off the beaten ridge trek to 4,500m base camp. Moderate." },
  ],
  packages: [
    { id: "p1", name: "Golden Triangle: KTM, Pokhara, Chitwan", location: "Nepal", price: 45000, rating: 4.7, img: "images/p1.jpg", desc: "7 nights: city heritage, lakes and jungle safari. Hotels, transport and guide included." },
    { id: "p2", name: "Honeymoon in Pokhara", location: "Pokhara", price: 32000, rating: 4.8, img: "images/p2.jpg", desc: "4 nights lakeside, boating, paragliding and candlelight dinner for two." },
    { id: "p3", name: "Everest Scenic Flight + Tour", location: "Kathmandu", price: 28000, rating: 4.6, img: "images/p3.jpg", desc: "3 nights with a mountain flight past Everest and valley sightseeing." },
    { id: "p4", name: "Annapurna Trek Package", location: "Pokhara", price: 55000, rating: 4.9, img: "images/p4.jpg", desc: "10 day fully supported ABC trek: guide, porter, permits, teahouses." },
  ],
};

const DESTINATIONS = [
  { name: "Pokhara", img: "images/dest-pokhara.jpg" },
  { name: "Kathmandu", img: "images/dest-kathmandu.jpg" },
  { name: "Everest", img: "images/dest-everest.jpg" },
  { name: "Chitwan", img: "images/dest-chitwan.jpg" },
];
