import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { CategoryCard } from "@/components/CategoryCard";
import { ContentCard } from "@/components/ContentCard";
import { InfoBox } from "@/components/InfoBox";
import { Grid3X3 } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Apparel & Accessories",
    attributes: ["gender", "size type (US/EU)", "size", "fit", "material", "pattern", "style", "season", "occasion", "color", "care instructions", "stretch", "closure type", "durability"],
  },
  {
    name: "Beauty & Personal Care",
    attributes: ["skin type", "hair type", "shade", "finish", "scent", "ingredients", "formulation type", "cruelty-free/vegan", "hypoallergenic", "expiration/shelf life", "application method", "coverage", "SPF (if relevant)"],
  },
  {
    name: "Consumer Electronics",
    attributes: ["brand", "model", "device type", "processor/chipset", "storage", "RAM", "screen size", "resolution", "display type", "connectivity", "battery capacity", "charging type", "compatibility", "ports", "durability rating (IP rating)"],
  },
  {
    name: "Phones & Accessories",
    attributes: ["brand", "model", "storage", "carrier/locked/unlocked", "5G support", "condition (if preowned)", "battery health", "screen size", "camera specs", "chipset", "charging type", "case material", "accessory compatibility"],
  },
  {
    name: "Computers & Office",
    attributes: ["device type", "brand", "model", "processor", "RAM", "storage type/size", "screen size", "resolution", "graphics capability", "ports", "connectivity", "operating system", "battery life", "ergonomics", "peripherals included"],
  },
  {
    name: "Home & Kitchen",
    attributes: ["material", "dimensions", "capacity/volume", "weight", "power/wattage", "energy rating", "safety features", "durability", "included components", "compatibility (induction, dishwasher-safe)", "finish/color", "usage type"],
  },
  {
    name: "Furniture",
    attributes: ["dimensions (W×D×H)", "material", "weight capacity", "seating/occupancy capacity", "assembly required", "style", "finish", "comfort level", "durability", "configuration options", "care instructions"],
  },
  {
    name: "Home Improvement & Tools",
    attributes: ["tool/part type", "material", "power type (manual/electric/battery)", "voltage/wattage", "dimensions", "compatibility", "performance rating", "safety features", "durability", "included accessories"],
  },
  {
    name: "Grocery & Household Essentials",
    attributes: ["product type", "net weight/volume", "ingredients", "nutritional info", "allergen info", "dietary category (vegan, gluten-free)", "packaging type", "shelf life", "scent (for cleaning items)", "usage type"],
  },
  {
    name: "Health & Wellness",
    attributes: ["product type", "size/dosage", "active ingredients", "function/purpose", "compatibility (e.g., device-based)", "safety certifications", "material", "weight limit (for equipment)", "adjustability", "durability"],
  },
  {
    name: "Baby, Kids & Maternity",
    attributes: ["age range", "safety certification", "material", "weight/height limit", "dimensions", "developmental stage", "adjustability", "included accessories", "washability", "comfort features", "stroller/car seat compatibility"],
  },
  {
    name: "Pet Supplies",
    attributes: ["species", "breed size", "weight range", "ingredient list (food/treats)", "flavor", "size/volume/count", "material", "durability", "safety certifications", "function (training, grooming, feeding)", "suitability for age/life stage"],
  },
  {
    name: "Sports, Outdoors & Fitness",
    attributes: ["sport type", "size", "weight", "material", "skill level", "activity-specific rating", "durability", "weather resistance", "capacity (e.g., backpacks)", "safety certifications", "adjustability"],
  },
  {
    name: "Toys, Games & Hobbies",
    attributes: ["age range", "material", "dimensions", "skill level", "number of pieces", "compatibility (e.g., sets/systems)", "safety certifications", "complexity", "genre/type", "included accessories"],
  },
  {
    name: "Auto & Motorcycle",
    attributes: ["part type", "make", "model", "trim", "year range", "engine type", "transmission compatibility", "OEM/aftermarket", "material", "dimensions", "performance rating", "installation requirements"],
  },
  {
    name: "Arts, Crafts & Sewing",
    attributes: ["material", "size/yardage", "color", "weight/thickness", "compatibility (machine/hand use)", "tool type", "set contents", "skill level", "durability", "finish/texture"],
  },
  {
    name: "Books, Movies & Music",
    attributes: ["format (hardcover/paperback/digital/vinyl)", "language", "edition", "genre", "release year", "runtime/page count/track count", "publisher/label", "special features (if applicable)"],
  },
  {
    name: "Jewelry",
    attributes: ["material", "metal type", "gemstone type", "gemstone cut", "size/dimensions", "weight", "authenticity", "certification", "closure type", "setting style", "condition (if preowned)"],
  },
  {
    name: "Garden & Outdoor",
    attributes: ["product type", "material", "dimensions", "capacity/coverage area", "weather resistance", "power type (manual/electric/gas)", "durability", "plant type (if relevant)", "blade/handle specs (for tools)"],
  },
  {
    name: "Real Estate",
    attributes: ["property type", "beds", "baths", "square footage", "lot size", "year built", "unit type", "parking", "HOA fees", "lease/own", "heating/cooling type", "construction type", "appliances included"],
  },
  {
    name: "Services",
    attributes: ["service type", "scope of work", "duration", "expertise level", "materials included/not included", "location/coverage area", "certification or licensing", "customization options", "limitations/exclusions"],
  },
];

