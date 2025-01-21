import React from 'react';

const menuItems = {
  seafood: [
    { name: 'Grilled Tuna Belly', price: '₱280', description: 'Fresh tuna belly grilled to perfection' },
    { name: 'Garlic Butter Shrimp', price: '₱350', description: 'Succulent shrimp in garlic butter sauce' },
    { name: 'Sinigang na Bangus', price: '₱320', description: 'Milkfish in sour tamarind soup' },
  ],
  bbq: [
    { name: 'Pork BBQ Skewers', price: '₱180', description: 'Marinated pork skewers (3 pcs)' },
    { name: 'Grilled Chicken Inasal', price: '₱250', description: 'Filipino-style grilled chicken' },
    { name: 'BBQ Liempo', price: '₱280', description: 'Grilled pork belly with special marinade' },
  ],
  drinks: [
    { name: 'Fresh Buko Juice', price: '₱90', description: 'Young coconut water' },
    { name: 'Mango Shake', price: '₱120', description: 'Fresh mango blended with milk' },
    { name: 'Soda', price: '₱60', description: 'Various soft drinks available' },
  ],
};

const MenuSection = ({ title, items }: { title: string; items: any[] }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold mb-6 text-orange-600">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <p className="text-orange-600 font-bold">{item.price}</p>
        </div>
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Menu</h2>
        <MenuSection title="Seafood Specialties" items={menuItems.seafood} />
        <MenuSection title="BBQ Selection" items={menuItems.bbq} />
        <MenuSection title="Refreshing Drinks" items={menuItems.drinks} />
      </div>
    </section>
  );
};

export default Menu;