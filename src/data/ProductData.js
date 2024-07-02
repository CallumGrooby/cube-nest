import image from "../assets/placeholder.webp";

import neoPoddImage1 from "../assets/Neo Pod/Image1.webp";
import neoPoddImage2 from "../assets/Neo Pod/Image2.webp";
import neoPoddImage3 from "../assets/Neo Pod/Image3.webp";
import neoPoddImage4 from "../assets/Neo Pod/Image4.webp";

import fejjiPodImage1 from "../assets/Fjell Pod/Image1.jpg";
import fejjiPodImage2 from "../assets/Fjell Pod/Image2.jpg";
import fejjiPodImage3 from "../assets/Fjell Pod/Image3.jpg";
import fejjiPodImage4 from "../assets/Fjell Pod/Image4.jpg";

import litePodImage1 from "../assets/Lite Pod/Image1.webp";
import litePodImage2 from "../assets/Lite Pod/Image2.webp";
import litePodImage3 from "../assets/Lite Pod/Image3.webp";
import litePodImage4 from "../assets/Lite Pod/Image4.webp";

import EcoLivingImage1 from "../assets/Eco Pod/Image1.jpg";
import EcoLivingImage2 from "../assets/Eco Pod/Image2.jpg";
import EcoLivingImage3 from "../assets/Eco Pod/Image3.jpg";
import EcoLivingImage4 from "../assets/Eco Pod/Image4.jpg";

import fejjiLivingImage1 from "../assets/Fjell Living/Image1.jpg";
import fejjiLivingImage2 from "../assets/Fjell Living/Image2.jpg";
import fejjiLivingImage3 from "../assets/Fjell Living/Image3.jpg";
import fejjiLivingImage4 from "../assets/Fjell Living/Image4.jpg";

const ProductTypes = {
  GARDEN: "garden",
  LIVING: "living",
  COMMERCIAL: "commercial",
};

export const ProductCategories = [
  {
    name: ProductTypes.GARDEN,
    image: image,
    description: "",
    button: "View Products",
    to: `/products/${ProductTypes.GARDEN}`,
  },
  {
    name: ProductTypes.LIVING,
    image: image,
    description: "",
    button: "View Products",
    to: `/products/${ProductTypes.LIVING}`,
  },
  {
    name: ProductTypes.COMMERCIAL,
    image: image,
    description: "",
    button: "View Products",
    to: `/products/${ProductTypes.COMMERCIAL}`,
  },
];

