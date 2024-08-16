'use client';
import {useSearchParams} from 'next/navigation';
import React from 'react';

export default function CameraOptions() {
  const params = useSearchParams();
  const query = params.get('query');
  const cameras = [
    {
      category: 'Digital SLR Cameras',
      options: [
        {
          name: 'Canon EOS 3000D (Body) Digital SLR Camera',
          price: 'Rs. 24,999',
        },
        {
          name: 'Canon EOS 1500D (EF-S 18-55mm f/3.5-f/5.6 IS II Kit Lens) Digital SLR Camera',
          price: 'Rs. 22,999',
        },
        {
          name: 'Canon EOS 1300D (EF-S 18-55mm f/3.5-f/5.6 IS II Kit Lens) Digital SLR Camera',
          price: 'Rs. 26,500',
        },
      ],
    },
    {
      category: 'Sports & Action Cameras',
      options: [
        {
          name: 'GoPro Hero 7 Sports & Action Camera',
          price: 'Rs. 25,190',
        },
      ],
    },
    {
      category: 'Point & Shoot Cameras',
      options: [
        {
          name: 'Canon PowerShot SX740 HS Point & Shoot Camera',
          price: 'Rs. 23,999',
        },
      ],
    },
    {
      category: 'Camcorders',
      options: [
        {
          name: 'Sony Handycam HDR-CX405 Camcorder Camera',
          price: 'Rs. 21,900',
        },
      ],
    },
    {
      category: 'Other Notable Options',
      options: [
        {
          name: 'Kodak Pixpro AZ252 Bridge Camera',
          price: 'Rs. 20,646',
        },
      ],
    },
  ];
  const schoolCameras = [
    {
      title: 'Fujifilm Instax Mini 12',
      type: 'Instant Camera',
      features:
        'Automatic settings, easy to use, includes a mirror for selfies, and produces instant prints.',
      price:
        'Affordable, great for beginners wanting instant gratification with their photos.',
    },
    {
      title: 'GoPro Hero8 Black',
      type: 'Action Camera',
      features:
        'Durable, waterproof, records 4K video, and has excellent stabilization. Ideal for capturing adventures like biking or skateboarding.',
      price:
        'Generally under $200, making it a good deal for its capabilities.',
    },
    {
      title: 'VTech KidiZoom Duo 5.0',
      type: 'Digital Camera for Kids',
      features:
        'Dual lenses for selfies, fun games, and a sturdy design that can handle drops.',
      price: 'Budget-friendly, perfect for younger kids.',
    },
    {
      title: 'Kodak Printomatic',
      type: 'Instant Print Camera',
      features:
        'Compact design, prints photos instantly, and is easy to use. Great for kids who enjoy seeing their photos right away.',
      price: 'Reasonable, with affordable paper refills.',
    },
    {
      title: 'OM System Tough TG-7',
      type: 'Rugged Camera',
      features:
        'Waterproof, drop-proof, and capable of high-quality images and 4K video. Suitable for outdoor adventures.',
      price: 'On the higher side but worth it for durability and performance.',
    },
    {
      title: 'Panasonic Lumix DMC-G7',
      type: 'Mirrorless Camera',
      features:
        'Interchangeable lenses, compact design, and great for both photography and video. Ideal for older kids interested in serious photography.',
      price: 'Mid-range, suitable for budding photographers.',
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full h-full bg-[#F9F9F9] rounded-3xl px-6 py-5">
      <div className="flex flex-col justify-between">
        <div className="font-normal text-xs gradient-your-apps">AI NOTE</div>
        {query === 'cameras' ? (
          <div className="">
            Here are some great camera recommendations for a school-going boy
            interested in photography:
          </div>
        ) : (
          <div className="">
            When choosing a camera under 30,000, consider factors like
            resolution, sensor type, display size, zoom capabilities, and
            overall features to find the best fit for your needs and budget.
            <br />
            Best Cameras Under 30,000 INR are following
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto">
        {query === 'cameras'
          ? schoolCameras.map((category, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                 {index+1}.{category.type}
                </h2>
                <ul className="space-y-3">
                  <li
                    className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
                  >
                    <span className="text-gray-800 text-lg">
                      {category.title}
                    </span>
                    <span className="text-green-600 font-bold">
                      {category.price}
                    </span>
                  </li>
                </ul>
              </div>
            ))
          : cameras.map((category, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  {index+1}.{category.category}
                </h2>
                <ul className="space-y-3">
                  {category.options.map((option, idx) => (
                    <li
                      key={idx}
                      className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
                    >
                      <span className="text-gray-800 text-lg">
                        {option.name}
                      </span>
                      <span className="text-green-600 font-bold">
                        {option.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </div>
      <p className="text-center text-gray-600 mt-4"></p>
    </div>
  );
}
