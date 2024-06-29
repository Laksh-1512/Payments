import React from 'react';
import Body_Card from './Body_Card';

const data = [
  {
    img: "https://img.icons8.com/color/48/dragon.png",
    Name: "Branches",
    Text: "Abstract Branches lets you manage, version, and document your designs in one place."
  },
  {
    img: "https://img.icons8.com/color/48/day-of-the-dead.png",
    Name: "Manage organizations, teams, and projects",
    Text: "Use Abstract organizations, teams, and projects to organize your people and your work."
  },
  {
    img: "https://img.icons8.com/color/48/monarch-butterfly.png",
    Name: "Authenticate to Abstract",
    Text: "Set up and configure SSO, SCIM, and Just-in-Time provisioning."
  },
  {
    img: "https://img.icons8.com/color/48/cat--v1.png",
    Name: "Manage your account",
    Text: "Configure your account settings, such as your email, profile details, and password."
  },
  {
    img: "https://img.icons8.com/color/48/dog.png",
    Name: "Manage billing",
    Text: "Change subscriptions and payment details."
  },
  {
    img: "https://img.icons8.com/color/48/clown-fish.png",
    Name: "Abstract support",
    Text: "Get in touch with a human."
  }
];

const Body = () => {
  return (
    <div className='h-[40rem] w-full'>
      <div className='grid grid-cols-2 gap-[5rem] justify-center m-40 h-[35rem] w-[82rem]'>
        {data.map((e, i) => (
          <Body_Card key={i} name={e.Name} text={e.Text} img={e.img} />
        ))}
      </div>
    </div>
  );
}

export default Body;
