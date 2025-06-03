"use client";

import { useEffect } from "react";

export default function KameleoonCookie() {
  useEffect(() => {

    let topLevelDomain = window.location.hostname;
    let visitorCode = null;

    const cookies = document.cookie.split(";");
    cookies.forEach(function (cookie) {
      let cookieNameAndValuePair = cookie.match(/(.*?)=(.*)$/);
      if (
        cookieNameAndValuePair &&
        cookieNameAndValuePair[1].trim() === "kameleoonVisitorCode"
      ) {
        visitorCode = cookieNameAndValuePair[2].trim();
      }
    });

    if (!visitorCode) {
      let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
      let alphabetLength = alphabet.length;
      visitorCode = "";
      for (let i = 0; i < 16; ++i) {
        let randomNumber = Math.floor(Math.random() * alphabetLength);
        visitorCode += alphabet[randomNumber];
      }

      let expires = new Date(new Date().getTime() + 32832000000);
      document.cookie = `kameleoonVisitorCode=${visitorCode}; expires=${expires.toUTCString()}; path=/; domain=${topLevelDomain}`;
    }

  }, []);

  return null;
}
