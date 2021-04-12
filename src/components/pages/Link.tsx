import React from "react";
import pgpkey from "../organisms/LinkPage/assets/tata.asc";
import { LinkContent } from "../organisms/LinkPage/LinkContent";
import { ContentsContainer } from "../shared/ContentsContainer";

const Link: React.FC = () => {
  return (
    <ContentsContainer>
      <LinkContent
        linkTargetServiceName="twitter"
        targetServiceId="8picumu"
        linkUrl="https://twitter.com/8picomu"
      />
      <LinkContent
        linkTargetServiceName="github"
        targetServiceId="8picomu"
        linkUrl="https://github.com/8picomu"
      />
      <LinkContent
        linkTargetServiceName="scrapbox"
        targetServiceId="8picomu"
        linkUrl="https://scrapbox.io/8picomu/"
      />
      <LinkContent
        linkTargetServiceName="mail"
        targetServiceId="8picomu@tata.pw"
        linkUrl="mailto:8picomu@tata.pw"
      >
        <a href={pgpkey} download="tata.asc">
          PGP
        </a>
      </LinkContent>
    </ContentsContainer>
  );
};

export { Link };
