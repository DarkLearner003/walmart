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
          desc: `
The Canon EOS 3000D features an 18MP sensor, Digic 4+ processor, and built-in Wi-Fi, with 9-point autofocus and full HD video. It’s an affordable, beginner-friendly DSLR perfect for learning photography with easy controls and good image quality.`,
          price: 'Rs. 24,999',
        },
        {
          name: `Canon EOS 1500D (EF-S 18-55mm f/3.5-f/5.6 IS II Kit Lens) Digital SLR Camera`,
          desc: `The Canon EOS 1500D features a 24.1MP sensor, Digic 4+ processor, and EF-S 18-55mm lens, with 9-point autofocus and full HD video. It offers high-resolution photos and improved low-light performance, making it ideal for both beginners and casual photographers.`,
          price: 'Rs. 22,999',
        },
        {
          name: 'Canon EOS 1300D (EF-S 18-55mm f/3.5-f/5.6 IS II Kit Lens) Digital SLR Camera',
          desc: `The Canon EOS 1300D features an 18MP sensor, Digic 4+ processor, and EF-S 18-55mm lens with built-in Wi-Fi and NFC. It’s ideal for beginners due to its affordability, essential features, and good image quality.`,
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
          desc: `
The GoPro Hero 7 is a rugged, waterproof action camera with 4K recording at 60fps, HyperSmooth stabilization, and advanced features like TimeWarp. It’s perfect for sports due to its durability, compact size, and ability to capture smooth, high-quality footage in fast-paced action.`,
        },
      ],
    },
    {
      category: 'Point & Shoot Cameras',
      options: [
        {
          name: 'Canon PowerShot SX740 HS Point & Shoot Camera',
          price: 'Rs. 23,999',
          desc: `
The Canon PowerShot SX740 HS offers a 20.3MP sensor, 40x optical zoom, and 4K video recording in a compact design. Its powerful zoom and portability make it ideal for travel and casual photography.`,
        },
      ],
    },
    {
      category: 'Camcorders',
      options: [
        {
          name: 'Sony Handycam HDR-CX405 Camcorder Camera',
          price: 'Rs. 21,900',
          desc: `The Sony Handycam HDR-CX405 is a compact camcorder with a 26.8mm wide-angle lens, 30x optical zoom, and full HD video recording with SteadyShot stabilization. It also captures 9.2MP still images. Lightweight and user-friendly, it’s ideal for capturing smooth, high-quality videos of events, family moments, and travel.`,
        },
      ],
    },
    {
      category: 'Other Notable Options',
      options: [
        {
          name: 'Kodak Pixpro AZ252 Bridge Camera',
          price: 'Rs. 20,646',
          desc: `The Kodak Pixpro AZ252 is a bridge camera with a 16MP sensor, 25x optical zoom, and 720p HD video recording. It features optical image stabilization and multiple scene modes for versatile shots. Ideal for beginners, it offers DSLR-like flexibility with point-and-shoot simplicity at an affordable price.`,
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
    <div className="flex flex-col gap-3 w-full h-full bg-[#F9F9F9] rounded-3xl px-6 py-8">
      <div className="flex flex-col justify-between">
      <div className="bg-gray-200 text-black font-bold text-sm p-2 rounded-full shadow-lg mb-4 w-24">
  AI NOTE
</div>


{/* <div className="font-normal text-xs gradient-your-apps rounded-full bg-gray-300 absolute top-28 left-10 mt-4 ml-4 px-3 py-1 text-center mb-4">
  AI NOTE
</div> */}


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
                  {index + 1}.{category.type}
                </h2>
                <ul className="space-y-3">
                  <li className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
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
              <div key={index} className="mb-8 p-2">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  {index + 1}.{category.category}
                </h2>
                {category.options.map((option, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center flex-col mb-3"
                  >
                    <div className="flex justify-between w-full">
                      <span className="text-gray-800 text-lg font-bold">
                        {option.name}
                      </span>
                      <span className="text-green-600 font-bold">
                        {option.price}
                      </span>
                    </div>
                    <p>{option.desc}</p>
                  </div>
                ))}
              </div>
            ))}
      </div>
      <p className="text-center text-gray-600 mt-4"></p>
    </div>
  );
}
