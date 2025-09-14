
export const content = {
  nav: ['overview','skills','experience','projects','certifications','contact'],
  hero: {
    name: "FK.",
    title: "ML Engineer & Full‑Stack Developer",
    blurb: "A tagline about what you build.",
    actions: [{label:'Hire Me', href:'#contact'}, {label:'View Resume', href:'#', secondary:true}],
    socials: [
      {label:'GitHub', href:'https://github.com/yourname'},
      {label:'LinkedIn', href:'https://linkedin.com/in/yourname'},
      {label:'Email', href:'mailto:you@example.com'}
    ]
  },
  pillars: [
    {label:'ML', title:'Building AI That Matters', body:'Ship ML features to production with impact.'},
    {label:'API', title:'API Craft', body:'Rock-solid REST/GraphQL & platform building.'},
    {label:'DX', title:'DevEx', body:'Great docs, tests and performance.'}
  ],
  skills: [
    {group:'AI/ML', items:['Python','NumPy','Pandas','scikit-learn','TensorFlow','OpenCV']},
    {group:'Frontend', items:['HTML','CSS','JavaScript','TypeScript','React','Vite','Tailwind']},
    {group:'Backend', items:['PHP','Laravel','Node','Express','REST','GraphQL']},
    {group:'Data', items:['MySQL','PostgreSQL','Redis','Firebase']},
    {group:'Tools', items:['Git','Docker','Postman','Figma','Jest']},
  ],
  experience: [
    {role:'Role', company:'Company', period:'2023–Present', bullets:['Impact bullet one','Impact bullet two'], tags:['React','Laravel']},
    {role:'Role', company:'Company', period:'2021–2023', bullets:['Impact bullet'], tags:['PHP','Docker']}
  ],
  projects: [
    {title:'Project A', desc:'Quick description', stack:['React','API']},
    {title:'Project B', desc:'Quick description', stack:['Laravel','MySQL']},
    {title:'Project C', desc:'Quick description', stack:['Python','ML']},
    {title:'Project D', desc:'Quick description', stack:['Android']},
    {title:'Project E', desc:'Quick description', stack:['Java']},
    {title:'Project F', desc:'Quick description', stack:['React']}
  ],
  certifications: [
    {title:'Certificate Title', org:'Org', period:'Dates'},
    {title:'Another Title', org:'Org', period:'Dates'}
  ],
  contact: {
    email:'you@example.com',
    location:'Your City',
    availability:'Open to opportunities'
  }
}
