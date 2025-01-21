import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Restaurant interior"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Welcome to Dampa sa Bonguyan, where we bring you the freshest seafood and finest BBQ in Davao City. 
                Established in 2010, our restaurant has been serving delicious Filipino cuisine in a warm and 
                welcoming atmosphere.
              </p>
              <p className="text-gray-600 mb-6">
                Our expert chefs carefully select the freshest ingredients daily from local markets, ensuring 
                that every dish we serve meets our high standards of quality and taste.
              </p>
              <p className="text-gray-600">
                Whether you're celebrating a special occasion or simply craving authentic Filipino seafood and BBQ, 
                Dampa sa Bonguyan is the perfect destination for your dining pleasure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;