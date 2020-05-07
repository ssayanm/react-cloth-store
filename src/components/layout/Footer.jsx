import React from "react";

const Footer = () => {
  return (
    <div className="container w-full h-12">
      <p className="text-center">
        © 2020 - Developed with
        <i class="fa fa-heart px-2"></i>
        by{" "}
        <a
          href="mailto:hello@sayanmukherjee.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sayan Mukherjee
        </a>
      </p>
    </div>
  );
};

export default Footer;
