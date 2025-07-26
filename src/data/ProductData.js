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

import classroomPodImage1 from "../assets/ClassRoom/image1.jpg";
import classroomPodImage2 from "../assets/ClassRoom/image2.webp";
import classroomPodImage3 from "../assets/ClassRoom/image3.webp";
import classroomPodImage4 from "../assets/ClassRoom/image4.webp";

import meetingRoomPodImage1 from "../assets/MeetingRoom/image1.jpg";
import meetingRoomPodImage2 from "../assets/MeetingRoom/image2.jpg";
import meetingRoomPodImage3 from "../assets/MeetingRoom/image3.jpg";
import meetingRoomPodImage4 from "../assets/MeetingRoom/image4.jpg";

import leisurePodImage1 from "../assets/Hotel/image1.jpg";
import leisurePodImage2 from "../assets/Hotel/image2.jpg";
import leisurePodImage3 from "../assets/Hotel/image3.jpg";
import leisurePodImage4 from "../assets/Hotel/image4.jpg";

import visitorCenterPodImage1 from "../assets/Visitor/image1.jpg";
import visitorCenterPodImage2 from "../assets/Visitor/image2.jpg";
import visitorCenterPodImage3 from "../assets/Visitor/image3.jpg";
import visitorCenterPodImage4 from "../assets/Visitor/image4.jpg";

const ProductTypes = {
  GARDEN: "garden",
  LIVING: "living",
  COMMERCIAL: "commercial",
};

