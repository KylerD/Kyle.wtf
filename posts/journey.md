---
title: 'Journey'
date: '2023-02-13'
---

Last weekend my mum was telling me about her job as a health visitor and the process that she follows to expense fuel costs for travel. Healthcare visitors often travel extensively as part of their job and need to track their journeys to claim fuel expenses. My mum keeps a journal of her travels and manually enters the details into an expensing system either day by day, or at month-end. 

My mum is a bit of a technophobe so I was curious to see how she went about this, in her words it "takes forever". It turns out she uses Google Maps Directions to map out her journeys and manually enters the distance and mileage information into the expensing system. That seemed ok on paper but when I saw this in action, the process was slow and inefficient for a couple of reasons.

1. The Google Maps page focuses mainly on the map, dedicating about 80% of the screen to it. I could see this was making it difficult for my mum to use the application controls.
2. The expenses system doesn't allow for screenshots or other attachments, so my mum has to enter all the journey information in manually as part of her evidence. My mum isn't a fast typer so this took a long time

![](/images/directions.png)

I figured I could use Google APIs to build a better experience for her use-case, for example by allowing her to get the same journey results as with Google Directions, but with the additional ability to copy the journey breakdown into the clipboard. I've been playing around with [Next.JS](https://nextjs.org/) and [Tailwind](https://tailwindcss.com/) a lot lately so I was able to whip something up pretty quickly.

## Introducing Journey

[Journey](https://journeyplan.app/) is a journey planner designed to be more accessible to healthcare visitors. The application provides an accurate record of the distance traveled and time spent on the road, and a simple, straightforward way to copy journey information that can be pasted into another system. It features a user-friendly interface that makes it accessible for all ages.

![](/images/journeyplan.png)

Journey is built on [Next.JS](https://nextjs.org/), a popular React-based framework that enables fast and efficient server-side rendering. It comes with a bunch of accessibility features by default and it's ability to blend static site generation with server-side rendering, in tandem with serverless lambda driven deployments on [Vercel](https://vercel.com/) makes for a fast and effective application with minimal effort.

