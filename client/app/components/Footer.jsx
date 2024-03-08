const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center h-16 lg:h-10 font-[Inter] bg-[#FF6600] text-black text-sm lg:text-xs">
      <p className="text-center lg:text-left">
        &copy; {currentYear} Created from scratch by &nbsp;
        <a
          className="no-underline font-bold"
          href="https://www.linkedin.com/in/nacreddine-chouich-9a72aa1ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nacereddine Chouich.
        </a>
          &nbsp;All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