const useCases = [
  { name: "Comparing two products", example: "I'm torn between these two laptops — can you compare them and tell me which one is better for video editing?" },
  { name: "Similar or look-alike products", example: "I found this jacket online but it's sold out — can you find something that looks similar?" },
  { name: "New products", example: "I need a brand-new vacuum cleaner for hardwood floors — what should I buy?" },
  { name: "Preowned or refurbished items", example: "I'm looking for a refurbished DSLR camera — which models are reliable?" },
  { name: "Purchasing a gift", example: "I want to buy a birthday gift for my sister who loves cooking — what kitchen tools would she appreciate?" },
  { name: "Life-phase purchases (engagement, wedding, new home, new baby)", example: "We're moving into our first home — what essential tools should we buy?" },
  { name: "Finding alternatives", example: "My favorite moisturizer was discontinued — can you find a comparable replacement?" },
  { name: "Finding where to buy", example: "Where can I buy this exact chair online?" },
  { name: "Budget or price-limited shopping", example: "I need a reliable carry-on suitcase under a certain price — what are my options?" },
  { name: "Style-based or personalized shopping", example: "I like minimalist Scandinavian furniture — can you recommend a sofa that fits that aesthetic?" },
  { name: "Problem-solution shopping", example: "I keep getting back pain at my desk — which office chairs would help with that?" },
  { name: "Attribute-specific shopping (size, material, specs)", example: "I need blackout curtains that are at least 95 inches long — what should I buy?" },
  { name: "Authenticity or condition checks", example: "How can I tell if this designer bag listing is authentic?" },
  { name: "Rare, collectible, or limited-edition items", example: "I'm searching for a rare vinyl pressing of a 1970s album — can you help me track it down?" },
  { name: "Upgrading from an older product", example: "I'm upgrading from a 2015 MacBook — what modern laptops are similar but better?" },
  { name: "First-time buyer guidance", example: "This is my first time buying a road bike — what should I look for?" },
  { name: "Travel-related shopping", example: "I need a durable backpack for a two-week hiking trip — what should I get?" },
  { name: "Hobby or activity-based shopping", example: "I want to get into home baking — which stand mixer should I start with?" },
];

const Categories = () => {
  return (
    <Layout>
      <PageHeader
        icon={Grid3X3}
        title="Categories & Use Cases"
        description="Browse all shopping categories with their required attributes, and see the full list of use cases you may be assigned."
      />

      <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto space-y-12">
          {/* Modal Types */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Modal Types</h2>
            <p className="text-muted-foreground mb-6">
              Each task will have a modal type that determines the format of your prompt.
            </p>
            <ContentCard>
              <div className="space-y-6">
                <div className="p-4 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Text Only</span>
                  </div>
                  <p className="text-muted-foreground">
                    The shopping request prompt is only text-based. It should be 4–6 sentences and include at least 3 attributes from your chosen category.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-background">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">Must Include Image</span>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    You must upload an image related to the prompt that provides additional context to your shopping request. The image can be from any source — your own photos, images from Google, an advertisement, a picture of an item from your house, a screenshot from a TV show, etc.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    The prompt should reference the image naturally as part of the request.
                  </p>
                </div>
              </div>
            </ContentCard>
          </section>

          {/* Categories */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Shopping Categories</h2>
            <p className="text-muted-foreground mb-6">
              Select a category and use <strong>at least 3 attributes</strong> from its list in your prompt.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat, i) => (
                <CategoryCard key={i} name={cat.name} attributes={cat.attributes} />
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Use Cases</h2>
            <p className="text-muted-foreground mb-6">
              You will be assigned a use case that your prompt must incorporate. 
              <span className="text-destructive"> You cannot change your assigned use case.</span>
            </p>
            <ContentCard>
              <div className="space-y-4">
                {useCases.map((uc, i) => (
                  <div key={i} className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-medium text-foreground">{uc.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8 italic">"{uc.example}"</p>
                  </div>
                ))}
              </div>
            </ContentCard>
            <InfoBox type="info" title="Important Clarification" className="mt-6">
              These examples are illustrative only. They do not define or limit the kinds of prompts you can write. You may create any natural, human-sounding shopping request as long as it clearly fits into one of these broad categories. Your task will not be rejected for wording a use case in a certain way — these categories simply help us get a diversity of requests.
            </InfoBox>
            <InfoBox type="success" title="Full Prompt Instructions" className="mt-4">
              For complete prompt-writing rules and examples, see the{" "}
              <Link to="/prompt-guide" className="text-primary underline underline-offset-2 decoration-2 hover:text-primary/80 font-medium">
                Prompt Guide
              </Link>.
            </InfoBox>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
