import lakeTimsah from "@/assets/lake-timsah.jpg";
import deLesseps from "@/assets/de-lesseps.jpg";
import ismailiaMuseum from "@/assets/ismailia-museum.jpg";
import mallahaGarden from "@/assets/mallaha-garden.jpg";
import suezCanal from "@/assets/suez-canal.jpg";
import mosque from "@/assets/mosque.jpg";

export interface Attraction {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  image: string;
  lat: number;
  lng: number;
  openingHours: string;
  entryFee: string;
}

export const attractions: Attraction[] = [
  {
    id: "lake-timsah",
    name: "Lake Timsah",
    nameAr: "بحيرة التمساح",
    description: "Lake Timsah (Crocodile Lake) is one of Ismailia's most beautiful natural landmarks. Located along the Suez Canal, it offers stunning waterfront views, boat rides, and is surrounded by parks and restaurants. It's a popular destination for families and water sports enthusiasts.",
    descriptionAr: "بحيرة التمساح هي واحدة من أجمل المعالم الطبيعية في الإسماعيلية. تقع على طول قناة السويس وتوفر إطلالات خلابة على الواجهة البحرية.",
    category: "Nature",
    image: lakeTimsah,
    lat: 30.5852,
    lng: 32.2654,
    openingHours: "Open 24 hours",
    entryFee: "Free",
  },
  {
    id: "de-lesseps-house",
    name: "De Lesseps' House",
    nameAr: "منزل ديليسبس",
    description: "The historic residence of Ferdinand de Lesseps, the French diplomat who supervised the construction of the Suez Canal. This beautifully preserved colonial mansion showcases 19th-century European architecture and contains artifacts from the canal's construction era.",
    descriptionAr: "المقر التاريخي لفرديناند ديليسبس، الدبلوماسي الفرنسي الذي أشرف على بناء قناة السويس. يعرض هذا القصر الاستعماري المحفوظ بشكل جميل العمارة الأوروبية في القرن التاسع عشر.",
    category: "Historical",
    image: deLesseps,
    lat: 30.5935,
    lng: 32.2711,
    openingHours: "9:00 AM - 4:00 PM",
    entryFee: "30 EGP",
  },
  {
    id: "ismailia-museum",
    name: "Ismailia Museum",
    nameAr: "متحف الإسماعيلية",
    description: "Founded in 1932, the Ismailia Museum houses over 4,000 artifacts spanning from Pharaonic times through the Greco-Roman period. Highlights include ancient statues, mosaics from the era of Ramesses II, and artifacts discovered during the excavation of the Suez Canal.",
    descriptionAr: "تأسس متحف الإسماعيلية عام 1932 ويضم أكثر من 4000 قطعة أثرية تمتد من العصر الفرعوني حتى العصر اليوناني الروماني.",
    category: "Museum",
    image: ismailiaMuseum,
    lat: 30.5965,
    lng: 32.2735,
    openingHours: "9:00 AM - 4:00 PM",
    entryFee: "20 EGP",
  },
  {
    id: "mallaha-garden",
    name: "Mallaha Garden",
    nameAr: "حديقة الملاحة",
    description: "A lush public garden in the heart of Ismailia, known for its beautiful tropical plants, flowering trees, and peaceful walking paths. The garden features fountains, shaded seating areas, and is a perfect spot for relaxation and family outings.",
    descriptionAr: "حديقة عامة خضراء في قلب الإسماعيلية، تشتهر بنباتاتها الاستوائية الجميلة وأشجارها المزهرة وممراتها الهادئة.",
    category: "Nature",
    image: mallahaGarden,
    lat: 30.5940,
    lng: 32.2680,
    openingHours: "8:00 AM - 10:00 PM",
    entryFee: "5 EGP",
  },
  {
    id: "suez-canal",
    name: "Suez Canal Viewpoint",
    nameAr: "نقطة مشاهدة قناة السويس",
    description: "Watch massive cargo ships traverse one of the world's most important waterways from Ismailia's canal-side promenade. The Suez Canal connects the Mediterranean Sea to the Red Sea, and Ismailia sits at its midpoint, offering unique vantage points for ship-watching.",
    descriptionAr: "شاهد سفن الشحن الضخمة وهي تعبر واحدة من أهم الممرات المائية في العالم من كورنيش الإسماعيلية. تربط قناة السويس البحر الأبيض المتوسط بالبحر الأحمر.",
    category: "Landmark",
    image: suezCanal,
    lat: 30.5880,
    lng: 32.3000,
    openingHours: "Open 24 hours",
    entryFee: "Free",
  },
  {
    id: "al-shuhada-mosque",
    name: "Al-Shuhada Mosque",
    nameAr: "مسجد الشهداء",
    description: "One of Ismailia's most prominent mosques, featuring beautiful Islamic architecture with ornate minarets and a grand dome. The mosque serves as both a place of worship and an architectural landmark, especially stunning during golden hour.",
    descriptionAr: "أحد أبرز مساجد الإسماعيلية، يتميز بعمارة إسلامية جميلة مع مآذن مزخرفة وقبة كبيرة.",
    category: "Religious",
    image: mosque,
    lat: 30.5950,
    lng: 32.2750,
    openingHours: "Open for prayers",
    entryFee: "Free",
  },
];

export const categories = ["All", "Nature", "Historical", "Museum", "Landmark", "Religious"];
