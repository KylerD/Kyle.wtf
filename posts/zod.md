---
title: 'Zod'
date: '2022-09-01'
---

*Full Disclosure: This is my first post in [Donkeys](https://www.irelandbeforeyoudie.com/20-irish-slang-phrases-you-need-to-know/#h-13-donkey-s-years). Expect some writing quality turbulence, also I tend to write how I talk so read this back to yourself in a Ballybeen accent and you'll be grand*

One of the things I do at [Kainos](https://www.kainos.com/) is lead our organization's JavaScript community. While I'm certainly not a JavaScript know-it-all I do spend a lot of time working on JavaScript projects. Not as part of my day job mind you, as an Architect I mostly draw diagrams. But I love programming as a hobby, and I exclusively choose JavaScript for pretty much everything I build. To be totally honest I use [TypeScript](https://www.typescriptlang.org/) rather than JavaScript but sure it's apples and oranges.

I recently started a fortnightly drop-in session in Kainos where people can come and ask questions about JavaScript, share knowledge, give talks and so on. In our last session I gave a presentation on [Zod](https://zod.dev/) - a super slick TypeScript-first schema declaration and validation library. I thought it might be nice to relay the talks I'm giving internally to anyone that reads my blog, so mum this one's for you.

## Zod in 5 minutes

I'm going to try and condense a 20 minute presentation down to a 5 minute read in the interest of Gen Z attention spans. So here's the deal, let's say you're writing an API.

```typescript
interface RequestModel {
  username: string
  password: string
}

interface ResponseModel {
  status: number
  message: string
}

async function myEndpoint(requestBody: RequestModel): Promise<ResponseModel> { ... }
```

Chances are you'd want to validate the `requestBody` contains certain fields in certain formats. Enter Zod:

```typescript
import { z } from `zod`

const RequestValidator = z.object({
  username: z.string().email(),
  password: z.string().nonempty()
});

interface RequestModel {
  username: string
  password: string
}

interface ResponseModel {
  status: number
  message: string
}

async function myEndpoint(requestBody: RequestModel): Promise<ResponseModel> { 
  const validation = RequestValidator.safeParse(reqBody);

  if (!validation.success) {
    return { status: 400, message: "Bad Request" }
  }

  return { status: 200, message: "Alright alright alright" }
}
```

Now we're validating that the `requestBody` contains a username with an email address format, and that the password exists too. But that's not all, through the power of **TYPE INFERENCE** Zod allows you to extract the type from the `RequestValidator` object, saving time with the `RequestModel` type declaration:

```typescript
import { z } from `zod`

const RequestValidator = z.object({
  username: z.string().email(),
  password: z.string().nonempty()
});

type RequestModel = z.infer<typeof RequestValidator>;

interface ResponseModel {
  status: number
  message: string
}

async function myEndpoint(requestBody: RequestModel): Promise<ResponseModel> { 
  const validation = RequestValidator.safeParse(reqBody);
  if (!validation.success) {
    return { status: 400, message: "Bad Request" }
  }

  return { status: 200, message: "Alright alright alright" }
}
```

For me this is a far better way to implement request models and validation because:
1. [Other validators](https://github.com/typestack/class-validator) often use Decorators which is an experimental feature of TypeScript that requires changing your config to support.
2. Zod has a super small footprint (8KB minified, zero dependencies)
3. It works with plain JavaScript and has a ton of other features I can't be bothered writing about including Data Transformation, Promise Schemas, Recursive Types and more

## Conclusion: Adopt

Zod is excellent.
![](https://c.tenor.com/Hoo34ly0rZwAAAAC/futurama-toad.gif)