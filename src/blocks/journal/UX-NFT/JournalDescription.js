import React from "react";
import userflow from '../../../assets/journalImages/NFT/userflow.png'

const JournalDescription = () => {
  return (
    <div className="description">
      <h5 style={{ color: "black" }}>1. Project Overview</h5>
      <p>
        NFT marketplace that allows users to buy, sell, and discover rare
        digital items such as crypto collectibles, gaming items, art, and more.
        It has become one of the most popular NFT marketplaces in the industry,
        and its success can be attributed to its user-friendly interface. This
        website is designed to improve first user experience , which is easy to
        navigate and can be used by all type of users.
      </p>

      <blockquote>
        Goal is to create a seamless and intuitive experience for users
        interacting with NFTs on various platforms, such as marketplaces. The
        primary objective is to provide users with an easy and straightforward
        way to browse, buy, sell, and manage their NFTs.
        <ul>
          <li>
            Understand the value and uniqueness of NFTs: help users understand
            the value and uniqueness of each NFT they interact with.
          </li>

          <li>Discover and browse NFTs easily</li>

          <li>
            Buy and sell NFTs with ease: NFT UX should simplify the buying and
            selling process by providing clear instructions, simple forms, and
            secure payment options.
          </li>
        </ul>
      </blockquote>

      <h5 style={{ color: "black" }}>2. Problem Statement</h5>
      <p>
        Provide a fully functional exchange platform for trading in NFTs so that
        :
      </p>
      <p>
        <ul>
          <li>All Type of user can use easily.</li>
          <li>Super easy navigation.</li>
          <li>Easy Payment process.</li>
        </ul>
      </p>

      <h5 style={{ color: "black" }}>3. Empthazing and Research</h5>
      <p>
        Before moving father , let us know about NTF Marketplace ,<br />
        <br />
        NFT(non-fungible token) It is a special kind of digital asset that
        cannot be traded one for one for standard currencies or commodities.
        Each NFT is unique because it has a unique digital signature that is
        kept on a blockchain, a decentralised digital ledger. Digital art,
        music, films, and other forms of internet content are among the many
        uses of NFTs. They are being used to sell and verify digital artwork and
        valuables.
        <br />
        <br />
        To conduct NFT UX research, conducted a series of user interviews and
        usability tests with a group of NFT collectors and enthusiasts. asked
        participants about their experiences buying, selling, and trading NFTs,
        as well as their expectations for a new NFT marketplace platform. <br />
        <br />
        Based on the feedback they receive from participants, I identified
        several key pain points and areas for improvement.
      </p>
      <p>
        <strong>The following are some pain points :</strong>
      </p>
      <p>
        <ol>
          <li>
            <span style={{ fontWeight: 900, textDecorationLine: "underline" }}>
              Poor navigation and organization:
            </span>{" "}
            Certain NFT markets might be difficult to navigate because of the
            abundance of material. Users may struggle to access the information
            they need due to inadequate navigation and structure, which can
            cause irritation and a bad user experience.
          </li>
          <li>
            <span style={{ fontWeight: 900, textDecorationLine: "underline" }}>
              Lack of filtering options:
            </span>{" "}
            Some markets don’t offer adequate filtering options, which may be
            important to users who wish to sort NFTs by certain factors like
            price, artist, or topic. Users may find it difficult and
            time-consuming to locate NFTs that are suitable for their unique
            requirements as a result.
          </li>
          <li>
            <span style={{ fontWeight: 900, textDecorationLine: "underline" }}>
              Confusing Purchasing processes:
            </span>{" "}
            The process of buying an NFT can be complex and confusing for users
            who are unfamiliar with cryptocurrency wallets and transactions.
            Poorly designed purchase processes can lead to errors,
            misunderstandings, and a poor user experience.
          </li>
          <li>
            <span style={{ fontWeight: 900, textDecorationLine: "underline" }}>
              Poorly designed user interfaces:
            </span>
            NFT marketplaces with poorly designed user interfaces can be
            frustrating to use. This may include confusing layouts, inconsistent
            button placements, or unclear instructions.
          </li>
        </ol>
      </p>

      <p>
        <strong>User Stories :</strong>
      </p>
      <p>
        <ol>
          <li>
            As an artist, I want it to be simple for me to exhibit and publish
            my artwork on the marketplace so that I may sell it and reach a
            larger audience.
          </li>
          <li>
            As a collector, I want to be able to search for and locate new NFTs
            depending on particular parameters like price, artist, or subject so
            that I may organise my collection and find NFTs that have personal
            significance for me.
          </li>
          <li>
            As a buyer, I want to be able to rapidly and securely buy NFTs using
            my favourite cryptocurrency.
          </li>
          <li>
            As a seller, I want to be able to set and manage my own prices for
            my NFTs, so that I can maximize my profits and maintain control over
            my creations.
          </li>
          <li>
            As a beginner in the NFT world, I want to be able to easily
            understand how to buy, sell, and trade NFTs, so that I can
            participate in the marketplace without confusion or frustration.
          </li>
          <li>
            As a long-time collector, I want to be able to track the value of my
            NFTs over time, so that I can make informed decisions about buying,
            selling, or holding my collection.
          </li>
          <li>
            As a fan of a specific artist or creator, I want to be able to
            follow their work and receive notifications when new NFTs are
            available, so that I can be the first to purchase their latest
            creations.
          </li>
        </ol>
      </p>

      <h5 style={{ color: "black" }}>4. User Flow</h5>
      <p>
        <img src={userflow} alt="user flow"/>
      </p>

      <h5 style={{ color: "black" }}>5. Hi-Fi wireframes</h5>
      <p>
        <a href="https://www.figma.com/file/uphjeq2k2nT97u58LQdavj/NFT?node-id=2%3A27&t=qzWFHSEdvI7XcYow-1">Figma Screens</a>
      </p>

      <h5 style={{ color: "black" }}>6. Prototype</h5>
      <p>
        <a href=" https://www.figma.com/proto/uphjeq2k2nT97u58LQdavj/NFT?page-id=2%3A27&node-id=48-100&viewport=339%2C254%2C0.05&scaling=scale-down&starting-point-node-id=48%3A100&show-proto-sidebar=1">Figma Link</a>
      </p>
    </div>
  );
};

export default JournalDescription;
