---
title: 'On-Chain Magic'
date: '2022-06-20'
---

Around October last year I kind of became obsessed with **NFTs (Non-Fungible Tokens)**. The topic seems to be a bit like Marmite, you either love it or you hate it. Whatever your opinion, you can't deny NFTs are interesting from a technical perspective; proof of ownership, decentralised data, the [volatile gas prices](https://ycharts.com/indicators/ethereum_average_gas_price)!

I've presented on the topic a few times within Kainos from different perspectives. The first time I talked about NFTs I talked about them from the consumer perspective, what makes an NFT like [Bored Apes](https://opensea.io/collection/boredapeyachtclub) worth hundreds of thousands of pounds? After many months of teaching myself [Solidity](https://docs.soliditylang.org/en/v0.8.15/), I eventually understood how NFTs work under the hood. Now I've come to realise the average [degen](https://medium.datadriveninvestor.com/79-nft-crypto-words-you-need-to-know-the-crypto-nft-slang-dictionary-adcc39ad846b) has no idea what they're buying

It's strange to me that NFTs found their popularity on the foundation of decentralised ownership, yet most NFTs store all of their metadata in a centralised location outside of the blockchain. Frankly, the consumer market doesn't give a shit what, where or how the NFT functions from a technical perspective, and you could even argue the value of most NFTs is purely social driven and has nothing to do with the technology itself

On the other hand, there *are* some NFT projects that have found success purely from technical innovation. [On-Chain Monkey](https://onchainmonkey.com/) was the first entirely on-chain NFT collection to be generated in a single transaction. It was also the first NFT I ever purchased. To me, this was the interesting part about NFTs; utilising the capabilities of the blockchain to create something purely decentralised.

## Smart Contracts 101

If you know nothing at all about writing programs a.k.a [Smart Contracts](https://ethereum.org/en/developers/docs/smart-contracts/) for the Ethereum blockchain, all you really to need to know is that they are very similar to classes in object orientated programming. They have functions, variables, scope, all the hits you know and love. The catch is that deploying contracts and calling transactions which change the state of the contract data costs money. This is because you have to pay a fee known as [Gas](https://ethereum.org/en/developers/docs/gas/) to successfully execute a transaction on the blockchain.

To give you an idea of cost, the most basic contracts can cost upward of £500, while more meaningful applications could easily exceed £10,000. The gas fees associated with deploying the contract are mostly due to it's size, for example a kilobyte of data adds about £200 to your deployment fee. Bonkers, right?

Hopefully now you can see why most NFT projects store their data **off-chain** rather than **on-chain**. Since the majority of consumers don't really care about under the hood, it makes sense to go with the cheapest storage option. It also makes it a lot easier to build NFTs with more complex assets like video and audio since you can just upload to a cloud service and provide your NFT with a reference to the data.

## Is On-Chain Worth It?
You're maybe thinking **"then why bother with on-chain?"**. In my eyes, the value of on-chain data is about ownership. If I own a fully-on-chain NFT then what I see is what I get. I don't have to worry about a server going down that stores my artwork, the blockchain is the trusted party in this scenario, or rather, it caters for a lack there-of. On-chain data is a selling point for a tech savvy audience, it opens up an opportunity for innovation that most projects shy away from due to both complexity and cost. 

## How To Build On-Chain NFTs

Lets create a new NFT collection based on the [ERC-721 standard](https://eips.ethereum.org/EIPS/eip-721). The quickest way to get started is via the [OpenZeppelin Wizard](https://wizard.openzeppelin.com/#erc721). OpenZeppelin is an open-source platform that provides battle-tested libraries for writing smart-contracts. Their wizard tool is a neat little contract builder that handles the most common features you might want in an NFT:
![](/images/openzep.png)

