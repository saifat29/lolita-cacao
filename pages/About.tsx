import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#FDF8F5] pt-32 pb-20 animate-fade-in">
      {/* Introduction */}
      <div className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-cocoa-900 mb-8">Crafting Chocolates <br/><span className="italic text-gold-600">& Culture</span></h1>
          <p className="font-sans text-lg text-cocoa-700 leading-relaxed mb-10">
            At Nolita Cacao, we believe that chocolate is not just a treat—it is an experience, a craft, 
            and an indulgence that deserves to be savored. Inspired by the precision of Swiss chocolatiers, 
            we specialize in handcrafted, small-batch chocolates that celebrate the art of indulgence.
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>
      </div>

      {/* Founder Section */}
      <section className="bg-white py-20 mb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                alt="Founder" 
                className="w-full h-[500px] object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-xl" 
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-4xl text-cocoa-900 mb-6">About Our Founder</h2>
              <h3 className="font-sans text-xl text-gold-600 font-medium mb-6">Shraddha Vichare</h3>
              <p className="text-cocoa-600 leading-relaxed mb-6 font-sans">
                Shraddha Vichare founded Nolita Cacao inspired by European traditions, driven by a commitment 
                to quality, sustainability, and luxury chocolate-making. Nolita Cacao reflects Shraddha's vision 
                of elevating Indian craftsmanship onto the global luxury stage.
              </p>
              <p className="text-cocoa-600 leading-relaxed mb-8 font-sans">
                With significant global exposure in luxury markets and a deep understanding for artisanal traditions, 
                Shraddha carefully oversees the creation process, ensuring excellence in every detail.
              </p>
              
              <div className="bg-cocoa-900 text-[#FDF8F5] p-8 rounded-lg">
                <div className="mb-4">
                  <strong className="text-gold-500 uppercase tracking-widest text-xs block mb-1">Vision</strong>
                  <p>To make Nolita synonymous with premium luxury chocolates globally.</p>
                </div>
                <div>
                  <strong className="text-gold-500 uppercase tracking-widest text-xs block mb-1">Mission</strong>
                  <p>Creating artisanal chocolates that deliver unforgettable experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 mb-24">
         <div className="bg-cocoa-800 text-center p-12 md:p-20 text-[#FDF8F5] rounded-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl mb-8">Our Core Values</h2>
              <p className="leading-loose text-cocoa-100 mb-8">
                Nolita Cacao stands apart in India's chocolate landscape through its exclusive use of 
                <strong> Felchlin couverture</strong>, a Swiss chocolate known globally for its unmatched quality. 
                Only a handful of chocolatiers in India are trusted by Felchlin to work with their cacao.
              </p>
              <p className="leading-loose text-cocoa-100">
                Combining this rare ingredient with refined Italian artisanal techniques, Nolita crafts desserts 
                with extraordinary flavor combinations that surprise and delight. Nolita represents a unique 
                intersection of precision, purity, and palate.
              </p>
            </div>
         </div>
      </section>

      {/* Collaborations */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl text-center text-cocoa-900 mb-16">Exclusive Collaborations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col">
               <div className="h-64 bg-gray-100 mb-6 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800" alt="PVR Collab" className="w-full h-full object-cover" />
               </div>
               <h3 className="font-serif text-2xl text-cocoa-900 mb-2">Nolita x PVR Luxury Lounge</h3>
               <p className="text-cocoa-600 text-sm leading-relaxed">
                 Nolita Cacao introduced its premium beverage brand, CAVU, through an exclusive collaboration with PVR's luxury lounge. 
                 The CAVU drink reflected the brand's entry into premium beverage experiences, marking Nolita's expansion into elite entertainment.
               </p>
            </div>

            <div className="flex flex-col">
               <div className="h-64 bg-gray-100 mb-6 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" alt="Pure Concept Collab" className="w-full h-full object-cover" />
               </div>
               <h3 className="font-serif text-2xl text-cocoa-900 mb-2">Nolita x The Pure Concept Home</h3>
               <p className="text-cocoa-600 text-sm leading-relaxed">
                 Collaborated to offer a curated selection of artisanal biscottis and cookies. 
                 These were presented as part of their premium in-store gifting and lifestyle experience.
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;