export const ProductData = [
  {
    type: ProductTypes.GARDEN,
    name: "Neo Pod",
    shortDescription:
      "Price includes build & installation. Some optional features are shown. Groundworks (inc. subframe) and delivery not included. Packages may be available, price on application (subject to access and site survey).",
    image: neoPoddImage3,
    summary: [
      "The Neo Pod is everything that Pod Space are renowned for but contained in a package small enough to fit most garden spaces. Our designers have taken the core concepts of light, space and access to the outdoors and applied them to the Neo Pod with a new striking look.",
      "The exterior dimensions of the Neo Pod offer practicality for those requiring a smaller space, whilst retaining all of the superior build quality to ensure you have comfort, security and peace at any time of year. From the exterior the Neo Pod is finished with the same open clad Siberian Larch and feature composite panels as the rest of our Pod range. Full height sliding doors cornering in to an adjoining full height window also feature and provide connection to the outdoors.",
      "On the interior we’ve finished the walls and ceiling with contemporary white furniture grade panels for an easy to maintain finish. Wide Oak flooring completes the sleek lines and gives the Neo Pod a feeling of wide open space.",
      "For additional privacy and shading we can offer options for ceiling recessed blinds and louvred side screen over the tall window.",
      "Contact us to discuss how the Neo pod can become your dream space.",
    ],
    features: [
      "Solid engineered structural FSC timber and steel framework at the core.",
      "Maintenance free feature cladding in black composite.",
      "Colour matched maintenance free architectural trims.",
      "Modern Siberian Larch rain screen cladding.",
      "Digitally controlled underfloor heating.",
      "1 x full height frameless corner window.",
      "1 x sliding door with slim line Aluminium frame.",
      "Durable zinc coated guttering and drainpipes.",
      "Contemporary low maintenance furniture grade panels to interior.",
      "Wide plank oak flooring.",
      "No planning permission required (subject to meeting certain criteria).",
    ],
    sizes: ["W 3.6m x D 2.61m x H 2.45m", "W 4.05m x D 2.94m x H 2.45m"],
    productImages: [neoPoddImage1, neoPoddImage2, neoPoddImage3, neoPoddImage4],
    button: "Find Out More",
    price: "29,775.00",

    id: 1,
    to: null,
  },
  {
    type: ProductTypes.GARDEN,
    name: "Fjell Pod",
    image: fejjiPodImage4,
    shortDescription:
      "Elevate your garden with the Fjell Garden Pod, a versatile space that can serve as your outdoor retreat, home office, fitness sanctuary, or a place to entertain friends and family. Inspired by the clean lines and functional elegance of Scandinavian design, it's more than just a garden structure; it's an extension of your lifestyle.",
    summary: [
      `Indulge in the elegance of Nordic design with the Fjell Pod, a versatile Garden Pod that transcends seasons and styles. Drawing inspiration from the sustainable values of Scandinavian living, the Fjell Pod effortlessly combines stylish aesthetics with eco-consciousness, making it the perfect addition to your outdoor space. Its sleek lines, striking features, and sustainable materials create a harmonious blend of form and function. Just like the warm and welcoming interiors of Scandinavian homes, the Fjell Pod provides an inviting atmosphere for a variety of purposes.`,
      `As an ode to eco-conscious Scandinavian culture, the Fjell Pod features cutting-edge energy-efficient systems and exceptional insulation, ensuring a cosy and inviting environment throughout the year. Its sustainable materials echo the values of Nordic living, aligning with your commitment to a greener lifestyle.`,
      `Customisation is at the core of the Fjell Pod experience. Whether you envision an open-plan space or desire separate defined areas, our team will collaborate with you to design a garden room that matches your unique needs and reflects your individual style. It upholds renowned Scandinavian craftsmanship, meeting and often exceeding industry standards. It's a testament to enduring quality, mirroring the principles of meticulous craftsmanship celebrated in Nordic culture.`,
      `With the Fjell Pod, you're not just limited to a garden room; you have a canvas for your creativity. It's a versatile space that can be tailored to your preferences, whether you dream of an inspiring garden office, a tranquil studio, or a space for outdoor entertainment. The possibilities are as limitless as your imagination.`,
      `Explore the possibilities and redefine your outdoor living experience.`,
    ],
    features: [
      "No planning permission required (subject to meeting certain criteria).",
      "Solid engineered structural FSC timber and steel framework at the core.",
      "High levels of natural thermal and acoustic insulation to provide comfortable use year-round.",
      "The cladding is anything but ordinary. It`s unique look is created using thermally modified timber cladding, which has been supercharged for stability and durability. By giving Scandinavian-grown Scots Pine a special treatment with just heat and steam a coat of paint can last up to three times longer compared to regular timber. That's less time spent on maintenance and fewer worries about the wood's longevity. Plus, thanks to its unique treatment process, it doesn't play the usual wood tricks. It's less likely to shrink and swell, and it's even more resistant to those pesky wood-damaging bugs.",
      "Feature glazed wall (with aluminium frames) incorporating double patio door. Low maintenance (polyester powder coated aluminium frames). The slimline frames maximise the amount of glazing. They are all energy efficient and double glazed.",
      "Full height frameless glazed windows to the end elevations.",
      "Contemporary aluminium canopy providing weather protection to the glazed wall / doors.",
      "Contemporary zinc coated rainwater goods.",
      "Modern recessed skirting details and quality real wood flooring.",
      "Digitally controlled underfloor heating.",
    ],
    sizes: [
      "W 9.08m x D 4.39m x H 2.7m",
      "W 10.08m x D 4.39m x H 2.7m",
      "W 11.08m x D 4.39m x H 2.7m",
      "W 12.08m x D 4.39m x H 2.7m",
      "W 13.08m x D 4.39m x H 2.7m",
    ],
    button: "Find Out More",
    productImages: [
      fejjiPodImage1,
      fejjiPodImage2,
      fejjiPodImage3,
      fejjiPodImage4,
    ],
    price: "28,200",
    id: 2,
    to: null,
  },
  {
    type: ProductTypes.GARDEN,
    name: "Lite Pod",
    shortDescription:
      "Prices includes build & installation. Some optional features are shown. Groundworks (inc. subframe) and delivery not included. Packages may be available, price on application (subject to access and site survey).",
    image: litePodImage1,
    summary: [
      "The Lite Pod is a large, open plan garden studio offering greater flexibility for various uses including a home or commercial garden office. The attractive exterior design features premium grade Siberian Larch cladding, large contemporary aluminium sliding doors with modern slim line frames and a large frameless feature window. All perfectly colour matched in either a dark grey or black finish.",
      "This state-of-the-art Lite pod design continues with aluminium base and roof flashings and a durable, open jointed rain screen, one of the Pod Space signature design features. With an attractive high-end finish this sizeable yet economical pod doesn’t compromise on space or quality.",
      "The Lite Pod is a garden studio like no other, high performance natural insulation reduces heat loss to ensure the Lite Pod is very energy efficient and by integrating optional renewables (green energy) the Pod becomes even more cost effective on temperature control. With impressive levels of acoustic insulation the Lite Pod is also perfect for a productive garden studio, home office Pod, music room and home recording studio.",
      "We can also customise your Lite Pod with many striking design features including an extended decked area, an optional recessed blind built into the structure of the pod, fixed vertical louvres or an additional slim slot window. Plus, a furniture and lighting upgrade can help make it the perfect space for you. Contact us to discuss how a Lite Pod can become your dream studio space.",
    ],
    features: [
      "Solid engineered structural FSC timber and steel framework at the core.",
      "Maintenance free and fire resistant composite cladding panels in black to rear wall.",
      "Precision manufactured colour matched feature aluminium cladding.",
      "Modern Siberian Larch rain screen cladding.",
      "Digitally controlled underfloor heating.",
      "1 x full height frameless windows.",
      "1 x large format sliding door with slim line Aluminium frame.",
      "Durable zinc coated guttering and drainpipes.",
      "Canopy with feature exterior grade spotlights.",
      "Premium grade large section Siberian Larch decking.",
      "No planning permission required (subject to meeting certain criteria).",
    ],
    sizes: [
      "W 4.62m x D 3.85m x H 2.5m",
      "W 5.1m x D 3.85m x H 2.5m",
      "Need an alternative size? Other size options available.",
    ],
    button: "Find Out More",
    productImages: [litePodImage1, litePodImage2, litePodImage3, litePodImage4],
    price: "43,980.00",
    id: 3,
    to: null,
  },
  {
    type: ProductTypes.LIVING,
    name: "Eco Pod Living",
    shortDescription:
      "Welcome to the world of sustainable living with the Eco Pod Living from Pod Space. Designed to cater to the evolving needs of modern families, our award-winning Eco Pod Living offers a versatile and eco-friendly living space, nestled within the serenity of your garden. Price on request.",
    image: EcoLivingImage1,
    summary: [
      "If you are looking to create an annexe in your garden, the Eco Pod Living is the perfect solution. Based on our award winning Eco Garden Pod, it blends natural materials, practicality and outstanding design to give you a wonderful home. The joy of an Eco Pod Living is its flexibility. If you need one or two bedrooms, prefer an enclosed lounge, love open plan - whatever you are looking for we can work with you to design the solution.",
      "Our team really care about the details, and we can offer a choice of kitchen and shower room options so that you can feel right at home from day one. Our Living Pods are the polar opposite to a Granny Annexe!",
      "Many of our customers have also chosen to use their Eco Pod Living as additional accommodation for family, friends or even paying guests. Whatever your reason for choosing an annexe, Pod Space will design, build and install the perfect living annexe.",
      "Our Custom Eco Pod Living includes a bedroom, shower room and open living and kitchen area.",
    ],
    features: [
      "Solid engineered structural FSC timber and steel framework at the core.",
      "High levels of natural thermal and acoustic insulation to provide comfortable use year-round.",
      "Large format 2 panel high performance sliding door with minimal sight lines and multipoint locking for added security.",
      "Full height frameless glazing panels.",
      "Contemporary optional oversailing canopy to three sides, providing protection from the weather and solar shading.",
      "Contemporary zinc coated rainwater goods.",
      "Modern recessed skirting details and quality real wood flooring.",
      "Digitally controlled underfloor heating.",
    ],
    sizes: [
      "1 bedroom: W 8.56m x D 3.91m x H 2.65m",
      "2 bedroom: W 11.43m wide x D 3.91m x 2.65m",
    ],
    button: "Find Out More",
    productImages: [
      EcoLivingImage1,
      EcoLivingImage2,
      EcoLivingImage3,
      EcoLivingImage4,
    ],
    price: "29,775.00",
    id: 4,
    to: null,
  },
  {
    type: ProductTypes.LIVING,
    name: "Fjell Pod Living",
    shortDescription:
      "Crafted to cater to the evolving needs of modern families, Fjell Pod Living offers a unique and eco-conscious living space, seamlessly integrated within the tranquility of your garden. Inspired by the breathtaking landscapes of Scandinavia, 'Fjell' means 'mountain' in Norwegian, embodying the strength and resilience of this remarkable region. It's more than just a space; it's a versatile accommodation solution meticulously designed with your lifestyle in mind. Price on request.",
    image: fejjiLivingImage1,
    summary: [
      "The Fjell Pod Living, born from the same designer as the award-winning Eco Garden Pod, is not just an annexe; it's a visual masterpiece that combines natural materials, practicality, and exceptional design, inspired by the stunning landscapes of Scandinavia. Its signature stepped wood cladding and stunning wall of glass set it apart as a true work of art in your garden.",
      "What truly distinguishes the Fjell Pod Living is its remarkable flexibility. Whether you dream of one or two bedrooms, an inviting enclosed lounge, or the freedom of open-plan living, we collaborate with you to craft the ideal solution.",
      "Our team is passionate about every detail, offering a range of kitchen and shower room options so you can feel at home from day one. Unlike traditional Granny Annexes, our Living Pods redefine the concept of garden annexes.",
      "Many of our valued customers have chosen the Fjell Pod Living as additional accommodation for family, friends, or even as a source of rental income. Whatever your reason for seeking an annexe, Pod Space is your partner in designing, constructing, and installing the perfect living annexe that's as distinctive as it is functional.",
      "Our custom Fjell Pod Living includes a bedroom, shower room and open living and kitchen area (optional).",
    ],
    features: [
      "Solid engineered structural FSC timber and steel framework at the core.",
      "High levels of natural thermal and acoustic insulation to provide comfortable use year-round.",
      "The cladding is anything but ordinary. It’s unique look is created using thermally modified timber cladding, which has been supercharged for stability and durability. By giving Scandinavian-grown Scots Pine a special treatment with just heat and steam a coat of paint can last up to three times longer compared to regular timber. That's less time spent on maintenance and fewer worries about the wood's longevity. Plus, thanks to its unique treatment process, it doesn't play the usual wood tricks. It's less likely to shrink and swell, and it's even more resistant to those pesky wood-damaging bugs.",
      "Feature glazed wall (with aluminium frames) incorporating double patio door. Low maintenance (polyester powder coated aluminium frames). The slimline frames maximise the amount of glazing. They are all energy efficient and double glazed.",
      "Full height frameless glazed windows to the end elevations.",
      "Contemporary aluminium canopy providing weather protection to the glazed wall / doors.",
      "Contemporary zinc coated rainwater goods.",
      "Modern recessed skirting details and quality real wood flooring.",
      "Digitally controlled underfloor heating.",
    ],
    sizes: [
      "W 9.08m x D 4.39m x H 2.76m",
      "W 10.08m x D 4.39m x H 2.76m",
      "W 11.08m x D 4.39m x H 2.76m",
      "W 12.08m x D 4.39m x H 2.76m",
      "W 13.08m x D 4.39m x H 2.76m",
    ],
    button: "Find Out More",
    productImages: [
      fejjiLivingImage1,
      fejjiLivingImage2,
      fejjiLivingImage3,
      fejjiLivingImage4,
    ],
    price: "29,775.00",
    id: 5,
    to: null,
  },
  {
    type: ProductTypes.LIVING,
    name: "Nordic Living Pod",
    shortDescription:
      "Discover the Nordic Living Pod by Pod Space, a sophisticated blend of Scandinavian elegance and modern functionality. Designed as a versatile living space integrated seamlessly into your garden, it offers a serene retreat inspired by the natural beauty of Nordic landscapes. Price on request.",
    image: fejjiLivingImage2,
    summary: [
      "The Nordic Living Pod exemplifies the essence of Scandinavian design, offering a harmonious blend of natural materials, sleek aesthetics, and functional living spaces. Inspired by the tranquil landscapes of the Nordics, it creates an inviting environment within your garden.",
      "Designed for flexibility, the Nordic Living Pod can be customized to accommodate various living arrangements. Whether you desire a single-bedroom layout or a multifunctional space for living and working, we collaborate with you to create your ideal living environment.",
      "Our dedication to detail extends to offering customizable kitchen and bathroom options, ensuring your pod feels personalized and comfortable. Unlike traditional living annexes, our pods redefine outdoor living with sophistication and practicality.",
      "Many of our clients choose the Nordic Living Pod as an additional living space for family, guests, or as a rental opportunity. Whatever your reason for seeking a garden living pod, Pod Space is committed to designing and delivering a unique, functional pod tailored to your lifestyle.",
    ],
    features: [
      "Solid engineered structural FSC timber and steel framework at the core.",
      "High levels of natural thermal and acoustic insulation for year-round comfort.",
      "The cladding features thermally modified timber, enhancing durability and minimizing maintenance needs. This innovative treatment extends the lifespan of the wood, reducing shrinkage, swelling, and susceptibility to pests.",
      "Large format 2-panel high-performance sliding door with minimal sight lines and multipoint locking for security.",
      "Full height frameless glazed windows at the end elevations for panoramic views and natural light.",
      "Contemporary aluminium canopy providing weather protection and solar shading.",
      "Contemporary zinc-coated rainwater goods ensure efficient drainage and durability.",
      "Modern recessed skirting details and premium real wood flooring for a luxurious interior finish.",
      "Digitally controlled underfloor heating for precise temperature control and energy efficiency.",
    ],
    sizes: [
      "W 9.08m x D 4.39m x H 2.7m",
      "W 10.08m x D 4.39m x H 2.7m",
      "W 11.08m x D 4.39m x H 2.7m (*as shown)",
      "W 12.08m x D 4.39m x H 2.7m",
      "W 13.08m x D 4.39m x H 2.7m",
    ],
    button: "Find Out More",
    productImages: [
      fejjiPodImage1,
      fejjiPodImage2,
      fejjiPodImage3,
      fejjiPodImage4,
    ],
    price: "29,775.00",
    id: 6,
    to: null,
  },
];

export default ProductData;