export const ProductCategories = [
  {
    name: ProductTypes.GARDEN,
    image: litePodImage1,
    description: "",
    button: "View Products",
    to: `/products/${ProductTypes.GARDEN}`,
  },
  {
    name: ProductTypes.LIVING,
    image: fejjiLivingImage2,
    description: "",
    button: "View Products",
    to: `/products/${ProductTypes.LIVING}`,
  },
  {
    name: ProductTypes.COMMERCIAL,
    image: neoPoddImage2,
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

  {
    type: ProductTypes.COMMERCIAL,
    name: "School & Classroom Pods",
    shortDescription:
      "Create bright and inspiring learning spaces with our architecturally designed modular classrooms. Incorporating natural light, ventilation, and flexible spaces, our pods are designed for a stimulating educational environment.",
    image: classroomPodImage1,
    summary: [
      "Learners thrive in environments that stimulate their minds and provide comfort. Our School & Classroom Pods are designed with natural light and ventilation in mind, ensuring flexible spaces that can be tailored to your needs. The design emphasizes connections between indoors and outdoors through full-height glazed doors.",
      "Each classroom is environmentally considerate at every stage of design and construction. Our glazing maximizes solar gains while incorporating shading to harmonize with nature. The latest technologies in mechanical ventilation and heat recovery ensure a healthy and comfortable space, exceeding UK Government regulations.",
      "Natural materials are used for exterior cladding, making the building kind to the environment and the school's landscape. Modular construction allows for off-site building, reducing on-site noise and disruption, and ensuring quality control with reliable timelines.",
      "Our designs, in collaboration with your resources, provide the best educational experience for staff and students. We cater to classrooms, nurseries, and colleges, ensuring optimal learning environments.",
    ],
    features: [
      "Architecturally designed with natural light and ventilation.",
      "Flexible, accessible spaces with full-height glazed doors.",
      "Environmentally considerate design and construction.",
      "Glazing for optimal solar gain and shading.",
      "Advanced mechanical ventilation and heat recovery systems.",
      "Natural materials for exterior cladding.",
      "Modular construction for reduced on-site disruption.",
      "Child-friendly washroom facilities and IT infrastructure.",
      "Turnkey solutions including secure fencing and access paths.",
    ],
    sizes: [
      "Custom sizes to meet specific educational needs.",
      "Modular configurations for flexible classroom setups.",
    ],
    button: "Talk to Us",
    productImages: [
      classroomPodImage1,
      classroomPodImage2,
      classroomPodImage3,
      classroomPodImage4,
    ],
    price: "Price on request",
    id: 7,
    to: null,
  },
  {
    type: ProductTypes.COMMERCIAL,
    name: "Meeting Room Pods",
    shortDescription:
      "Modular commercial buildings and pods that work for you. Bespoke spaces designed to reflect your brand and business, ensuring an impressive and functional meeting environment.",
    image: meetingRoomPodImage1,
    summary: [
      "The space where you meet and greet your clients is a reflection of your brand and your business. We create spaces that are bespoke to you and built to last. An area where you’ll be proud to host your meetings and represent your business in the best possible way. We pay attention to all of the details that are important to you such as data location for IT systems and critical positions for your lighting.",
      "If your business has a Sustainable Procurement policy, our specifications will meet your environmental responsibilities. Our buildings typically feature natural cladding materials and efficient methods of heating and cooling. We design with efficiency in mind, considering the orientation of glazing and incorporating canopy or screen details for solar shading.",
      "We can tailor the design of your building to the needs of your business. If you’re looking for small private areas where your colleagues can collaborate on projects, we can install multiple spaces. If it’s a large conference room or multiple rooms in a larger area, we can design a building to suit. Whether your project involves a large-scale expansion of your team or a small addition to your existing infrastructure, we offer the same level of attention to detail and a building tailored to your exact requirements.",
      "A wide range of businesses have specified our meeting pods, including sales offices, dental offices, marketing suites, and meeting rooms, all prefabricated in our specialist manufacturing unit with precision engineering in mind.",
    ],
    features: [
      "Bespoke design tailored to your brand and business needs.",
      "Natural cladding materials and efficient heating and cooling systems.",
      "Flexible and private collaboration spaces.",
      "Large conference rooms or multiple rooms in larger areas.",
      "Attention to data location for IT systems and critical lighting positions.",
      "Design efficiency with orientation of glazing and solar shading.",
      "Precision-engineered prefabrication.",
      "Environmentally considerate design and construction.",
    ],
    sizes: [
      "Custom sizes to meet specific business needs.",
      "Modular configurations for flexible meeting room setups.",
    ],
    button: "Talk to Us",
    productImages: [
      meetingRoomPodImage1,
      meetingRoomPodImage2,
      meetingRoomPodImage3,
      meetingRoomPodImage4,
    ],
    price: "Price on request",
    id: 8,
    to: null,
  },
  {
    type: ProductTypes.COMMERCIAL,
    name: "Hotel & Leisure Pods",
    shortDescription:
      "Pod Space combines the benefits of modular construction with architectural design, style, and luxury interiors. Minimal disruption with maximum impact.",
    image: leisurePodImage1,
    summary: [
      "Our clients in the leisure industry demand the highest standards of finish, making Pod Space the natural choice for attention to the finer details. Your hotel, spa, or leisure complex is a sanctuary to your guests, so you can’t afford the noise, mess, and disruption of traditional construction on your site. We combine the speed and convenience of modular off-site construction with the expertise of our in-house design team, ensuring the end result is a design that aligns with your style and brand without the hassle of shutdowns or reduced occupancy.",
      "Depending on the needs of your site and space, we can offer a range of solutions from a shell scheme to a fully finished turnkey building. We can work with your own interior designers to ensure everything is in place to complete your building, from specialist M&E to the fit-out of spa equipment. Our design team are also experts in sustainable design, with natural materials at the heart of each of our buildings. Pod Space is the perfect modular hotel facility manufacturer.",
      "On the exterior, the new addition to your landscape and gardens will complement its surroundings with sustainable timber cladding and color-matched details throughout. We also design in efficiency to ensure your future running costs are kept in check with high levels of insulation and energy-efficient modes of heating and cooling. We have the best interests of you and your customers in mind.",
      "Whether it’s a small space to provide gym facilities or a fully functional dining room or spa complex, we have an expert team of designers, installers, and consultants to put everything in place for a successful project.",
    ],
    features: [
      "Bespoke design tailored to your hotel or leisure complex needs.",
      "Sustainable timber cladding and color-matched details.",
      "High levels of insulation and energy-efficient heating and cooling systems.",
      "Flexible solutions from shell schemes to fully finished turnkey buildings.",
      "Collaboration with your interior designers for complete fit-out.",
      "Specialist M&E and spa equipment fit-out.",
      "Natural materials and sustainable design.",
      "Minimized on-site noise and disruption.",
      "Customizable with optional features like M&E specifications, roof canopies, and exterior sliding screens.",
    ],
    sizes: [
      "Custom sizes to meet specific leisure and hospitality needs.",
      "Modular configurations for flexible space setups.",
    ],
    button: "Talk to Us",
    productImages: [
      leisurePodImage1,
      leisurePodImage2,
      leisurePodImage3,
      leisurePodImage4,
    ],
    price: "Price on request",
    id: 9,
    to: null,
  },
  {
    type: ProductTypes.COMMERCIAL,
    name: "Visitor Centre Pods",
    shortDescription:
      "Create a warm and welcoming reception for your visitors with our architecturally designed visitor centre pods. Tailored to showcase your site’s beauty and heritage, our eco-friendly cabins offer a lasting impression.",
    image: visitorCenterPodImage1,
    summary: [
      "First impressions count, especially at the start of your visitor journey. Our Visitor Centre Pods are meticulously planned to ensure your clients get the best experience. We collaborate closely with our clients to incorporate design details that showcase the site and its surroundings.",
      "Whether it's framing the landscape with strategically positioned glazing to invite exploration or complementing existing buildings, our pods are versatile. We also provide facilities and infrastructure to engage and educate visitors, ensuring they linger longer.",
      "Built to last, our eco cabins feature robust materials and high levels of insulation. Multi-layered timber and steel structures are wrapped in natural and sustainable cladding, including options for a living sedum roof to enhance local biodiversity.",
      "Intelligent design informs energy efficiency through window and door placement, and options for solar shading with screens or canopies. Our eco-friendly specification not only benefits the environment but also reduces long-term running costs.",
      "Modular construction offers cost certainty and efficiency, eliminating the unpredictability of traditional builds. A Pod Space building is an investment for the future, enhancing both visitor experience and environmental sustainability.",
    ],
    features: [
      "Architecturally designed to create a warm and inviting reception.",
      "Customizable glazing options to frame surrounding landscapes.",
      "Facilities and infrastructure for engaging visitor experiences.",
      "Robust and eco-friendly construction with high insulation levels.",
      "Natural and sustainable cladding materials, including living sedum roofs.",
      "Energy-efficient design with optimal window and door placement.",
      "Modular construction for cost certainty and reduced on-site disruption.",
      "Options for bespoke signage, lighting packages, and IT integration.",
    ],
    sizes: [
      "Custom sizes tailored to fit your site and visitor needs.",
      "Flexible configurations to accommodate various functions.",
    ],
    button: "Talk to Us",
    productImages: [
      visitorCenterPodImage1,
      visitorCenterPodImage2,
      visitorCenterPodImage3,
      visitorCenterPodImage4,
    ],
    price: "Price on request",
    id: 10,
    to: null,
  },
];

export default ProductData;
