import React from 'react';

const partnerLogos = [
  {
    name: "Partner 1",
    logo: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Partner 2",
    logo: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Partner 3",
    logo: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    name: "Partner 4",
    logo: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, organization }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
      <div className="mb-4 text-teal-600">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.52 2.11-2.13L9.7 5.67c-1.34.89-2.384 2.073-3.138 3.55-.753 1.486-1.131 2.996-1.132 4.53 0 .573.118 1.14.354 1.702.236.563.645 1.038 1.228 1.425.582.388 1.368.582 2.356.582 1.14 0 2.02-.236 2.642-.71.622-.473.933-1.163.933-2.07zm8.43 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.78-3 .53-.81 1.24-1.51 2.11-2.12l-.83-1.87c-1.34.89-2.384 2.073-3.138 3.55-.753 1.486-1.131 2.996-1.132 4.53 0 .573.118 1.14.354 1.702.236.563.645 1.038 1.228 1.425.582.388 1.368.582 2.356.582 1.14 0 2.02-.236 2.642-.71.622-.473.933-1.163.933-2.07z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div>
        <p className="font-semibold text-gray-800">{author}</p>
        <p className="text-gray-600 text-sm">{role}, {organization}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Avni has transformed how we collect health data in remote villages. The offline capability is a game-changer for our field workers.",
      author: "Dr. Sarah Johnson",
      role: "Program Director",
      organization: "Health Access Initiative"
    },
    {
      quote: "The flexibility of Avni allows us to quickly adapt our data collection as our programs evolve. It's become an essential tool for our organization.",
      author: "Michael Chen",
      role: "Technology Lead",
      organization: "Community Water Project"
    }
  ];

  return (
    <section className="py-16 md:py-24" id="testimonials">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Organizations Worldwide
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            See what our partners have to say about working with Avni.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              role={testimonial.role} 
              organization={testimonial.organization} 
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center text-gray-700 mb-10">Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="w-32 h-20 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;