import { useState } from "react";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
}

const menuItems: MenuItem[] = [
  // MEAT (3 items)
  { 
    id: "galbi", 
    name: "Galbi", 
    category: "meat", 
    categoryLabel: "MEAT", 
    image: "/assets/images/menu/korean-specialties/galbi.jpg",
    description: "Grilled beef short ribs marinated in a sweet and savory sauce typically made with soy sauce, garlic, and sugar. Known for its rich flavor and tender texture."
  },
  { 
    id: "bulgogi", 
    name: "Bulgogi", 
    category: "meat", 
    categoryLabel: "MEAT", 
    image: "/assets/images/menu/korean-specialties/bulgogi.png",
    description: "Thinly sliced, marinated beef grilled or pan-fried. The marinade is a blend of soy sauce, sugar, sesame oil, and garlic, giving it a mildly sweet and smoky flavor."
  },
  { 
    id: "korean-style-chicken", 
    name: "Korean Style Chicken", 
    category: "meat", 
    categoryLabel: "MEAT", 
    image: "/assets/images/menu/korean-specialties/korean-style-chicken.jpg",
    description: "Deep-fried chicken pieces coated in a variety of sauces. Popular styles include soy garlic, spicy gochujang-based, or plain crispy. Often served as a snack or main dish."
  },
  
  // SEAFOOD (6 items)
  { 
    id: "cocktail-shrimp", 
    name: "Cocktail Shrimp", 
    category: "seafood", 
    categoryLabel: "SEAFOOD", 
    image: "/assets/images/menu/appetizers/cocktail-shrimp.jpg",
    description: "Chilled, peeled, and deveined shrimp typically served on a platter with a spicy cocktail sauce (ketchup, horseradish, lemon juice). A classic appetizer."
  },
  { 
    id: "shrimp-garlic-butter", 
    name: "Shrimp with Garlic Butter", 
    category: "seafood", 
    categoryLabel: "SEAFOOD", 
    image: "/assets/images/menu/seafood/shrimp-garlic-butter.jpg",
    description: "Shrimp sautéed in melted butter infused with minced garlic and herbs. A rich, aromatic, and savory preparation."
  },
  { 
    id: "teriyaki-salmon", 
    name: "Teriyaki Salmon", 
    category: "seafood", 
    categoryLabel: "SEAFOOD", 
    image: "/assets/images/menu/seafood/teriyaki-salmon.webp",
    description: "Salmon fillet glazed with a sweet and savory Teriyaki sauce (soy sauce, mirin, sugar). The fish is usually grilled or baked, resulting in a slightly caramelized exterior."
  },
  { 
    id: "smoked-salmon", 
    name: "Smoked Salmon with Cream Cheese", 
    category: "seafood", 
    categoryLabel: "SEAFOOD", 
    image: "/assets/images/menu/seafood/smoked-salmon-cream-cheese.jpg",
    description: "Thin slices of cured and smoked salmon served with a spread of soft cream cheese, often on a bagel or cracker, and sometimes garnished with capers or dill."
  },
  { 
    id: "buttered-cod", 
    name: "Buttered Cod", 
    category: "seafood", 
    categoryLabel: "SEAFOOD", 
    image: "/assets/images/menu/seafood/buttered-cod.jpg",
    description: "Cod fish fillet baked or pan-fried, basted with melted butter. A simple preparation that highlights the flaky texture and mild flavor of the cod."
  },
  { 
    id: "honey-glazed-cod", 
    name: "Honey Glazed Cod", 
    category: "seafood", 
    categoryLabel: "SEAFOOD", 
    image: "/assets/images/menu/appetizers/honey-glazed-cod.jpg",
    description: "Cod fish fillet coated with a sticky and sweet glaze made primarily from honey. The glaze adds a delicate sweetness to the mild-flavored fish."
  },
  
  // VEGETABLE (10 items)
  { 
    id: "stir-fried-mushrooms", 
    name: "Stir Fried Mushrooms", 
    category: "vegetable", 
    categoryLabel: "VEGETABLE", 
    image: "/assets/images/menu/vegetable/mushrooms.jpg",
    description: "A medley of various mushrooms (like Shiitake, Oyster, and Enoki) quickly sautéed with seasonings, often soy sauce and garlic, for an earthy and umami-rich side dish."
  },
  { 
    id: "spicy-green-bean", 
    name: "Spicy Green Bean", 
    category: "vegetable", 
    categoryLabel: "VEGETABLE", 
    image: "/assets/images/menu/vegetable/spicy-green-bean.jpg",
    description: "Fresh green beans quickly sautéed or blanched and then tossed in a spicy sauce or seasoning, often containing chili flakes or Sriracha."
  },
  { 
    id: "stir-fry-bockchoy", 
    name: "Stir-fry Bok Choy", 
    category: "vegetable", 
    categoryLabel: "VEGETABLE", 
    image: "/assets/images/menu/vegetable/bockchoy.jpg",
    description: "Bok choy (Chinese cabbage) quickly sautéed in a wok or pan with garlic and often a light sauce made from soy sauce or oyster sauce. It retains a crisp texture."
  },
  { 
    id: "california-roll", 
    name: "California Roll", 
    category: "vegetable", 
    categoryLabel: "RICE & NOODLES", 
    image: "/assets/images/menu/rice-noodles/california-roll.jpg",
    description: "A popular inside-out sushi roll typically containing crab meat (often imitation crab/surimi), cucumber, and avocado, wrapped in nori (seaweed) and rice."
  },
  { 
    id: "steamed-rice", 
    name: "Steamed Rice", 
    category: "vegetable", 
    categoryLabel: "RICE & NOODLES", 
    image: "/assets/images/menu/rice-noodles/steamed-rice.jpg",
    description: "Plain, cooked white rice (usually short-grain), prepared by steaming until soft and fluffy. A staple side dish for many meals."
  },
  { 
    id: "fried-rice", 
    name: "Fried Rice (Chicken or Shrimp)", 
    category: "vegetable", 
    categoryLabel: "RICE & NOODLES", 
    image: "/assets/images/menu/rice-noodles/fried-rice.jpg",
    description: "Cooked rice stir-fried in a wok with egg, chopped vegetables (e.g., peas, carrots, onions), soy sauce, and your choice of diced chicken or small shrimp."
  },
  { 
    id: "lomain", 
    name: "Lo Mein (Chicken or Shrimp)", 
    category: "vegetable", 
    categoryLabel: "RICE & NOODLES", 
    image: "/assets/images/menu/rice-noodles/lomain.webp",
    description: "Chinese egg noodles tossed and stir-fried with vegetables (e.g., cabbage, carrots) and a savory sauce, featuring either sliced chicken or shrimp as the main protein."
  },
  { 
    id: "buckwheat-noodles", 
    name: "Buckwheat Cold Noodles with Vegetable", 
    category: "vegetable", 
    categoryLabel: "RICE & NOODLES", 
    image: "/assets/images/menu/rice-noodles/buckwheat-noodles.webp",
    description: "Chilled buckwheat noodles (Naengmyeon) served in a tangy, chilled broth, topped with sliced pickled radish, cucumber, and sometimes a hard-boiled egg."
  },
  { 
    id: "mandu", 
    name: "Steamed or Fried Mandu", 
    category: "vegetable", 
    categoryLabel: "DUMPLINGS & ROLLS", 
    image: "/assets/images/menu/dumplings/steamed-fried-mandu.jpg",
    description: "Korean dumplings that are either steamed for a soft, chewy texture or pan-fried (potstickers/Gun Mandu) for a crispy exterior and tender filling."
  },
  { 
    id: "vegetable-eggrolls", 
    name: "Vegetable Eggrolls", 
    category: "vegetable", 
    categoryLabel: "DUMPLINGS & ROLLS", 
    image: "/assets/images/menu/dumplings/mandu.jpg",
    description: "Crispy, deep-fried rolls with a thin wheat flour wrapper, typically filled with a shredded mix of cabbage, carrots, and other vegetables."
  },
  
  // SALAD (5 items)
  { 
    id: "garden-salad", 
    name: "Garden Salad", 
    category: "salad", 
    categoryLabel: "SALAD", 
    image: "/assets/images/menu/salad/garden-salad.webp",
    description: "A simple mixed green salad made from lettuce, tomatoes, cucumbers, and other raw vegetables, often served with a choice of dressing."
  },
  { 
    id: "chicken-salad", 
    name: "Chicken Salad", 
    category: "salad", 
    categoryLabel: "SALAD", 
    image: "/assets/images/menu/salad/chicken-salad.jpg",
    description: "A creamy salad made from shredded or diced cooked chicken, mayonnaise, and various seasonings, often including celery and onions."
  },
  { 
    id: "tuna-salad", 
    name: "Tuna Salad", 
    category: "salad", 
    categoryLabel: "SALAD", 
    image: "/assets/images/menu/salad/tuna-salad.jpg",
    description: "A creamy salad made from flaked canned tuna, mayonnaise, and various seasonings, often including celery and relish."
  },
  { 
    id: "egg-salad", 
    name: "Egg Salad", 
    category: "salad", 
    categoryLabel: "SALAD", 
    image: "/assets/images/menu/salad/egg-salad.jpg",
    description: "A creamy salad made from chopped hard-boiled eggs, mayonnaise, mustard, and seasonings."
  },
  { 
    id: "fruits-cheese", 
    name: "Fruits & Cheese", 
    category: "salad", 
    categoryLabel: "FRUITS & CHEESE", 
    image: "/assets/images/menu/salad/fruits-cheese.jpg",
    description: "An assortment of fresh, seasonal fruits (e.g., grapes, melon, berries) paired with a selection of cheeses (e.g., cheddar, brie, provolone)."
  },
];

const categories = [
  { id: "all", label: "All Items" },
  { id: "meat", label: "MEAT" },
  { id: "seafood", label: "SEAFOOD" },
  { id: "vegetable", label: "VEGETABLE" },
  { id: "salad", label: "SALAD" },
];

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-luxury-pearl to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-luxury-charcoal">
            Our Premium Menu
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our exquisite selection of culinary offerings, crafted with the finest ingredients and presented with elegance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              data-testid={`button-menu-${category.id}`}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-luxury-pink to-luxury-rose text-white shadow-lg transform scale-105'
                  : 'bg-white text-luxury-charcoal border-2 border-luxury-pink hover:bg-luxury-blush'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              data-testid={`menu-item-${item.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden bg-luxury-blush">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2 text-luxury-charcoal group-hover:text-luxury-pink transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-luxury-mauve font-medium mb-3">{item.categoryLabel}</p>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            data-testid="button-contact-menu"
            className="btn-luxury"
          >
            Order Your Custom Menu
          </button>
        </div>
      </div>
    </section>
  );
}
