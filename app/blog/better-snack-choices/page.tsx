import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Better Snack Choices | Nootrio Nutrition Blog",
  description:
    "Discover healthy snack alternatives that do not require expensive fitness foods. Learn how to make smart snacking choices with everyday, affordable ingredients.",
  keywords:
    "healthy snacks, smart snacking, affordable snacks, nutritious snacks, snack ideas, healthy eating",
  openGraph: {
    title: "Better Snack Choices | Nootrio",
    description:
      "Simple, affordable snack ideas that support your health goals",
    type: "article",
  },
};

export default function SnackChoicesPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <article className="w-full">
        <header className="bg-emerald-900 text-white py-12 md:py-16 lg:py-20">
          <div className="w-[90%] md:w-[85%] lg:w-[70%] max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm md:text-base transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Blog</span>
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6 text-xs md:text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Snacks</span>
              <span className="text-white/70">November 25, 2024</span>
              <span className="text-white/70">•</span>
              <span className="text-white/70">4 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Better Snack Choices
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              You do not need expensive fitness foods to snack healthy. Discover
              simple, affordable alternatives.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
          <Image
            src="/images/blog-3.jpg"
            alt="Variety of healthy, affordable snack options"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="w-[90%] md:w-[85%] lg:w-[70%] max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8 md:mb-12">
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-6">
                Walk down the health food aisle of any grocery store and you
                will see protein bars, superfood snacks, and specialty items
                with premium price tags. The marketing suggests you need these
                expensive products to snack healthy, but that simply is not
                true.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-6">
                The best snacks are often the simplest ones—whole foods that
                provide nutrients without breaking your budget or spiking your
                blood sugar. Let us explore some smart, affordable snack choices
                that actually support your health goals.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Why Most Packaged Snacks Fail You
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Many packaged snacks, even those marketed as healthy, are loaded
                with added sugars, refined carbohydrates, and unhealthy fats.
                These ingredients cause rapid blood sugar spikes followed by
                crashes, leaving you tired, hungry, and reaching for more
                snacks.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>The solution:</strong> Choose snacks that combine
                protein, healthy fats, and fiber. This combination provides
                steady energy and keeps you satisfied between meals.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Apple Slices with Nut Butter
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                This classic combination is simple, affordable, and nutritious.
                Apples provide fiber and natural sweetness, while nut butter
                (peanut, almond, or cashew) adds protein and healthy fats.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Cost comparison:</strong> A jar of peanut butter and a
                bag of apples costs far less than a box of protein bars and
                provides more servings.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Greek Yogurt with Berries
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Plain Greek yogurt is packed with protein (15-20g per serving)
                and probiotics for gut health. Add fresh or frozen berries for
                antioxidants and natural sweetness without added sugar.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Budget tip:</strong> Buy large containers of plain
                yogurt instead of individual flavored cups. You will save money
                and avoid unnecessary added sugars.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Hummus and Vegetables
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Hummus is made from chickpeas, which provide protein and fiber.
                Pair it with carrots, celery, bell peppers, or cucumber for a
                crunchy, satisfying snack that will not spike your blood sugar.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>DIY option:</strong> Making hummus at home is incredibly
                cheap and easy. Blend canned chickpeas, tahini, lemon juice,
                garlic, and olive oil for a fraction of the cost of store-bought
                versions.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Hard-Boiled Eggs
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Eggs are one of the most affordable sources of high-quality
                protein. Hard-boil a batch at the beginning of the week for
                grab-and-go snacks. One or two eggs make a perfectly satisfying
                snack.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Flavor boost:</strong> Sprinkle with salt, pepper, or
                everything bagel seasoning for extra flavor without extra
                calories.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Nuts and Seeds (in Moderation)
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                A small handful of almonds, walnuts, or pumpkin seeds provides
                healthy fats, protein, and important minerals. While nuts can be
                pricey, buying in bulk and portioning them out makes them more
                affordable.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Portion control:</strong> Pre-portion nuts into small
                containers or bags (about 1/4 cup servings) to avoid overeating,
                as they are calorie-dense.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Cheese and Whole Grain Crackers
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                A small serving of cheese paired with whole grain crackers
                provides protein, calcium, and complex carbohydrates. Choose
                crackers with at least 3 grams of fiber per serving for better
                satiety.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Smart choice:</strong> Buy block cheese and slice it
                yourself instead of pre-sliced cheese. It is cheaper and stays
                fresh longer.
              </p>
            </section>

            <section className="mb-8 md:mb-12 bg-green-800/5 p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Snacking Guidelines for Success
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-black/80 ml-4">
                <li>Aim for snacks with at least 5g of protein or fiber</li>
                <li>Avoid snacks with more than 10g of added sugar</li>
                <li>Choose whole foods over processed options when possible</li>
                <li>Pre-portion snacks to avoid mindless overeating</li>
                <li>Stay hydrated—sometimes thirst masquerades as hunger</li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Final Thoughts
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Healthy snacking does not require expensive specialty foods or
                trendy superfoods. The most nutritious snacks are often simple
                combinations of whole foods you can find at any grocery store.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                By choosing snacks that provide protein, healthy fats, and
                fiber, you will avoid energy crashes, stay satisfied longer, and
                support your overall health goals—all without spending a fortune
                on overpriced fitness foods.
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-emerald-900 text-white rounded-2xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Want personalized snack recommendations?
            </h3>
            <p className="text-white/90 mb-6">
              Get expert nutrition advice tailored to your lifestyle,
              preferences, and health goals.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-white hover:bg-green-800 hover:text-white text-emerald-900 gap-2 hover:gap-3 py-3 px-6 transition-all duration-500 font-semibold rounded-full text-sm md:text-base"
            >
              <span>Book a Consultation</span>
              <MdOutlineArrowOutward className="text-lg md:text-xl" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="mt-12 md:mt-16 pt-8 border-t border-black/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-green-800 hover:gap-3 transition-all font-medium"
            >
              <FaArrowLeft />
              <span>Back to all posts</span>
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
