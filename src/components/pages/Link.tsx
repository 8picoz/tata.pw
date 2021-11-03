import React, { useEffect } from "react";
import pgpkey from "../organisms/LinkPage/assets/tata.asc";
import { LinkContent } from "../organisms/LinkPage/LinkContent";
import { ContentsContainer } from "../shared/ContentsContainer";

const Link: React.VFC = () => {
  useEffect(() => {
    document.title = "Link";
  }, []);

  return (
    <ContentsContainer>
      <LinkContent
        linkTargetServiceName="twitter"
        targetServiceId="8picoz"
        linkUrl="https://twitter.com/8picoz"
      />
      <LinkContent
        linkTargetServiceName="github"
        targetServiceId="8picoz"
        linkUrl="https://github.com/8picoz"
      />
      <LinkContent
        linkTargetServiceName="scrapbox"
        targetServiceId="8picoz"
        linkUrl="https://scrapbox.io/8picoz/"
      />
      <LinkContent
        linkTargetServiceName="mail"
        targetServiceId="8picoz@tata.pw"
        linkUrl="mailto:8picoz@tata.pw"
      >
        <a href={pgpkey} download="tata.asc">
          PGP
        </a>
      </LinkContent>
    </ContentsContainer>
  );
};

export { Link };
