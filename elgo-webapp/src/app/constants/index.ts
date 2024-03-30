
  import { 
    star,
    shield,
    send,
    people01,
    people02,
    people03,
    instagram,
    facebook,
    twitter,
    linkedin,
    airbnb,
    binance,
    coinbase,
    dropbox,
    kpp,
    fauxzan,
    rmurarishetti,
    vn,
    sk,
    czjie,
    tx
    } from "../../../public";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "pricing",
      title: "Pricing",
    },
    
  ];
  
  export const features = [
    {
      id: "feature-1",
      icon: "30%",
      title: "Global Energy Consumption",
      content:
        "Our opportunity lies in  F&B sector’s contribution to 30% of global energy consumption.",
    },
    {
      id: "feature-2",
      icon: "38%",
      title: "Energy Costs for F&B",
      content:
        "Energy costs amount up to  38% of F&B outlets pre tax profit.",
    },
    {
      id: "feature-3",
      icon: "$0.33",
      title: "Energy Costs per Meal",
      content:
        "A restaurant spends 33c on energy on every meal they serve.",
    },
  ];
  
  export const feedback = [
    {
      id: "feedback-1",
      content:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      name: "Herman Jensen",
      title: "Founder & Leader",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "Money makes your life easier. If you're lucky to have it, you're lucky.",
      name: "Steve Mark",
      title: "Founder & Leader",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "It is usually people in the money business, finance, and international trade that are really rich.",
      name: "Kenn Gallagher",
      title: "Founder & Leader",
      img: people03,
    },
  ];
  
  export const stats = [
    {
      id: "stats-1",
      title: "User Active",
      value: "3800+",
    },
    {
      id: "stats-2",
      title: "Trusted by Company",
      value: "230+",
    },
    {
      id: "stats-3",
      title: "Transaction",
      value: "$230M+",
    },
  ];
  
  export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Content",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "How it Works",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "Create",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "Explore",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "Terms & Services",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "Partners",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Suggestions",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Newsletters",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Become a Partner",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];
  
  export const clients = [
    {
      id: "client-1",
      logo: airbnb,
    },
    {
      id: "client-2",
      logo: binance,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: dropbox,
    },
  ];

  export const productDesc ={
    "kapp": "We provide a real-time dashboard that monitors your appliances, offering crystal-clear insights.  But we don't stop there. Our technology detects energy anomalies and forecasts future usage, empowering you to optimize consumption and slash energy bills.",
    "hvac":"Our system leverages the power of Q-Learning, an AI algorithm, to ensure a comfortable haven for your patrons while keeping your energy costs under control.. No more battling chills or sweltering under the vents.",
    "fridge":"Our sensors vigilantly detect faults in your system.  The moment trouble arises, you'll be notified instantly.  Better yet, we'll even send an alert to maintenance  – a hands-free approach to keep your business running smoothly.",
    "light":"Our reinforcement learning algorithm, acts like a sophisticated dimmer switch.  It constantly analyzes environmental factors and comfort levels to orchestrate the perfect lighting scheme, eliminating redundant usage while prioritizing both patron ease."
  }

  export const pricingPackages =[
    {
      id: "pricing-1",
      title: "Starter Elgo Package",
      recommended: "Basic",
      content:["HVAC Optimization", "Refrigerator and Kitchen Appliance Submetering and Anomaly Detection (Upto 3 Devices)", "User Comfort Based Lighting Optimisation"],
      pricing:"+$0",
      buttontext:"Get Started",
      elgoPackage: false
    },
    {
      id: "pricing-2",
      title:"Advanced Elgo Package",
      recommended:"Recommended",
      content:["HVAC Optimization", "Refrigerator and Kitchen Appliance Submetering and Anomaly Detection (Upto 7 Devices)", "User Comfort Based Lighting Optimisation", "24/7 Mechanical Service"],
      pricing:"+$100",
      buttontext:"Upgrade Now",
      elgoPackage: true
    },
    {
      id: "pricing-3",
      title:"Custom Elgo Package",
      recommended:"Premium",
      content:["HVAC Optimization", "Refrigerator and Kitchen Appliance Submetering and Anomaly Detection (Upto 7 Devices)", "User Comfort Based Lighting Optimisation", "24/7 Mechanical Service", "Custom Model for every device in Kitchen", "Regular & Custom Software Updates"],
      pricing:"+$250",
      buttontext:"Choose Plan",
      elgoPackage: false
    }
  ]

  export const teamMembers = [
    {
      id: "team-1",
      name: "Kaveri Priya Putti",
      title: "Software Engineer",
      img: kpp,
    },
    {
      id: "team-2",
      name: "Mohammed Fauzaan",
      title: "Backend Engineer",
      img: fauxzan,
    },
    {
      id: "team-3",
      name: "Rohit Murarishetti",
      title: "Product Engineer",
      img: rmurarishetti,
    },
    {
      id: "team-7",
      name: "Visshal Natarajan",
      title: "Cloud Engineer",
      img: vn,
    },
    {
      id: "team-4",
      name: "Sanat Khandekar",
      title: "Algorithms Engineer",
      img: sk,
    },
    {
      id: "team-5",
      name: "Chow Zi Jie",
      title: "Electrical Engineer",
      img: czjie,
    },
    {
      id: "team-6",
      name: "Tan Xinlin",
      title: "Hardware Engineer",
      img: tx,
    },
    
  ];