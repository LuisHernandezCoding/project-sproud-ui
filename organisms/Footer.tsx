import React from "react";
import FooterAtom from "../atoms/Footer";
import FooterContent from "../molecules/FooterContent";

export default function Footer(): JSX.Element {
  return (
    <FooterAtom id="site-footer" role="contentinfo">
      <FooterContent />
    </FooterAtom>
  );
}
